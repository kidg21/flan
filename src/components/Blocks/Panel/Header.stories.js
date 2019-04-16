import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

// Colors
storiesOf("Blocks|Panel / Headers", module).add("Header", () => (
  <div>
    <Header title="Three Parts this work" threeParts={true} />
    <Header title="Two Parts this work" twoParts={true} />{" "}
  </div>
));
