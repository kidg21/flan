import React, { Fragment } from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { DMPTheme, darkTheme } from "Variables";
import { ThemeProvider } from "styled-components";
import FlanTheme from "./FlanTheme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { configureActions } from "@storybook/addon-actions";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { configure as configureEnzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Pick up all Storybook / Mocha methods and make them global
import * as facade from "./facade";
Object.assign(global, facade);

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
    hierarchyRootSeparator: /\|/,
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
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

// Load Stories
const base = require.context(
  "../src/components/base",
  true,
  /\.stories\.(js|mdx)$/
);
const utils = require.context(
  "../src/components/utils",
  true,
  /\.stories\.(js|mdx)$/
);
const intro = require.context(
  "../src/attributes",
  true,
  // /\.stories\.(js|mdx)$/
  /\.stories\.(mdx)$/
);
const atoms = require.context(
  "../src/components/atoms",
  true,
  // /\.stories\.(js|mdx)$/
  /\.stories\.(mdx)$/
);
const blocks = require.context(
  "../src/components/blocks",
  true,
  /\.stories\.(js|mdx)$/
  // /\.stories\.(mdx)$/
);
const elements = require.context(
  "../src/components/elements",
  true,
  /\.stories\.(js|mdx)$/
);
const layout = require.context(
  "../src/components/layout",
  true,
  /\.stories\.(js|mdx)$/
);
const templates = require.context(
  "../src/components/templates",
  true,
  /\.stories\.(js|mdx)$/
);
const work = require.context(
  "../src/components/work",
  true,
  /\.stories\.(js|mdx)$/
);

configureEnzyme({ adapter: new Adapter() });
configure(
  [intro, base, utils, atoms, blocks, elements, layout, templates, work],
  module
);
