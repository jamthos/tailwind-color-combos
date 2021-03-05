import colors from "tailwindcss/colors"

export const setColorPalette = (colorSet, colorLevel) => {
  let themeSet = {}
  Object.keys(colorSet).map(
    (colorKey) =>
      (themeSet["--" + colorLevel + "-" + colorKey] = colorSet[colorKey])
  )
  return themeSet
}

const defaultTheme = {
  ...setColorPalette(colors.blue, "primary"),
}
const pinkTheme = {
  ...setColorPalette(colors.rose, "primary"),
}

const MyThemes = {
  default: defaultTheme,
  pink: pinkTheme,
}

export default MyThemes
