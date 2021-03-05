import React, { useReducer, useState } from "react"
import tw from "twin.macro"
import colors from "tailwindcss/colors"

import Layout from "../components/Layout"
import ColorPicker from "../components/ColorPicker"

// Example components
import TailwindCTA from "../components/TailwindCTA"
import TailwindBanner from "../components/TailwindBanner"
import TailwindLayout from "../components/TailwindLayout"

import { setKeyPalette } from "../themes/mytheme"

//set readable names for some of the color keys
const colorNames = {
  lightBlue: "light blue",
  warmGray: "warm gray",
  trueGray: "true gray",
  coolGray: "cool gray",
  blueGray: "blue gray",
}

// set initial state for color combos
const initialColorState = {
  primary: "rose",
  secondary: "lightBlue",
  tertiary: "pink",
  neutral: "trueGray",
}

// set css variables to default palette
const defaultTheme = {
  ...setKeyPalette(colors.rose, "primary"),
  ...setKeyPalette(colors.lightBlue, "secondary"),
  ...setKeyPalette(colors.pink, "tertiary"),
  ...setKeyPalette(colors.trueGray, "neutral"),
}

// reducer to save the selected color in state
const colorReducer = (state, action) => {
  switch (action.type) {
    case "primary":
      return {
        ...state,
        primary: action.newColor,
      }
    case "secondary":
      return {
        ...state,
        secondary: action.newColor,
      }
    case "tertiary":
      return {
        ...state,
        tertiary: action.newColor,
      }
    case "neutral":
      return {
        ...state,
        neutral: action.newColor,
      }
    default:
      throw new Error()
  }
}

const IndexPage = () => {
  const [colorState, dispatchColorReducer] = useReducer(
    colorReducer,
    initialColorState
  )
  const [previewColors, setPreviewColors] = useState(initialColorState)

  const [dynamicTheme, setDynamicTheme] = useState(defaultTheme)

  // callback function for mouseEnter and mouseLeave on color picker
  // changes swatch to show preview color and name
  // returns to selected color in state on mouseLeave
  const setPreview = (colorName, isOnEnter, el, whatLevel) => {
    if (isOnEnter) {
      el.style.backgroundColor = colors[colorName][500]
      el.style.color = colors[colorName][500]
      setPreviewColors({ ...previewColors, [whatLevel]: colorName })
    } else {
      el.style.backgroundColor = colors[colorState[whatLevel]][500]
      el.style.color = colors[colorState[whatLevel]][500]
      setPreviewColors({ ...previewColors, [whatLevel]: "" })
    }
  }

  // callback function for click event on color picker swatch
  // sets new color in state and updates theme's custom properties
  const setColor = (whatColor, whatLevel) => {
    dispatchColorReducer({ type: whatLevel, newColor: whatColor })

    setDynamicTheme((currentTheme) => ({
      ...currentTheme,
      ...setKeyPalette(colors[whatColor], whatLevel),
    }))
  }

  return (
    <Layout css={dynamicTheme}>
      <main tw="container mx-auto my-8 p-2">
        <h1 tw="text-2xl font-bold  mb-4 tracking-tight text-gray-800">
          Tailwind Extended Colors
        </h1>
        <ul tw="flex flex-wrap justify-start gap-1 border-t pt-4 mb-4">
          {Object.keys(colors).map((c, i) => {
            if (i > 1) {
              return (
                <li
                  key={c}
                  tw="p-2 py-1 rounded shadow text-xs font-light"
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

        <div tw="mb-10 p-4 pt-2 border rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            whatLevel={"primary"}
            keyColor={colorState.primary}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />

          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            whatLevel={"secondary"}
            keyColor={colorState.secondary}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />

          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            whatLevel={"tertiary"}
            keyColor={colorState.tertiary}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />

          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            whatLevel={"neutral"}
            keyColor={colorState.neutral}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />
        </div>

        <div tw="mt-8">
          <p>
            <Tag tw="bg-primary-200 text-primary-500">primary</Tag>{" "}
            <Tag tw="bg-neutral-200 text-neutral-500">neutral</Tag>
          </p>
          <h2 tw="text-2xl font-bold tracking-tight mb-2">
            Tailwind UI Sample
          </h2>
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

const Tag = tw.span`text-xs px-3 py-0.5 rounded-full shadow-sm font-light`
