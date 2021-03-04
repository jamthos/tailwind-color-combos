import colors from "tailwindcss/colors"

export const setKeyPalette = (colorSet, themeKey) => {
  let themeSet = {}
  Object.keys(colorSet).map(
    (colorKey) =>
      (themeSet["--" + themeKey + "-" + colorKey] = colorSet[colorKey])
  )
  return themeSet
}

const defaultTheme = {
  ...setKeyPalette(colors.blue, "primary"),
}
const stationeryTheme = {
  ...setKeyPalette(colors.rose, "primary"),
}

const MyThemes = {
  default: defaultTheme,
  stationery: stationeryTheme,
}

export default MyThemes
