import React from "react";
import { storiesOf } from "@storybook/react";
import Panel from "./Legend";

storiesOf("Templates|Panel", module)
  .add("Layers Panel", () => <Panel />);