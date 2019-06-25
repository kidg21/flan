import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PropertyPanelHeader from "elements/PropertyPanelHeader";
import Table from "blocks/Table";
import InformationCardBar from "elements/InformationCardBar";
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
          <PropertyPanelHeader title="5201 California Ave. Irvine, California" />
        </PanelSection>
        <PanelSection body>
          <Table />
          <Accordion
            header={<InformationCardBar title="Ownership" />}
            visibility={visibility}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            header={<InformationCardBar title="Site Information" />}
            visibility={visibility2}
            onClick={() => {
              setVisibility2(!visibility2);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<InformationCardBar title="Property Characteristics" />}
            visibility={visibility3}
            onClick={() => {
              setVisibility3(!visibility3);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<InformationCardBar title="Value and Tax" />}
            visibility={visibility4}
            onClick={() => {
              setVisibility4(!visibility4);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<InformationCardBar title="Last Market Sale" />}
            visibility={visibility5}
            onClick={() => {
              setVisibility5(!visibility5);
            }}
          >
            <Table />
          </Accordion>

          <Accordion
            header={<InformationCardBar title="Site Views" />}
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
