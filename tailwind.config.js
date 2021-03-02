const twcolors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...twcolors
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
