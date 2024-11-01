/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        'huge': '5rem',
      },
      fontFamily: {
        custom: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        'old-gold' : '#D49D08'
      },
    },
  },
  plugins: [],
}