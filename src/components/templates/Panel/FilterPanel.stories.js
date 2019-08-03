import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import NavigationCardBar from "elements/CardBars/NavigationCardBar";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|Panel", module)
  .add("Filter-Main Panel", () =>
    React.createElement(() => {
      return (
        <Panel>
          <PanelSection>
            <MainPanelHeader title="Filters" />
          </PanelSection>
          <PanelSection body>
            <NavigationCardBar title="Property Search" />
            <NavigationCardBar title="Builder Sites" />
            <NavigationCardBar title="Demographics" />

            <NavigationCardBar title="Foreclosures" />
            <NavigationCardBar title="Points of Interest" />

            <NavigationCardBar title="Public Schools" />
            <NavigationCardBar title="Qualified Opportunity Zones" />
            <NavigationCardBar title="School District Rating" />
            <NavigationCardBar title="Traffic" />
            <NavigationCardBar title="Transaction" />
            <NavigationCardBar title="Zones" />
          </PanelSection>
        </Panel>
      );
    })
  )
  .add("Navigation Panel-Skeleton", () =>
    React.createElement(() => {
      return (
        <Panel>
          <PanelSection>
            <MainPanelHeader />
          </PanelSection>
          <PanelSection body>
            <NavigationCardBar />
            <NavigationCardBar />
            <NavigationCardBar />

            <NavigationCardBar />
            <NavigationCardBar />

            <NavigationCardBar />
            <NavigationCardBar />
            <NavigationCardBar />
            <NavigationCardBar />
            <NavigationCardBar />
            <NavigationCardBar />
          </PanelSection>
        </Panel>
      );
    })
  )
  .add("Filter-2nd Panel", () =>
    React.createElement(() => {
      return (
        <Panel>
          <PanelSection>
            <NavigationPanelHeader title="Property Search" />
          </PanelSection>
          <PanelSection body>
            <NavigationCardBar title="Property Type" />
            <NavigationCardBar title="Characteristics" />
            <NavigationCardBar title="Last Market Sale" />

            <NavigationCardBar title="Ownership" />
            <NavigationCardBar title="Property Value" />

            <NavigationCardBar title="Location" />
          </PanelSection>
        </Panel>
      );
    })
  );
