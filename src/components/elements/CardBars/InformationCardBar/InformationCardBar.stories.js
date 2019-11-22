/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import InformationCardBar from "./InformationCardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Elements|Card Bar/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Information", () => {
    return <InformationCardBar title="Ownership" />;
  })
  .add("Group Card Bar", () => {
    return <InformationCardBar title="Owner Group" count="2" />;
  });
