/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card, { CardGrid } from "elements/Card";
import Layout from "layout/Layout";
import Panel from "layout/Panel";

storiesOf("Layout|Panel", module)
  .addDecorator(checkA11y)
  .add("Panel", () => {
    return <Layout><Panel /></Layout>;
  })
  .add("Panel with header", () => {
    return (
      <Layout>
        <Panel
          header={<Card />}
        />
      </Layout>
    );
  })
  .add("Panel with footer", () => {
    return (
      <Layout>
        <Panel
          footer={<Card />}
        />
      </Layout>
    );
  })
  .add("Panel with header/footer", () => {
    return (
      <Layout>
        <Panel
          header={<Card />}
          footer={<Card />}
        />
      </Layout>
    );
  })
  .add("Panel - with Card List", () => {
    return (
      <Layout>
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
        </Panel>
      </Layout>
    );
  });
