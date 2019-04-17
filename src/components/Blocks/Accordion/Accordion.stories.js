import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "blocks/Accordion";
// import PropertyInfo from "./PropertyInfo";
import MapLegend from "../Map/MapLegend";
import Container from "atoms/Container";
import Table from "blocks/Table";

storiesOf("Blocks|Accordion", module).add("Accordion", () =>
  React.createElement(() => {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    return (
      <div>
        <Accordion
          header={
            <Container>
              <h4>This is my accordion header example!</h4>
            </Container>
          }
          visibility={visibility}
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          <Container>
            <h3>This is the body of my accordion being visible</h3>
          </Container>
        </Accordion>
        <Accordion
          header={
            <Container>
              <h4>This is my accordion header example!</h4>
            </Container>
          }
          visibility={visibility2}
          onClick={() => {
            setVisibility2(!visibility2);
          }}
          children={
            <Container>
              <h3>This is the body of my accordion being visible</h3>
            </Container>
          }
        />
      </div>
    );
  })
);
