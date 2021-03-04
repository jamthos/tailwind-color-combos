import React, { useRef } from "react"
import { css } from "twin.macro"

const ColorPicker = ({
  colors,
  colorNames,
  whatLevel,
  keyColor,
  previewColors,
  setPreview,
  setColor,
}) => {
  const colorPreview = useRef(null)

  return (
    <div tw="p-2">
      <h3 tw="tracking-wide font-thin">{whatLevel.toUpperCase()}</h3>
      <div tw="grid grid-cols-2 gap-2">
        <div
          tw="rounded flex flex-col items-center justify-center relative transition-colors duration-100 shadow-inner"
          css={css`
            background-color: ${colors[keyColor][500]};
            color: ${colors[keyColor][500]};
          `}
          ref={colorPreview}>
          <h3 tw="p-1 px-2 bg-white rounded-full shadow-md text-xs leading-none tracking-wide font-light">
            {colorNames[previewColors[whatLevel]] ||
              previewColors[whatLevel] ||
              colorNames[keyColor] ||
              keyColor}
          </h3>
        </div>
        <div>
          <ul tw="flex flex-wrap justify-start">
            {Object.keys(colors).map((c, i) => {
              if (i > 1) {
                return (
                  <li tw="h-6" key={c + i}>
                    <button
                      onMouseEnter={() =>
                        setPreview(c, true, colorPreview.current, whatLevel)
                      }
                      onMouseLeave={() =>
                        setPreview(c, false, colorPreview.current, whatLevel)
                      }
                      onClick={() => setColor(c, whatLevel)}
                      css={css`
                        background-color: ${colors[c][500]};
                        color: ${colors[c][700]};
                      `}
                      tw="block rounded font-bold w-6 h-6 border-white border-2 focus:(border-current outline-none) hover:(border-current cursor-pointer shadow-inner)">
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
