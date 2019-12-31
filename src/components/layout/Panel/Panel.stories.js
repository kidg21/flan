/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card, { CardList } from "elements/Card";
import Panel, { PanelSection } from "../Panel/Panel";

storiesOf("Layout|Panel", module)
  .addDecorator(checkA11y)
  .add("Panel - Outer Wrapper", () => {
    return <Panel />;
  })
  .add("Panel - 1 Section (default)", () => {
    return (
      <Panel>
        <PanelSection body />
      </Panel>
    );
  })
  .add("Panel - 2 Sections", () => {
    return (
      <Panel>
        <PanelSection />
        <PanelSection body />
      </Panel>
    );
  })
  .add("Panel - 3 Sections", () => {
    return (
      <Panel>
        <PanelSection />
        <PanelSection body />
        <PanelSection />
      </Panel>
    );
  })
  .add("Panel - 4 Sections (2 body)", () => {
    return (
      <Panel>
        <PanelSection />
        <PanelSection body />
        <PanelSection body />
        <PanelSection />
      </Panel>
    );
  })
  .add("Panel - 5 Sections (2 body)", () => {
    return (
      <Panel>
        <PanelSection />
        <PanelSection body />
        <PanelSection />
        <PanelSection body />
        <PanelSection />
      </Panel>
    );
  })
  .add("Panel - with Card List", () => {
    return (
      <Panel>
        <PanelSection />
        <PanelSection body>
          <CardList>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardList>
        </PanelSection>
        <PanelSection />
      </Panel>
    );
  });
