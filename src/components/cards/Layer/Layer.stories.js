import React from "react";
import { storiesOf } from "@storybook/react";
// import CardHeader from "./CardHeader"
import LayerHeader from "./LayerHeader";
import Container from "atoms/Container";
import CardHeader from "./CardHeader";
import LayerGroup from "./LayerGroup";
import Accordion from "blocks/Accordion";

storiesOf("Cards|Layer", module)
  .add("Layer Card", () => <CardHeader title="Card Header" />)
  .add("Layer Header", () => <LayerHeader title="Layer Header" />)
  .add("Layer Group", () => (
    <LayerGroup
      title="Layer Group Title"
      number="2"
      onToggle={visibility => {
        console.log("visibility -->", visibility);
      }}
    >
      <Container>
        <Accordion
          title="Layer 1"
          onToggle={visibility => {
            console.log("visibility -->", visibility);
          }}
        >
          <span>stuff</span>
        </Accordion>
        <Accordion
          title="Layer 2"
          onToggle={visibility => {
            console.log("visibility -->", visibility);
          }}
        >
          <span>stuff</span>
        </Accordion>
      </Container>
    </LayerGroup>
  ));
