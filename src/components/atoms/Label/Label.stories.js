import React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from "@storybook/react";
import Label from "./Label";
import Results from "./Results";

storiesOf("Atoms|Label", module)
  .add("Text Label", () => <Label content="who are you" />)
  .add("Results", () => <Results number="298" />);
