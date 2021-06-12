//@ts-check
import React, { useReducer, useState } from "react"
import tw from "twin.macro"
import colors from "tailwindcss/colors"

import Layout from "../components/Layout"
import ColorPicker from "../components/ColorPicker"

// Example components
import TailwindCTA from "../components/TailwindCTA"
import TailwindBanner from "../components/TailwindBanner"
import TailwindLayout from "../components/TailwindLayout"
import PriceCards from "../components/PriceCards"

import { setColorPalette } from "../themes/mytheme"

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

// setColorPalette
// sets css custom properties to match a tailwind color
// e.g. {--primary-100: tailwind.colors.rose.100}
// returns an css object with keys 50 to 900 matching tailwind
const defaultTheme = {
  ...setColorPalette(colors.rose, "primary"),
  ...setColorPalette(colors.lightBlue, "secondary"),
  ...setColorPalette(colors.pink, "tertiary"),
  ...setColorPalette(colors.trueGray, "neutral"),
}

/**
 * reducer to save the selected color in state
 * @function
 * @param {Object} state current React state
 * @param {Object} action action to take
 * @returns {Object}
 */
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
  const setPreview = (colorName, isOnEnter, el, colorLevel) => {
    if (isOnEnter) {
      el.style.backgroundColor = colors[colorName][500]
      el.style.color = colors[colorName][500]
      setPreviewColors({ ...previewColors, [colorLevel]: colorName })
    } else {
      el.style.backgroundColor = colors[colorState[colorLevel]][500]
      el.style.color = colors[colorState[colorLevel]][500]
      setPreviewColors({ ...previewColors, [colorLevel]: "" })
    }
  }

  // callback function for click event on color picker swatch
  // sets new color in state and updates theme's custom properties
  const setColor = (whatColor, colorLevel) => {
    dispatchColorReducer({ type: colorLevel, newColor: whatColor })

    setDynamicTheme((currentTheme) => ({
      ...currentTheme,
      ...setColorPalette(colors[whatColor], colorLevel),
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
                  }}
                >
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
            colorNames={colorNames}
            colorLevel={"primary"}
            currentColor={colorState.primary}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />

          <ColorPicker
            colorNames={colorNames}
            colorLevel={"secondary"}
            currentColor={colorState.secondary}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />

          <ColorPicker
            colorNames={colorNames}
            colorLevel={"tertiary"}
            currentColor={colorState.tertiary}
            previewColors={previewColors}
            setPreview={setPreview}
            setColor={setColor}
          />

          <ColorPicker
            colorNames={colorNames}
            colorLevel={"neutral"}
            currentColor={colorState.neutral}
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

        <div tw="mt-8">
          <p>
            <Tag tw="bg-primary-200 text-primary-500">primary</Tag>{" "}
            <Tag tw="bg-secondary-200 text-secondary-500">secondary</Tag>{" "}
            <Tag tw="bg-neutral-200 text-neutral-500">neutral</Tag>
          </p>
          <h2 tw="text-2xl font-bold tracking-tight mb-2">
            Cards with Secondary Color
          </h2>
          <div tw="p-5 border rounded-lg">
            <PriceCards />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

const Tag = tw.span`text-xs px-3 py-0.5 rounded-full shadow-sm font-light`
