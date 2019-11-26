import React, { Fragment } from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { DMPTheme, darkTheme } from "Variables";
import { ThemeProvider } from "styled-components";
import FlanTheme from "./FlanTheme";
import { optionsKnob as options } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { configureActions } from "@storybook/addon-actions";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

// Create and add global styles
import GlobalStyles from "GlobalStyles";

function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider
        theme={options(
          "Theme",
          {
            Light: DMPTheme,
            Dark: darkTheme
          },
          DMPTheme,
          { display: "select" },
          "Theme"
        )}
      >
        {storyFn()}
      </ThemeProvider>
    </Fragment>
  );
}
addDecorator(withGlobalStyles);

// Configure Viewport
const newViewports = {
  "1080P": {
    name: "1080P",
    styles: {
      width: "1920px",
      height: "1080px"
    }
  },
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px"
    }
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
    }
  }
};

// Configure Parameters
addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...newViewports }
    // defaultViewport: "iphone6"
  },

  options: {
    theme: FlanTheme,
    // url: 'https://storybook.js.org',
    goFullScreen: false,
    addonPanelInRight: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  a11y: {
    // ... axe options
    element: "#root", // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  }
});

// a11y
addDecorator(withA11y);

// Actions
configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20
});

const atoms = require.context("../src/components/atoms", true, /.stories.js$/);
const base = require.context("../src/components/base", true, /.stories.js$/);
const blocks = require.context(
  "../src/components/blocks",
  true,
  /.stories.js$/
);
const elements = require.context(
  "../src/components/elements",
  true,
  /.stories.js$/
);
const layout = require.context(
  "../src/components/layout",
  true,
  /.stories.js$/
);
const templates = require.context(
  "../src/components/templates",
  true,
  /.stories.js$/
);

const utils = require.context("../src/components/utils", true, /.stories.js$/);

const work = require.context("../src/components/work", true, /.stories.js$/);
function loadStories() {
  require("../src/attributes/App.stories.js");
  atoms.keys().forEach(filename => atoms(filename));
  base.keys().forEach(filename => base(filename));
  blocks.keys().forEach(filename => blocks(filename));
  elements.keys().forEach(filename => elements(filename));
  layout.keys().forEach(filename => layout(filename));
  templates.keys().forEach(filename => templates(filename));
  utils.keys().forEach(filename => utils(filename));
  work.keys().forEach(filename => work(filename));
}

configure(loadStories, module);
configure(
  require.context("../src/components", true, /\.stories\.(js|mdx)$/),
  module
);
