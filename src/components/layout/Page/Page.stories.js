/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import Page from "./Page";

storiesOf("Layout|Page", module)
  .addDecorator(checkA11y)
  .add("Page - displays content...scrolls", () => {
    return <Page />;
  });
