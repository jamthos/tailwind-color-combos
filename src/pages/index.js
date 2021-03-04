import React, { useState, useRef } from "react";
import { css } from "twin.macro";

import Layout from "../components/Layout";
import TailwindCTA from "../components/TailwindCTA";
import TailwindBanner from "../components/TailwindBanner";
import TailwindLayout from "../components/TailwindLayout";
import colors from "tailwindcss/colors";

// import myThemes from "../themes/mytheme"
import { setKeyPalette } from "../themes/mytheme";

const colorNames = {
  lightBlue: "light blue",
  warmGray: "warm gray",
  trueGray: "true gray",
  coolGray: "cool gray",
  blueGray: "blue gray",
};

// markup
const IndexPage = () => {
  const defaultTheme = {
      ...setKeyPalette(colors.rose, "primary"),
  };
  const colorPreview = useRef(null);
  const [primaryColor, setPrimaryColor] = useState("rose");
  const [primaryColorPreview, setPrimaryColorPreview] = useState("rose");
  const [dynamicTheme, setDynamicTheme] = useState(defaultTheme);

  const previewColor = (colorname, onEnter) => {
    if (onEnter) {
      colorPreview.current.style.backgroundColor = colors[colorname][500];
      colorPreview.current.style.color = colors[colorname][500];
      setPrimaryColorPreview(colorname);
    } else {
      colorPreview.current.style.backgroundColor = colors[primaryColor][500];
      colorPreview.current.style.color = colors[primaryColor][500];
      setPrimaryColorPreview("");
    }
  };

  const setColor = (whatColor, whatLevel) => {
    whatLevel === "primary" && setPrimaryColor(whatColor);
    setDynamicTheme(currentTheme => ({
        ...currentTheme,
        ...setKeyPalette(colors[whatColor], "primary"),
    }));
  };

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
                  }}
                >
                  {!colorNames[c]
                    ? c.toUpperCase()
                    : colorNames[c].toUpperCase()}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>

        <div tw="my-10 p-4 border rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
          </div>
        </div>

        <div tw="mt-8">
          <h2 tw="text-2xl font-bold tracking-tight mb-2">Sample components</h2>
          <div tw="p-5 border rounded-lg">
            <TailwindBanner />
            <TailwindCTA />
            <TailwindLayout />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
