/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    fontFamily: {
      'brand': ['Dela Gothic One'],
    },
    fontSize: {
      'clamp-big': "clamp(2rem, 10vw, 10rem)",
      'clamp-mid': "clamp(1.5rem, 8vw, 6rem)",
      'clamp-small': "clamp(1rem, 5vw, 3rem)",
      'clamp-xs': "clamp(0.25rem, 3vw, 2rem)",
    },
  },
  plugins: [],
}
