/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import ColorPalette from "./Colors";
import { DMPTheme, darkTheme } from "Variables";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import { ThemeProvider } from "styled-components";

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
