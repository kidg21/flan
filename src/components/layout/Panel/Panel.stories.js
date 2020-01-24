/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card, { CardGrid } from "elements/Card";
import Panel from "layout/Panel";
import Layout from "layout/Layout";

storiesOf("Layout|Panel", module)
  .addDecorator(checkA11y)
  .add("Panel", () => {
    return <Panel />;
  })
  .add("Panel with header", () => {
    return (
      <Panel
        header={<Card />}
      />
    );
  })
  .add("Panel with footer", () => {
    return (
      <Panel
        footer={<Card />}
      />
    );
  })
  .add("Panel with header/footer", () => {
    return (
      <Panel
        header={<Card />}
        footer={<Card />}
      />
    );
  })
  .add("Panel - with Card List", () => {
    return (
      <Layout
        mainContent={
          <Panel
            id="Panel"
            header={<Card />}
            footer={<Card />}
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
          </Panel>}
      />
    );
  });
