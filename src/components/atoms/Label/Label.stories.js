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
  .add("Documentation", () => <Label content="This is a label" />)
  .add("Labels", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label content="Default" />
      <Label right content="Right Label" />
      <Label grey content="Grey Label" />
      <Label grey right content="Grey Right" />
    </div>
  ))

  .add("Results Label", () => <Results number="298" />);
