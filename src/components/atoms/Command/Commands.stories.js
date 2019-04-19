import React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Command from "atoms/Command";

const iconProps = {
  // nameProp: ["fal", "times"]
  nameProp: "times"
};

const labelProp = {
  contentProp: "Close"
};

const commandProps = {
  iconProps: iconProps,
  labelProp: labelProp,
  flip: true
};

storiesOf("Atoms|Command", module)
  .addDecorator(Padding)
  .add("Default Command", () => <Command {...commandProps} />);
