import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "elements/PanelHeader/PanelHeader";
import LayerCard from "elements/LayerCard";
import MapLegend from "blocks/MapLegend";
import CardBar from "elements/CardBar/CardBar";
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
          <PanelHeader title="Filters" main={true} />
        </PanelSection>
        <PanelSection>
          <LayerCard
            layer={
              <CardBar
                layer="true"
                title="Demographics"
                switchProps={{
                  checked: checked,

                  onChange: () => {
                    setChecked(!checked);
                  }
                }}
              />
            }
            legend={<MapLegend />}
          />
          <LayerCard
            layer={
              <CardBar
                layer="true"
                title="Parcel"
                switchProps={{
                  checked: checked2,

                  onChange: () => {
                    setChecked2(!checked2);
                  }
                }}
              />
            }
            legend={<MapLegend />}
          />
          <LayerCard
            layer={
              <CardBar
                layer="true"
                title="Wetlands"
                switchProps={{
                  checked: checked3,

                  onChange: () => {
                    setChecked3(!checked3);
                  }
                }}
              />
            }
            legend={<MapLegend />}
          />
          <LayerCard
            layer={
              <CardBar
                layer="true"
                title="Traffic"
                switchProps={{
                  checked: checked4,

                  onChange: () => {
                    setChecked4(!checked4);
                  }
                }}
              />
            }
            legend={<MapLegend />}
          />
          <LayerCard
            layer={
              <CardBar
                layer="true"
                title="Schools"
                switchProps={{
                  checked: checked5,

                  onChange: () => {
                    setChecked5(!checked5);
                  }
                }}
              />
            }
            legend={<MapLegend />}
          />
        </PanelSection>
      </Panel>
    );
  })
);

// storiesOf("Templates|Panel", module).add("Layer Panel", () =>
//   React.createElement(() => {
//     const [checked, setChecked] = useState(false);
//     const [checked2, setChecked2] = useState(false);
//     const [checked3, setChecked3] = useState(false);
//     const [checked4, setChecked4] = useState(false);
//     const [checked5, setChecked5] = useState(false);
//     return (
