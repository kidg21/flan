import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Header from "blocks/Panel/Header";
import Table from "blocks/Table";
import Card from "blocks/Card/Card";
import Group from "blocks/Group/Group";
import Container from "atoms/Container";
import Accordion from "blocks/Accordion/Accordion";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|Panel", module).add("Property Panel", () =>
  React.createElement(() => {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    const [visibility3, setVisibility3] = useState(false);
    const [visibility4, setVisibility4] = useState(false);
    const [visibility5, setVisibility5] = useState(false);
    const [visibility6, setVisibility6] = useState(false);
    return (
      <Panel>
        <PanelSection>
          <Header
            title="5201 California Ave. Irvine, California"
            property={true}
          />
        </PanelSection>
        <PanelSection body>
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
            header={<Card title="Site Information" info={true} />}
            visibility={visibility2}
            onClick={() => {
              setVisibility2(!visibility2);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>

          <Accordion
            header={<Card title="Property Characteristics" info={true} />}
            visibility={visibility3}
            onClick={() => {
              setVisibility3(!visibility3);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>

          <Accordion
            header={<Card title="Value and Tax" info={true} />}
            visibility={visibility4}
            onClick={() => {
              setVisibility4(!visibility4);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>

          <Accordion
            header={<Card title="Last Market Sale" info={true} />}
            visibility={visibility5}
            onClick={() => {
              setVisibility5(!visibility5);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>

          <Accordion
            header={<Card title="Site Views" info={true} />}
            visibility={visibility6}
            onClick={() => {
              setVisibility6(!visibility6);
            }}
          >
            <Container>
              <Table />
            </Container>
          </Accordion>
        </PanelSection>
      </Panel>
    );
  })
);
