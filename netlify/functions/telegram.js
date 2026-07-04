// Netlify serverless function: forwards the qualification form to a Telegram bot.
// TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are read from Netlify environment
// variables (Site settings -> Environment variables), never exposed to the browser.

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan' })
    }
  }

  let data
  try {
    data = JSON.parse(event.body || '{}')
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Noto\'g\'ri so\'rov' }) }
  }

  const list = (v) => (Array.isArray(v) && v.length ? v.join(', ') : '—')

  const text = [
    '🆕 Yangi ariza — SPEKTOR.',
    '',
    `👤 Ism: ${data.name || '—'}`,
    `📞 Telefon: ${data.phone || '—'}`,
    `🏢 Biznes turi: ${data.bizType || '—'}`,
    `📷 Instagram: ${data.insta || '—'}`,
    `🛠 Avval foydalangan vositalar: ${list(data.tools)}`,
    `💰 Byudjet 1000$dan yuqorimi: ${data.budget || '—'}`,
    `📊 Sotuv bo'limi: ${data.sales || '—'}${data.salesCount ? ' (' + data.salesCount + ' operator)' : ''}`,
    `🎯 Qiziqqan xizmat: ${list(data.service)}`,
    `🧑‍💼 Lavozim: ${data.role || '—'}`
  ].join('\n')

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    })

    if (!res.ok) {
      const detail = await res.text()
      return { statusCode: 502, body: JSON.stringify({ error: 'Telegram xatosi', detail }) }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) }
  }
}
