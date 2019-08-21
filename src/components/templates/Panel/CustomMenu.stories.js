import React from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Panel, { PanelSection } from "layout/Panel";
import List, { ListItem } from "blocks/List";

storiesOf("Templates|Panel", module).add("Custom Commands", () =>
  React.createElement(() => {
    return (
      <Panel>
        <PanelSection>
          <MainPanelHeader title="Custom Actions" />
        </PanelSection>
        <PanelSection body>
          <List interactive>
            <ListItem label="Custom Command 1" onClick="" />
            <ListItem label="Custom Command 2" onClick="" />
            <ListItem label="Custom Command 3" onClick="" />
            <ListItem label="Custom Command 4" onClick="" />
            <ListItem label="Custom Command 5" onClick="" />
            <ListItem label="Custom Command 6" onClick="" />
            <ListItem label="Custom Command 7" onClick="" />
            <ListItem label="Custom Command 8" onClick="" />
          </List>
        </PanelSection>
      </Panel>
    );
  }),
);
