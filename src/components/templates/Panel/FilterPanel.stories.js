import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import PanelHeader from "elements/PanelHeader/PanelHeader";
import CardBar from "elements/CardBar/CardBar";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|Panel", module)
  .add("Filter-Main Panel", () =>
    React.createElement(() => {
      return (
        <Panel>
          <PanelSection>
            <PanelHeader title="Filters" main={true} />
          </PanelSection>
          <PanelSection body>
            <CardBar title="Property Search" navigation={true} />
            <CardBar title="Builder Sites" navigation={true} />
            <CardBar title="Demographics" navigation={true} />

            <CardBar title="Foreclosures" navigation={true} />
            <CardBar title="Points of Interest" navigation={true} />

            <CardBar title="Public Schools" navigation={true} />
            <CardBar title="Qualified Opportunity Zones" navigation={true} />
            <CardBar title="School District Rating" navigation={true} />
            <CardBar title="Traffic" navigation={true} />
            <CardBar title="Transaction" navigation={true} />
            <CardBar title="Zones" navigation={true} />
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
            <PanelHeader title="Property Search" navigation={true} />
          </PanelSection>
          <PanelSection body>
            <CardBar title="Property Type" navigation={true} />
            <CardBar title="Characteristics" navigation={true} />
            <CardBar title="Last Market Sale" navigation={true} />

            <CardBar title="Ownership" navigation={true} />
            <CardBar title="Property Value" navigation={true} />

            <CardBar title="Location" navigation={true} />
          </PanelSection>
        </Panel>
      );
    })
  );
