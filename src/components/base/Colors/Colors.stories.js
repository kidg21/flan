/* eslint-disable linebreak-style */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { DMPTheme, darkTheme } from "Variables";
import { optionsKnob as options } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import ColorPalette from "./Colors";

storiesOf("Application|Style Guides/", module).add("Color Palette", () => {
  return (
    <ThemeProvider
      theme={options(
        "Theme",
        {
          Light: DMPTheme,
          Dark: darkTheme,
        },
        DMPTheme,
        { display: "select" },
        "Theme",
      )}
    >
      <ColorPalette />
    </ThemeProvider>
  );
});
