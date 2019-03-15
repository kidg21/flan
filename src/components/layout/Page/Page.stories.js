import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import Page from "./Page";

storiesOf("_Development | Page", module)
  .addDecorator(checkA11y)
  .add("Page - displays content...scrolls", () => <Page />);
