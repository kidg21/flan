/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import Bar from "blocks/Bar";
import Card, { CardGrid } from "elements/Card";
import Panel from "layout/Panel";
import Title from "base/Typography";

storiesOf("Layout|Panel", module)
  .addDecorator(FullScreen)
  .addDecorator(checkA11y)
  .add("Panel", () => {
    return <Panel />;
  })
  .add("Panel with header", () => {
    return (
      <Panel
        header={
          <Bar
            contentAlign="center"
            padding="2x"
            centerAlign="center"
            center={<Title text="Header" />}
          />}
      />
    );
  })
  .add("Panel with footer", () => {
    return (
      <Panel
        footer={
          <Bar
            contentAlign="center"
            padding="2x"
            centerAlign="center"
            center={<Title text="Footer" />}
          />}
      />
    );
  })
  .add("Panel with header/footer", () => {
    return (
      <Panel
        header={
          <Bar
            contentAlign="center"
            padding="2x"
            centerAlign="center"
            center={<Title text="Header" />}
          />}
        footer={
          <Bar
            contentAlign="center"
            padding="2x"
            centerAlign="center"
            center={<Title text="Footer" />}
          />}
      />
    );
  })
  .add("Panel - with Card List", () => {
    return (
      <Panel
        id="Panel"
        header={
          <Bar
            contentAlign="center"
            padding="2x"
            centerAlign="center"
            center={<Title text="Header" />}
          />}
        footer={
          <Bar
            contentAlign="center"
            padding="2x"
            centerAlign="center"
            center={<Title text="Footer" />}
          />}
      >
        <CardGrid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardGrid>
      </Panel>
    );
  });
