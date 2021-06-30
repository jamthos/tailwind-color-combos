import React, { useRef } from "react"
import { css } from "twin.macro"
import colors from "tailwindcss/colors"
import { ColorNames, ColorState } from "../types"

type Props = {
  colorNames: ColorNames
  colorLevel: string
  currentColor: string
  previewColors: ColorState
  setPreview: Function
  setColor: Function
}

const ColorPicker = ({
  colorNames,
  colorLevel,
  currentColor,
  previewColors,
  setPreview,
  setColor,
}: Props) => {
  //set ref for swatch so callbacks know what element to change
  const colorPreview = useRef(null)

  return (
    <div tw="p-2">
      <h2 tw="tracking-wide font-light text-lg text-trueGray-100 capitalize">
        {colorLevel}
      </h2>
      <div tw="grid grid-cols-2">
        <div
          ref={colorPreview}
          tw="rounded-l flex flex-col items-center justify-center relative transition-colors duration-100 shadow uppercase"
          css={css`
            background-color: ${colors[currentColor][500]};
            color: ${colors[currentColor][800]};
          `}
        >
          <h3 tw="p-1.5 px-2 bg-white rounded-full shadow text-sm leading-none">
            {
              // show color name on preview swatch
              colorNames[previewColors[colorLevel]] ||
                previewColors[colorLevel] ||
                colorNames[currentColor] ||
                currentColor
            }
          </h3>
        </div>
        <div tw="shadow-inner p-1.5 bg-trueGray-50 rounded-r">
          <ul tw="flex flex-wrap justify-start max-w-max mx-auto">
            {Object.keys(colors).map((c, i) => {
              const skipColors = ["black", "white", "lightBlue"]
              if (!skipColors.includes(c)) {
                return (
                  <li tw="h-6 w-6 block" key={c + i}>
                    <button
                      onMouseEnter={() =>
                        setPreview(c, true, colorPreview.current, colorLevel)
                      }
                      onMouseLeave={() =>
                        setPreview(c, false, colorPreview.current, colorLevel)
                      }
                      onClick={() => setColor(c, colorLevel)}
                      css={css`
                        background-color: ${colors[c][500]};
                        color: ${colors[c][800]};
                      `}
                      tw="block rounded font-bold w-full h-6 border-white border-2 focus:(border-current outline-none) hover:(border-current cursor-pointer shadow-inner)"
                    >
                      <span tw="hidden">{c}</span>
                    </button>
                  </li>
                )
              } else {
                return null
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
