import { configure, addDecorator, setAddon } from "@storybook/react";
import React, { Fragment } from "react";
import { withNotes } from "@storybook/addon-notes";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";
import { setDefaults } from "@storybook/addon-info";
import { configureActions } from "@storybook/addon-actions";
import { checkA11y } from "@storybook/addon-a11y";
import {
  configureViewport,
  INITIAL_VIEWPORTS
} from "@storybook/addon-viewport";
import chaptersAddon from "react-storybook-addon-chapters";

// Import Font Awesome Icon Library
import "/icons/fontawesome";

// Create and add global styles
import GlobalStyles from "../src/attributes/GlobalStyles/GlobalStyles";

function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <GlobalStyles />
      {storyFn()}
    </Fragment>
  );
}

addDecorator(withGlobalStyles);

// Option defaults:
addDecorator(
  withOptions({
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  })
);

// Chapters
setAddon(chaptersAddon);

configure(function() {
  setDefaults({ sectionOptions: { useTheme: false } });
}, module);

// Configure Viewport
const newViewports = {
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

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
});

configureViewport({
  defaultViewport: "responsive"
  // defaultViewport: "iphone6"
});

// Theme
addDecorator(
  withOptions({
    name: "Foo",
    theme: themes.normal
  })
);

// Notes
addDecorator(withNotes);

// Info
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});

// Actions
configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20
});

// a11y
addDecorator(checkA11y);

const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
