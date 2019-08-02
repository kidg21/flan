import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import CardAccordion from "elements/CardAccordion";
import MapLegend from "blocks/MapLegend";
import LayerCardBar from "elements/CardBars/LayerCardBar";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|Panel", module).add("Layer Panel", () =>
  React.createElement(() => {
    const [checked, setChecked] = useState("");
    const [checked2, setChecked2] = useState("");
    const [checked3, setChecked3] = useState("");
    const [checked4, setChecked4] = useState("");
    const [checked5, setChecked5] = useState("");
    return (
      <Panel>
        <PanelSection>
          <MainPanelHeader title="Filters" />
        </PanelSection>
        <PanelSection body>
          <CardAccordion
            header={
              <LayerCardBar
                title="Demographics"
                switchProps={{
                  checked: checked,

                  onChange: () => {
                    setChecked(!checked);
                  }
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
                switchProps={{
                  checked: checked2,

                  onChange: () => {
                    setChecked2(!checked2);
                  }
                }}
              />
            }
          >
            <MapLegend />
          </CardAccordion>
          <CardAccordion
            header={
              <LayerCardBar
                title="Wetlands"
                switchProps={{
                  checked: checked3,

                  onChange: () => {
                    setChecked3(!checked3);
                  }
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
                switchProps={{
                  checked: checked4,

                  onChange: () => {
                    setChecked4(!checked4);
                  }
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
                switchProps={{
                  checked: checked5,

                  onChange: () => {
                    setChecked5(!checked5);
                  }
                }}
              />
            }
          >
            <MapLegend />
          </CardAccordion>
        </PanelSection>
      </Panel>
    );
  })
);

// // storiesOf("Templates|Panel", module).add("Layer Panel", () =>
// //   React.createElement(() => {
// //     const [checked, setChecked] = useState(false);
// //     const [checked2, setChecked2] = useState(false);
// //     const [checked3, setChecked3] = useState(false);
// //     const [checked4, setChecked4] = useState(false);
// //     const [checked5, setChecked5] = useState(false);
// //     return (
