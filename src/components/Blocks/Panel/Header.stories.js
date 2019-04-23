import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

// Colors
storiesOf("Blocks|Panel / Headers", module).add("Header", () => (
  <div>
    <Header title="5201 California Ave. Irvine, California" threeParts={true} />
    <Header title="5201 California Ave. Irvine, California" property={true} />
    <Header title="Two Parts this work" twoParts={true} />{" "}
  </div>
));
