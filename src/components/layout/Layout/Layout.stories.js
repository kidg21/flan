/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";

import DynamicLayout from "./DynamicLayout.jsx";
import NewLayout from "./NewLayout.jsx";
// import StaticLayout from "./StaticLayout.jsx";

const LayoutNotes = markdown.require("./Layout.md");

storiesOf("Layout |App Layout/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: LayoutNotes,
    },
  })

  .add(
    "Documentation",
    () => {
      return <DynamicLayout />;
    },
  )

  .add("Dynamic", () => {
    return (
      <NewLayout theme="dynamic" />
    );
  });
