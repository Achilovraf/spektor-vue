/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        orange: {
          DEFAULT: '#FF6B1A',
          light: '#FF8C3D'
        },
        violet: {
          glow: '#4A5EFF'
        }
      }
    }
  },
  plugins: []
}
