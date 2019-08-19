import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import NavigationCardBar from "elements/CardBars/NavigationCardBar";
import Panel, { PanelSection } from "layout/Panel";
import Command from "atoms/Command";
import Bar from "blocks/Bar";

storiesOf("Templates|Panel", module).add("Custom Commands", () =>
  React.createElement(() => {
    return (
      <Panel>
        <PanelSection>
          <MainPanelHeader title="Custom Commands" />
        </PanelSection>
        <PanelSection body>
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
          <Bar left={<Command label="Custom Command 1" />} />
        </PanelSection>
      </Panel>
    );
  }),
);
