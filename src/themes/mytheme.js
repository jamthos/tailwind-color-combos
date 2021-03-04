import colors from "tailwindcss/colors"

export const setKeyPalette = (colorSet, colorLevel) => {
  let themeSet = {}
  Object.keys(colorSet).map(
    (colorKey) =>
      (themeSet["--" + colorLevel + "-" + colorKey] = colorSet[colorKey])
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
