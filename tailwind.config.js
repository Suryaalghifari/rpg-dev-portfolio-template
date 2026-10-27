/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a0f08',
        wood: {
          DEFAULT: '#2c1b10',
          2: '#4a2e1b',
          3: '#6a4428'
        },
        gold: '#ffd98a',
        cream: '#f8f4e1',
        meta: '#c4b69c',
        mint: '#74c69d',
        coral: '#e76f51',
        moss: '#365314',
        sky: {
          text: '#cfe3e8',
          1: '#0f2a3f',
          2: '#16405a',
          3: '#1f5a6e'
        },
      },
      fontFamily: {
        head: ['Silkscreen', 'Courier New', 'monospace'],
        body: ['VT323', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        panel: 'inset 0 0 0 4px #4a2e1b, 0 4px 0 #1a0f08',
        btn: 'inset 3px 3px 0 #6a4428, inset -3px -3px 0 #2c1b10',
      },
      borderRadius: {
        none: '0'
      },
    },
  },
  plugins: [],
}
