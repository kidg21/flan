import React from "react"
import { storiesOf } from "@storybook/react"
import Accordion from "blocks/Accordion"
// import PropertyInfo from "./PropertyInfo";
import MapLegend from "../Map/MapLegend"
import Container from "atoms/Container"
import Table from "blocks/Table"

storiesOf("Blocks|Accordion", module).add("Layer Accordion", () => (
  <Accordion
    title="Example"
    onToggle={visibility => {
      console.log("visibility -->", visibility)
    }}
  >
    <Container>
      <MapLegend />
    </Container>
  </Accordion>
))

// .add("Property Info", () =>
// <PropertyInfo
// title="Property Info Section"
// onToggle={visibility => {
//     console.log('visibility -->', visibility);
// }}
// >
// <Container>
//     <Table/>
//     </Container>
// </PropertyInfo>);
