import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "elements/PanelHeader";
import Table from "blocks/Table";
import CardBar from "elements/CardBar";
import Accordion from "blocks/Accordion";
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
          <PanelHeader
            title="5201 California Ave. Irvine, California"
            property="true"
          />
        </PanelSection>
        <PanelSection body>
          <Table />
          <Accordion
            header={<CardBar title="Ownership" info={true} />}
            visibility={visibility}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            header={<CardBar title="Site Information" info={true} />}
            visibility={visibility2}
            onClick={() => {
              setVisibility2(!visibility2);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<CardBar title="Property Characteristics" info={true} />}
            visibility={visibility3}
            onClick={() => {
              setVisibility3(!visibility3);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<CardBar title="Value and Tax" info={true} />}
            visibility={visibility4}
            onClick={() => {
              setVisibility4(!visibility4);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<CardBar title="Last Market Sale" info={true} />}
            visibility={visibility5}
            onClick={() => {
              setVisibility5(!visibility5);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<CardBar title="Site Views" info={true} />}
            visibility={visibility6}
            onClick={() => {
              setVisibility6(!visibility6);
            }}
          >
            <Table />
          </Accordion>
        </PanelSection>
      </Panel>
    );
  })
);
