import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Header from "blocks/Panel/Header";
import Card from "blocks/Card/Card";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|Panel", module)
  .add("Filter-Main Panel", () =>
    React.createElement(() => {
      return (
        <Panel>
          <PanelSection>
            <Header title="Filters" twoParts={true} />
          </PanelSection>
          <PanelSection body>
            <Card title="Property Search" navigation={true} />
            <Card title="Builder Sites" navigation={true} />
            <Card title="Demographics" navigation={true} />

            <Card title="Foreclosures" navigation={true} />
            <Card title="Points of Interest" navigation={true} />

            <Card title="Public Schools" navigation={true} />
            <Card title="Qualified Opportunity Zones" navigation={true} />
            <Card title="School District Rating" navigation={true} />
            <Card title="Traffic" navigation={true} />
            <Card title="Transaction" navigation={true} />
            <Card title="Zones" navigation={true} />
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
            <Header title="Property Search" threeParts={true} />
          </PanelSection>
          <PanelSection body>
            <Card title="Property Type" navigation={true} />
            <Card title="Characteristics" navigation={true} />
            <Card title="Last Market Sale" navigation={true} />

            <Card title="Ownership" navigation={true} />
            <Card title="Property Value" navigation={true} />

            <Card title="Location" navigation={true} />
          </PanelSection>
        </Panel>
      );
    })
  )

  .add("Filter Details Panel", () =>
    React.createElement(() => {
      return (
        <Panel>
          <PanelSection>
            <Header title="Last Market Sale" threeParts={true} />
          </PanelSection>
          <PanelSection body>
            <span>Last Sale Date</span>
            <span>Last Sale Price</span>
            <span>Seller Name</span>
            <span>Last Sale Deed Type</span>
          </PanelSection>
        </Panel>
      );
    })
  );
