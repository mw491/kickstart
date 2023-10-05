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
      'clamp-small': "clamp(1rem, 5vw, 3rem)",
    },
  },
  plugins: [],
}
