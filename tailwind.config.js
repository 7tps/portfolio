/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: [
          '"Press Start 2P"',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
      colors: {
        retro: {
          bg: '#171717',
          fg: '#ededed',
          accent: '#0ff',
          yellow: '#ff0',
          magenta: '#f0f',
          green: '#0f0',
          red: '#f00',
          blue: '#00f',
        },
      },
      boxShadow: {
        pixel: '4px 4px 0 #000, 8px 8px 0 #f0f',
      },
    },
  },
  plugins: [],
}; 