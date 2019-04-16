import React from "react";
import { storiesOf } from "@storybook/react";
import LayerHeader, {
  FilterHeader,
  PropertyHeader,
  NavigationLayerHeader,
  NavigationFilterHeader
} from "./Header";
import Header from "./TrialHeader";

// Colors
storiesOf("Blocks|Panel / Headers", module)
  .add("Layer", () => <LayerHeader title="Layer Header" />)
  .add("Navigation Layer", () => (
    <NavigationLayerHeader title="Nav Layer Header" />
  ))
  .add("Filter", () => <FilterHeader layer="lets try" title="Layer Header" />)
  .add("Navigation Filter", () => (
    <NavigationFilterHeader layer="lets try" title="Layer Header" />
  ))
  .add("Property", () => (
    <PropertyHeader street="5201 California Ave" city="Irvine, CA 92614" />
  ));

storiesOf("Blocks|Panel / Trial", module).add("Header", () => (
  <Header title="does this work" threeParts={true} />
));
