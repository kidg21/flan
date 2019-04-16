import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "blocks/Accordion";
// import PropertyInfo from "./PropertyInfo";
import MapLegend from "../Map/MapLegend";
import Container from "atoms/Container";
import Table from "blocks/Table";

storiesOf("Blocks|Accordion", module).add("Accordion", () => (
  <Accordion
    header={
      <Container>
        <h4>This is my accordion header example</h4>
      </Container>
    }
    children={
      <Container>
        <h3>This is the body of my accordion being visible</h3>
      </Container>
    }
  />
));
