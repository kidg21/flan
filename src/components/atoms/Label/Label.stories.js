import React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Label from "./Label";
import Results from "./Results";

storiesOf("Atoms|Label", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Text Label", () => <Label content="who are you" />)
  .add("Results", () => <Results number="298" />);
