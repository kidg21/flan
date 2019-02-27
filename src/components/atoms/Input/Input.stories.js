import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";


storiesOf("Atoms|Input", module)
  .add("Input", () => <Input></Input>)
  .add("New Input", () => <Input Grey></Input>);

