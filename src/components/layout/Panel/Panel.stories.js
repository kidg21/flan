/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Title from "base/Typography";
import Card, { CardList } from "layout/Card";
import Panel from "layout/Panel";

storiesOf("Layout|Panel", module)
  .addDecorator(checkA11y)
  .add("Panel - with Card List", () => {
    return (
      <Panel
        id="Panel"
        header={<Card />}
        footer={<Card />}
      >
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </Panel>
    );
  });
// .add("Panel - Outer Wrapper", () => {
//   return <Panel />;
// })
// .add("Panel - 1 Section (default)", () => {
//   return (
//     <Panel>
//       <PanelSection body />
//     </Panel>
//   );
// })
// .add("Panel - 2 Sections", () => {
//   return (
//     <Panel>
//       <PanelSection />
//       <PanelSection body />
//     </Panel>
//   );
// })
// .add("Panel - 3 Sections", () => {
//   return (
//     <Panel>
//       <PanelSection />
//       <PanelSection body />
//       <PanelSection />
//     </Panel>
//   );
// })
// .add("Panel - 4 Sections (2 body)", () => {
//   return (
//     <Panel>
//       <PanelSection />
//       <PanelSection body />
//       <PanelSection body />
//       <PanelSection />
//     </Panel>
//   );
// })
// .add("Panel - 5 Sections (2 body)", () => {
//   return (
//     <Panel>
//       <PanelSection />
//       <PanelSection body />
//       <PanelSection />
//       <PanelSection body />
//       <PanelSection />
//     </Panel>
//   );
// })
