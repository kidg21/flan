import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import Calendar from "./Date";

// Date
storiesOf("Atoms|Date", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Date", () => <Calendar date={true} />)
  .add("Time", () => <Calendar time={true} />)
  .add("Date Time", () => <Calendar datetime={true} />);
