const twcolors = require("tailwindcss/colors")

const myTheme = {
  colors: {
    primary: {
      50: "var(--primary-50)",
      100: "var(--primary-100)",
      200: "var(--primary-200)",
      300: "var(--primary-300)",
      400: "var(--primary-400)",
      500: "var(--primary-500)",
      600: "var(--primary-600)",
      700: "var(--primary-700)",
      800: "var(--primary-800)",
      900: "var(--primary-900)",
    },
    secondary: {
      50: "var(--secondary-50)",
      100: "var(--secondary-100)",
      200: "var(--secondary-200)",
      300: "var(--secondary-300)",
      400: "var(--secondary-400)",
      500: "var(--secondary-500)",
      600: "var(--secondary-600)",
      700: "var(--secondary-700)",
      800: "var(--secondary-800)",
      900: "var(--secondary-900)",
    },
    tertiary: {
      50: "var(--tertiary-50)",
      100: "var(--tertiary-100)",
      200: "var(--tertiary-200)",
      300: "var(--tertiary-300)",
      400: "var(--tertiary-400)",
      500: "var(--tertiary-500)",
      600: "var(--tertiary-600)",
      700: "var(--tertiary-700)",
      800: "var(--tertiary-800)",
      900: "var(--tertiary-900)",
    },
    neutral: {
      50: "var(--neutral-50)",
      100: "var(--neutral-100)",
      200: "var(--neutral-200)",
      300: "var(--neutral-300)",
      400: "var(--neutral-400)",
      500: "var(--neutral-500)",
      600: "var(--neutral-600)",
      700: "var(--neutral-700)",
      800: "var(--neutral-800)",
      900: "var(--neutral-900)",
    },
  },
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: myTheme.colors.primary,
        secondary: myTheme.colors.secondary,
        tertiary: myTheme.colors.tertiary,
        neutral: myTheme.colors.neutral,
        ...twcolors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
