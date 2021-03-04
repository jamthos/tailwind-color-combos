import React, { useState } from "react";
import "twin.macro";

import Layout from "../components/Layout";
import TailwindCTA from "../components/TailwindCTA";
import TailwindBanner from "../components/TailwindBanner";
import TailwindLayout from "../components/TailwindLayout";
import colors from "tailwindcss/colors";

// import myThemes from "../themes/mytheme"
import { setKeyPalette } from "../themes/mytheme";
import ColorPicker from "../components/ColorPicker";

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
    ...setKeyPalette(colors.lightBlue, "secondary"),
  };

  const [primaryColor, setPrimaryColor] = useState("rose");
  const [primaryColorPreview, setPrimaryColorPreview] = useState("rose");
  const [secondaryColor, setSecondaryColor] = useState("lightBlue");
  const [secondaryColorPreview, setSecondaryColorPreview] = useState(
    "lightBlue"
  );
  const [dynamicTheme, setDynamicTheme] = useState(defaultTheme);

  const previewColor = (colorName, onEnter, el, colorType) => {
    if (onEnter) {
      el.style.backgroundColor = colors[colorName][500];
      el.style.color = colors[colorName][500];
      switch (colorType) {
        case "primary":
          setPrimaryColorPreview(colorName);
          break;
        case "secondary":
          setSecondaryColorPreview(colorName);
          break;
        default:
          break;
      }
    } else {
      switch (colorType) {
        case "primary":
          el.style.backgroundColor = colors[primaryColor][500];
          el.style.color = colors[primaryColor][500];
          setPrimaryColorPreview(primaryColor);
          break;
        case "secondary":
          el.style.backgroundColor = colors[secondaryColor][500];
          el.style.color = colors[secondaryColor][500];
          setSecondaryColorPreview(secondaryColor);
          break;
        default:
          break;
      }
    }
  };

  const setColor = (whatColor, whatLevel) => {
    if (whatLevel === "primary") {
      setPrimaryColor(whatColor);
      setDynamicTheme((currentTheme) => ({
        ...currentTheme,
        ...setKeyPalette(colors[whatColor], "primary"),
      }));
    }
    if(whatLevel === "secondary"){
      setSecondaryColor(whatColor);
      setDynamicTheme((currentTheme) => ({
        ...currentTheme,
        ...setKeyPalette(colors[whatColor], "secondary"),
      }));
    };
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
          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            keyColorType={"primary"}
            keyColor={primaryColor}
            keyColorPreview={primaryColorPreview}
            previewColor={previewColor}
            setColor={setColor}
          />

          <ColorPicker
            colors={colors}
            colorNames={colorNames}
            keyColorType={"secondary"}
            keyColor={secondaryColor}
            keyColorPreview={secondaryColorPreview}
            previewColor={previewColor}
            setColor={setColor}
          />
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
