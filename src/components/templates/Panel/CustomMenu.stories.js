import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Panel, { PanelSection } from "layout/Panel";
import NavigationCardBar from "elements/CardBars/NavigationCardBar";


storiesOf("Templates|Panel", module).add("Custom Commands", () =>
  React.createElement(() => {
    return (
      <Panel>
        <PanelSection>
          <MainPanelHeader title="Custom Actions" />
        </PanelSection>
        <PanelSection body>
            <NavigationCardBar title="Custom" />
            <NavigationCardBar title="Custom"  />
            <NavigationCardBar title="Custom"  />

            <NavigationCardBar title="Custom" />
            <NavigationCardBar title="Custom" />

            <NavigationCardBar title="Custom" />
        </PanelSection>
      </Panel>
    );
  }),
);
