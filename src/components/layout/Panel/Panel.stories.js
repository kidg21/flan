/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
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
  })
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
  });
