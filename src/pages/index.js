import React, { useState } from "react"
import "twin.macro"
import colors from "tailwindcss/colors"

import Layout from "../components/Layout"
import ColorPicker from "../components/ColorPicker"

// Example components
import TailwindCTA from "../components/TailwindCTA"
import TailwindBanner from "../components/TailwindBanner"
import TailwindLayout from "../components/TailwindLayout"

import { setKeyPalette } from "../themes/mytheme"

const colorNames = {
  lightBlue: "light blue",
  warmGray: "warm gray",
  trueGray: "true gray",
  coolGray: "cool gray",
  blueGray: "blue gray",
}

const IndexPage = () => {

  // set css variables to default palette
  const defaultTheme = {
    ...setKeyPalette(colors.rose, "primary"),
    ...setKeyPalette(colors.lightBlue, "secondary"),
  }

  //set default state to default color palettes
  const [primaryColor, setPrimaryColor] = useState("rose")
  const [primaryColorPreview, setPrimaryColorPreview] = useState("rose")
  const [secondaryColor, setSecondaryColor] = useState("lightBlue")
  const [secondaryColorPreview, setSecondaryColorPreview] = useState(
    "lightBlue"
  )
  const [dynamicTheme, setDynamicTheme] = useState(defaultTheme)

  // callback function for mouseEnter and mouseLeave
  const previewColor = (colorName, isOnEnter, el, whatLevel) => {
    if (isOnEnter) {
      el.style.backgroundColor = colors[colorName][500]
      el.style.color = colors[colorName][500]
      switch (whatLevel) {
        case "primary":
          setPrimaryColorPreview(colorName)
          break
        case "secondary":
          setSecondaryColorPreview(colorName)
          break
        default:
          break
      }
    } else {
      switch (whatLevel) {
        case "primary":
          el.style.backgroundColor = colors[primaryColor][500]
          el.style.color = colors[primaryColor][500]
          setPrimaryColorPreview(primaryColor)
          break
        case "secondary":
          el.style.backgroundColor = colors[secondaryColor][500]
          el.style.color = colors[secondaryColor][500]
          setSecondaryColorPreview(secondaryColor)
          break
        default:
          break
      }
    }
  }

  // callback function for click event on color picker
  const setColor = (whatColor, whatLevel) => {
    if (whatLevel === "primary") {
      setPrimaryColor(whatColor)
      setDynamicTheme((currentTheme) => ({
        ...currentTheme,
        ...setKeyPalette(colors[whatColor], "primary"),
      }))
    }
    if (whatLevel === "secondary") {
      setSecondaryColor(whatColor)
      setDynamicTheme((currentTheme) => ({
        ...currentTheme,
        ...setKeyPalette(colors[whatColor], "secondary"),
      }))
    }
  }

  return (
    <Layout css={dynamicTheme}>
      <main tw="container mx-auto my-8 p-2">
        <h1 tw="text-2xl font-bold border-b mb-4 tracking-tight text-gray-800">
          Tailwind Extended Colors
        </h1>
        <ul tw="flex flex-wrap justify-start gap-1">
          {Object.keys(colors).map((c, i) => {
            if (i > 1) {
              return (
                <li
                  key={c}
                  tw="p-2 rounded shadow text-xs font-bold"
                  style={{
                    backgroundColor: colors[c][500],
                    color: colors[c][50],
                  }}>
                  {!colorNames[c]
                    ? c.toUpperCase()
                    : colorNames[c].toUpperCase()}
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>

        <div tw="my-10 p-4 pt-2 border rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            whatLevel={"primary"}
            keyColor={primaryColor}
            keyColorPreview={primaryColorPreview}
            previewColor={previewColor}
            setColor={setColor}
          />

          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            whatLevel={"secondary"}
            keyColor={secondaryColor}
            keyColorPreview={secondaryColorPreview}
            previewColor={previewColor}
            setColor={setColor}
          />
        </div>

        <div tw="mt-8">
          <h2 tw="text-2xl font-bold tracking-tight mb-2">Tailwind UI Sample</h2>
          <div tw="p-5 border rounded-lg">
            <TailwindBanner />
            <TailwindCTA />
            <TailwindLayout />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
