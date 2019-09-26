import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import CardAccordion from "elements/CardAccordion";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import MapLegend from "blocks/MapLegend";
import Container from "atoms/Container"
import Icon from "atoms/Icon";
import Card from "layout/Card";
import LayerCardBar from "elements/CardBars/LayerCardBar";
import Panel, { PanelSection } from "layout/Panel";

const Wrapper = styled.div`
  margin: 0.5em;
  background-color: ${(props) => {
    return props.theme.background.app;
  }};
`;

const data = [
  { id: 'a', name: 'Save' },
  { id: 'b', name: 'Open' },
  { id: 'c', name: 'Share' },
  { id: 'd', name: 'Create New' },
  { id: 'e', name: 'Add' }
];

const Icons = (
  <React.Fragment>
    <Icon icon="zoom_extents" />
    <Icon icon="share" />
    <Icon icon="filter" />
  </React.Fragment>
);

storiesOf("Templates|Panel", module).add("Layer Panel", () =>
  React.createElement(() => {
    const [checked, setChecked] = useState("");
    const [checked2, setChecked2] = useState("");
    const [checked3, setChecked3] = useState("");
    const [checked4, setChecked4] = useState("");
    const [checked5, setChecked5] = useState("");
    const [checked6, setChecked6] = useState("");
    const [checked7, setChecked7] = useState("");
    return (
      <Panel>
        <PanelSection>
          <MainPanelHeader title="Layers" menuData={data} />
        </PanelSection>
        <PanelSection body>
          <CardAccordion
            header={
              <LayerCardBar
                title="Demographics"
                icons={Icons}
                switchProps={{
                  checked: checked,

                  onChange: () => {
                    setChecked(!checked);
                  },
                }}
              />
            }
          >
            <MapLegend />
          </CardAccordion>
          <CardAccordion
            header={
              <LayerCardBar
                title="Parcel"
                icons={Icons}
                switchProps={{
                  checked: checked2,

                  onChange: () => {
                    setChecked2(!checked2);
                  },
                }}
              />
            }
          >
            <MapLegend />
          </CardAccordion>
        
                <CardAccordion
                  header={
                    <LayerCardBar
                      title="Owner part 1"
                      icons={Icons}
                      switchProps={{
                        checked: checked6,

                        onChange: () => {
                          setChecked6(!checked6);
                        },
                      }}
                    />
                  }
                >
                  <MapLegend />
                </CardAccordion>
                <CardAccordion
                  header={
                    <LayerCardBar
                      title="Owner part 2"
                      icons={Icons}
                      switchProps={{
                        checked: checked7,

                        onChange: () => {
                          setChecked7(!checked7);
                        },
                      }}
                    />
                  }
                >
                  <MapLegend />
                </CardAccordion>
        
          <CardAccordion
            header={
              <LayerCardBar
                title="Traffic"
                icons={Icons}
                switchProps={{
                  checked: checked4,

                  onChange: () => {
                    setChecked4(!checked4);
                  },
                }}
              />
            }
          >
            <MapLegend />
          </CardAccordion>
          <CardAccordion
            header={
              <LayerCardBar
                title="Schools"
                icons={Icons}
                switchProps={{
                  checked: checked5,

                  onChange: () => {
                    setChecked5(!checked5);
                  },
                }}
              />
            }
          >
            <MapLegend />
          </CardAccordion>
        </PanelSection>
      </Panel>
    );
  }),
);

// // storiesOf("Templates|Panel", module).add("Layer Panel", () =>
// //   React.createElement(() => {
// //     const [checked, setChecked] = useState(false);
// //     const [checked2, setChecked2] = useState(false);
// //     const [checked3, setChecked3] = useState(false);
// //     const [checked4, setChecked4] = useState(false);
// //     const [checked5, setChecked5] = useState(false);
// //     return (
