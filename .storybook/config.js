import React, { Fragment } from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { fonts, colors, shadows } from "Variables";
import { themes } from "@storybook/theming";
import FlanTheme from "./FlanTheme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";
// import { configureActions } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info";
import { setDefaults } from "@storybook/addon-info";

// Create and add global styles
import GlobalStyles from "GlobalStyles";
function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <GlobalStyles />
      {storyFn()}
    </Fragment>
  );
}
addDecorator(withGlobalStyles);

// Configure Viewport
const newViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

// Configure Parameters
addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...newViewports },
    // defaultViewport: "iphone6"
  },
  options: {
    theme: FlanTheme,
    // url: 'https://storybook.js.org',
    goFullScreen: false,
    addonPanelInRight: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
  },
  a11y: {
    // ... axe options
    element: "#root", // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {}, // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
});

// a11y
addDecorator(withA11y);

// Notes
addDecorator(withNotes);

// Actions
// configureActions({
//   depth: 100,
//   // Limit the number of items logged into the actions panel
//   limit: 20
// })

// Info
/** Removed due to impact on layout.
 * We will replace with Storybook Docs when it is available
 */
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: false, // Displays the source of story Component
  styles: {
    header: {
      h1: {
        color: colors.grey_80,
      },
      h2: {
        color: colors.anchor,
      },
    },
  },
});

// const req = require.context("../src/components", true, /.stories.js$/)
const atoms = require.context("../src/components/atoms", true, /.stories.js$/);
const base = require.context("../src/components/base", true, /.stories.js$/);
const blocks = require.context(
  "../src/components/blocks",
  true,
  /.stories.js$/,
);
const elements = require.context(
  "../src/components/elements",
  true,
  /.stories.js$/,
);
const layout = require.context(
  "../src/components/layout",
  true,
  /.stories.js$/,
);
const templates = require.context(
  "../src/components/templates",
  true,
  /.stories.js$/,
);
const work = require.context("../src/components/work", true, /.stories.js$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename))
  require("../src/attributes/App.stories.js");
  atoms.keys().forEach(filename => atoms(filename));
  base.keys().forEach(filename => base(filename));
  blocks.keys().forEach(filename => blocks(filename));
  elements.keys().forEach(filename => elements(filename));
  layout.keys().forEach(filename => layout(filename));
  templates.keys().forEach(filename => templates(filename));
  work.keys().forEach(filename => work(filename));
}

configure(loadStories, module);
