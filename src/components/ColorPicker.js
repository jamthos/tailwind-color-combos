import React, { useRef } from "react";
import { css } from "twin.macro";

const ColorPicker = ({
  colors,
  colorNames,
  keyColorType,
  keyColor,
  keyColorPreview,
  previewColor,
  setColor,
}) => {
  const colorPreview = useRef(null);

  return (
    <div tw="p-2">
      <h3 tw="tracking-tight font-bold">{keyColorType.toUpperCase()} Color:</h3>
      <div tw="grid grid-cols-2 gap-2">
        <div
          tw="rounded shadow flex flex-col items-center justify-center relative transition-colors duration-100"
          css={css`
            background-color: ${colors[keyColor][500]};
            color: ${colors[keyColor][500]};
          `}
          ref={colorPreview}
        >
          <h3 tw="px-2 bg-white rounded-full shadow text-sm tracking-tighter">
            {colorNames[keyColorPreview] ||
              keyColorPreview ||
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
                        previewColor(
                          c,
                          true,
                          colorPreview.current,
                          keyColorType
                        )
                      }
                      onMouseLeave={() =>
                        previewColor(
                          c,
                          false,
                          colorPreview.current,
                          keyColorType
                        )
                      }
                      onClick={() => setColor(c, keyColorType)}
                      css={css`
                        background-color: ${colors[c][500]};
                        color: ${colors[c][700]};
                      `}
                      tw="rounded font-bold w-6 h-6 border-white border-2 focus:(border-current outline-none) hover:(border-current cursor-pointer)"
                    >
                      <span tw="hidden">{c}</span>
                    </button>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
