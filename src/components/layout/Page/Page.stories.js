/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Page from "./Page.jsx";

storiesOf("Layout|Page", module)
  .addDecorator(checkA11y)
  .add("Page - displays content...scrolls", () => {
    return <Page />;
  });
