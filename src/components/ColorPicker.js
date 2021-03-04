import React from "react";

const ColorPicker = () => {
  <div>
    <h3 tw="text-xl tracking-tight font-bold">Primary Color:</h3>
    <div tw="grid grid-cols-2 gap-2">
      <div
        tw="bg-rose-500 text-rose-500 rounded shadow flex flex-col items-center justify-center relative transition-colors duration-100"
        ref={colorPreview}
      >
        <h3 tw="px-2 bg-white rounded-full shadow text-sm tracking-tighter">
          {colorNames[primaryColorPreview] ||
            primaryColorPreview ||
            colorNames[primaryColor] ||
            primaryColor}
        </h3>
      </div>
      <div>
        <h3 tw="mb-1 font-bold text-xs tracking-tight text-gray-700">
          Select:
        </h3>
        <ul tw="flex flex-wrap justify-start">
          {Object.keys(colors).map((c, i) => {
            if (i > 1) {
              return (
                <li tw="h-6" key={c + i}>
                  <button
                    onMouseEnter={() => previewColor(c, true)}
                    onMouseLeave={() => previewColor(c, false)}
                    onClick={() => setColor(c, "primary")}
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
  </div>;
};

export default ColorPicker;
