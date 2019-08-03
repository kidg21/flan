import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Table from "blocks/Table";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Accordion from "blocks/Accordion";
import Panel, { PanelSection } from "layout/Panel";

const data = [
  { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
  { id: "b", color: "Master Parcel No.", name: "387483675638" },
  { id: "c", color: "Zoning", name: "No Zone" }
];

storiesOf("Templates|Panel", module)
  .add("Property Panel", () =>
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
            <Table data={data} />
            <Accordion
              header={<InformationCardBar title="Ownership" />}
              visibility={visibility}
              onClick={() => {
                setVisibility(!visibility);
              }}
            >
              <Table data={data} />
            </Accordion>
            <Accordion
              header={<InformationCardBar title="Site Information" />}
              visibility={visibility2}
              onClick={() => {
                setVisibility2(!visibility2);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar title="Property Characteristics" />}
              visibility={visibility3}
              onClick={() => {
                setVisibility3(!visibility3);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar title="Value and Tax" />}
              visibility={visibility4}
              onClick={() => {
                setVisibility4(!visibility4);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar title="Last Market Sale" />}
              visibility={visibility5}
              onClick={() => {
                setVisibility5(!visibility5);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar title="Site Views" />}
              visibility={visibility6}
              onClick={() => {
                setVisibility6(!visibility6);
              }}
            >
              <Table data={data} />
            </Accordion>
          </PanelSection>
        </Panel>
      );
    })
  )

  .add("Skeleton Property Panel", () =>
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
            <PropertyPanelHeader />
          </PanelSection>
          <PanelSection body>
            <Table />
            <Accordion
              header={<InformationCardBar />}
              visibility={visibility}
              onClick={() => {
                setVisibility(!visibility);
              }}
            >
              <Table data={data} />
            </Accordion>
            <Accordion
              header={<InformationCardBar />}
              visibility={visibility2}
              onClick={() => {
                setVisibility2(!visibility2);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar />}
              visibility={visibility3}
              onClick={() => {
                setVisibility3(!visibility3);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar />}
              visibility={visibility4}
              onClick={() => {
                setVisibility4(!visibility4);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar />}
              visibility={visibility5}
              onClick={() => {
                setVisibility5(!visibility5);
              }}
            >
              <Table data={data} />
            </Accordion>

            <Accordion
              header={<InformationCardBar />}
              visibility={visibility6}
              onClick={() => {
                setVisibility6(!visibility6);
              }}
            >
              <Table data={data} />
            </Accordion>
          </PanelSection>
        </Panel>
      );
    })
  );
