import React, { useState } from "react";
import styled from "styled-components";
// import Panel from "layout/Panel";
import Tabs, { Tab } from "blocks/Tabs";
// import AppWrapper from "./AppWrapper";
import FlexWrapper from "./flexwrapper";
// import MainFlexWrapper from "./MainWrapper";
import PanelHeader from "elements/PanelHeader/PanelHeader";
import CardAccordion from "elements/CardAccordion";
import MapLegend from "blocks/MapLegend";
// import CardBar from "elements/CardBar/CardBar";
import Panel, { PanelSection } from "layout/Panel";
import Accordion from "blocks/Accordion";
import Table from "blocks/Table";

const screen = {
  small: 0,
  medium: 640,
  large: 1024,
};

function AppLayout(transition) {
  const [offscreen, setOffscreen] = useState(true);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  let behaviors = null;
  // let transition = false;

  const MultipleFunctions = {
    toggleLeft: function toggleLeft() {
      setOffscreen(!offscreen); // Toggles the Left Wrapper
    },
    toggleRight: function toggleRight() {
      setRight(!right); // Toggles the Right Wrapper
    },
    toggleTop: function toggleTop() {
      setTop(!top); // Toggles the Top Wrapper
    },
    toggleBottom: function toggleBottom() {
      setBottom(!bottom); // Toggles the Bottom Wrapper
    },
  };

  const SingleFunctions = {
    toggleLeft: function toggleLeft() {
      setLeft(!left), setRight(false), setBottom(false), setTop(false); // Toggles the Left Wrapper
    },
    toggleRight: function toggleRight() {
      setRight(!right), setLeft(false), setBottom(false), setTop(false); // Toggles the Right Wrapper
    },
    toggleTop: function toggleTop() {
      setTop(!top), setLeft(false), setBottom(false), setRight(false); // Toggles the Top Wrapper
    },
    toggleBottom: function toggleBottom() {
      setBottom(!bottom), setLeft(false), setRight(false), setTop(false); // Toggles the Bottom Wrapper
    },
  };

  if (window.innerWidth >= screen.small && window.innerWidth < screen.medium) {
    behaviors = SingleFunctions;
  } else if (window.innerWidth >= screen.medium) {
    behaviors = MultipleFunctions;
  }

  return (
    <FlexWrapper fullScreen>
      {left ? (
        <FlexWrapper transition={offscreen}>
          <Panel>
            <PanelSection>
              <PanelHeader title="5201 California Ave. Irvine, California" property="true" />
            </PanelSection>
            <PanelSection body>
              <Table />
              <Accordion header={<CardBar title="Ownership" info={true} />}>
                <Table />
              </Accordion>
              <Accordion header={<CardBar title="Site Information" info={true} />}>
                <Table />
              </Accordion>

              <Accordion header={<CardBar title="Property Characteristics" info={true} />}>
                <Table />
              </Accordion>

              <Accordion header={<CardBar title="Value and Tax" info={true} />}>
                <Table />
              </Accordion>

              <Accordion header={<CardBar title="Last Market Sale" info={true} />}>
                <Table />
              </Accordion>

              <Accordion header={<CardBar title="Site Views" info={true} />}>
                <Table />
              </Accordion>
            </PanelSection>
          </Panel>
        </FlexWrapper>
      ) : null}
      <FlexWrapper setFlexDirection="column" setFlex="3">
        {top ? (
          <FlexWrapper>
            <Panel />
          </FlexWrapper>
        ) : null}
        <FlexWrapper setFlex="3" />
        {bottom ? (
          <FlexWrapper>
            <Panel />
          </FlexWrapper>
        ) : null}
      </FlexWrapper>
      {right ? (
        <FlexWrapper>
          <Panel>
            <PanelSection>
              <PanelHeader title="Layers" main={true} />
            </PanelSection>
            <PanelSection>
              <CardAccordion
                header={<CardBar layer="true" title="Demographics" />}
                body={<MapLegend />}
              />
              <CardAccordion
                header={<CardBar layer="true" title="Parcel" />}
                body={<MapLegend />}
              />
              <CardBar disabled="true" title="Wetlands" />
              <CardAccordion
                header={<CardBar layer="true" title="Traffic" />}
                body={<MapLegend />}
              />
              <CardAccordion
                header={<CardBar layer="true" title="Schools" />}
                body={<MapLegend />}
              />
            </PanelSection>
          </Panel>
        </FlexWrapper>
      ) : null}
      <Tabs align="bottom">
        <Tab tabLabel="left" onClick={behaviors.toggleLeft} />
        <Tab tabLabel="right" onClick={behaviors.toggleRight} />
        <Tab tabLabel="top" onClick={behaviors.toggleTop} />
        <Tab tabLabel="bottom" onClick={behaviors.toggleBottom} />
      </Tabs>
    </FlexWrapper>
  );
}

// NavBar.propTypes = {
//     toggleLeft: PropTypes.bool,
//     toggleRight: PropTypes.bool,
//     toggleTop: PropTypes.bool,
//     toggleBottom: PropTypes.bool,
//   };

export default AppLayout;
