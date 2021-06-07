import colors from "tailwindcss/colors"
import { ColorSet } from "../types"

export const setColorPalette = (colorSet: ColorSet, colorLevel: string) => {
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
