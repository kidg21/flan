<<<<<<< HEAD
import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import Card, { CardList } from "../Card/Card";
import Panel, { PanelSection, PanelBody } from "../Panel/Panel";
=======
import React from "react"
import { storiesOf } from "@storybook/react"
import { checkA11y } from "@storybook/addon-a11y"
import Card, { CardList } from "../Card/Card"
import Panel, { PanelSection, PanelBody } from "../Panel/Panel"
import PanelNotes from "./Panel.md"
>>>>>>> 730a17d59e7f6c722a94f2354d0fd7a4ecd508f6

storiesOf("Layout|Panel", module)
  .addDecorator(checkA11y)
  .add("Panel - Outer Wrapper", () => <Panel />)
  .add("Panel - 1 Section (default)", () => (
    <Panel>
      <PanelBody />
    </Panel>
  ))
  .add("Panel - 2 Sections", () => (
    <Panel>
      <PanelSection />
      <PanelBody />
    </Panel>
  ))
  .add("Panel - 3 Sections", () => (
    <Panel>
      <PanelSection />
      <PanelSection body />
      <PanelSection />
    </Panel>
  ))
  .add("Panel - 4 Sections (2 body)", () => (
    <Panel>
      <PanelSection />
      <PanelBody />
      <PanelBody />
      <PanelSection />
    </Panel>
  ))
  .add("Panel - 5 Sections (2 body)", () => (
    <Panel>
      <PanelSection />
      <PanelBody />
      <PanelSection />
      <PanelBody />
      <PanelSection />
    </Panel>
  ))
  .add("Panel - with Card List", () => (
    <Panel>
      <PanelSection />
      <PanelBody>
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </PanelBody>
      <PanelSection />
    </Panel>
  ))
