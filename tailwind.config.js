/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      brand: ["Lato"],
    },
    fontSize: {
      "clamp-big": "clamp(2rem, 10vw, 10rem)",
      "clamp-mid": "clamp(1.5rem, 8vw, 6rem)",
      "clamp-small": "clamp(0.75rem, 5vw, 2.25rem)",
      "clamp-xs": "clamp(0.15rem, 3vw, 1.5rem)",
    },
  },
  plugins: [],
};
