import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Calendar from "./Date";

// Date
storiesOf("Atoms|Date", module)
  .addDecorator(Padding)
  .add("Default", () => (
    <div style={{ display: "inline-block" }}>
      <Calendar date={true} />
      <Calendar time={true} />
    </div>
  ));
