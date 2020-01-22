/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";

import Layout from "./Layout.jsx";
import Modal from "layout/Modal";
import Banner from "blocks/Banner";

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
      return <Layout />;
    },
  );
