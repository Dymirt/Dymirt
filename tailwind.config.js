/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0e13',
        paper: '#f1eee8',
        acid: '#d59a6a',
        mint: '#a6b0be',
        fog: '#9aa4b2'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      maxWidth: { page: '88rem' }
    }
  },
  plugins: []
};
