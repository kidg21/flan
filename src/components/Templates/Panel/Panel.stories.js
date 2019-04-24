import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Header from "blocks/Panel/Header";
import Table from "blocks/Table";
import Card from "blocks/Card/Card";
import Container from "atoms/Container";
import Accordion from "blocks/Accordion/Accordion";
import Panel, { PanelSection, PanelBody } from "layout/Panel";

storiesOf("Templates|Panel", module).add("Property Info Panel", () =>
  React.createElement(() => {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    return (
      <Panel>
        <PanelSection>
          <Header
            title="5201 California Ave. Irvine, California"
            property={true}
          />
        </PanelSection>
        <PanelBody>
          <Container>
            <Table />
          </Container>
          <Accordion
            header={<Card title="Ownership" info={true} />}
            visibility={visibility}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>
          <Accordion
            header={<Card title="Acquisitions" info={true} />}
            visibility={visibility2}
            onClick={() => {
              setVisibility2(!visibility2);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>
        </PanelBody>
        <PanelSection />
      </Panel>
    );
  })
);
