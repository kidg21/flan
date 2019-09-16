import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Table from "blocks/Table";
import styled from "styled-components";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Accordion from "blocks/Accordion";
import Panel, { PanelSection } from "layout/Panel";
import PropertyListCard from "elements/ListCards/PropertyListCard";

const Wrapper = styled.div`
  padding: 1em;
`;

const lotData = [
  { id: "a", name: "Land Use", value: "Commercial" },
  { id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
  { id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const ownerData = [
  { id: "a", name: "Owner", value: "1830 LA CIENEGA LLC" },
  { id: "b", name: "Last Transfer", value: "12/31/14" },
  { id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", name: "Opportunity Zone ", value: "No" },
];

const buildingData = [
  { id: "a", name: "Value", value: "$11,851,071" },
  { id: "b", name: "Square Feet", value: "34,529 SF" },
  { id: "c", name: "# of Units", value: "1" },
  { id: "d", name: "Year Built", value: "1950" },
];

const data = [
  { id: "a", name: "Owners/Units", value: "Multiple Owners (2 Units)" },
  { id: "b", name: "Master Parcel No.", value: "387483675638" },
  { id: "c", name: "Zoning", value: "No Zone" },
];

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
          <PropertyListCard
            lotData={lotData}
            ownerData={ownerData}
            buildingData={buildingData}
            address="2801 Kelvin Avenue, Irvine, CA 92614"
            APN="374-342-8957"
          />
        </PanelSection>
        <PanelSection body>
          <Accordion
            header={<InformationCardBar title="Ownership" />}
            visibility={visibility}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            <Wrapper>
              <Table data={data} />
            </Wrapper>
          </Accordion>
          <Accordion
            header={<InformationCardBar title="Site Information" />}
            visibility={visibility2}
            onClick={() => {
              setVisibility2(!visibility2);
            }}
          >
            <Wrapper>
              <Table data={data} />
            </Wrapper>
          </Accordion>
          <Accordion
            header={<InformationCardBar title="Property Characteristics" />}
            visibility={visibility3}
            onClick={() => {
              setVisibility3(!visibility3);
            }}
          >
            <Wrapper>
              <Table data={data} />
            </Wrapper>
          </Accordion>
          <Accordion
            header={<InformationCardBar title="Value and Tax" />}
            visibility={visibility4}
            onClick={() => {
              setVisibility4(!visibility4);
            }}
          >
            <Wrapper>
              <Table data={data} />
            </Wrapper>
          </Accordion>
          <Accordion
            header={<InformationCardBar title="Last Market Sale" />}
            visibility={visibility5}
            onClick={() => {
              setVisibility5(!visibility5);
            }}
          >
            <Wrapper>
              <Table data={data} />
            </Wrapper>
          </Accordion>
          <Accordion
            header={<InformationCardBar title="Site Views" />}
            visibility={visibility6}
            onClick={() => {
              setVisibility6(!visibility6);
            }}
          >
            <Wrapper>
              <Table data={data} />
            </Wrapper>
          </Accordion>
        </PanelSection>
      </Panel>
    );
  }),
);
