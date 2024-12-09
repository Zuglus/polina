/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'mv-skifer': ['MV-SKIFER', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
      },
      colors: {
        'primary': '#04061B',
      }
    },
  },
  plugins: [],
}
