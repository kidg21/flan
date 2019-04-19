import React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from "@storybook/react";
import Label from "./Label";
import Results from "./Results";

const numberProp = {
  resultsProp: "28"
};

storiesOf("Atoms|Label", module)
  .add("Text Label", () => <Label content="who are you" />)
  .add("Results", () => <Results {...numberProp} />);
