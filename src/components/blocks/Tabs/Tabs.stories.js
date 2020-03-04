/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Tabs, { TabsItem } from "blocks/Tabs";

const tabNames = [
  {
    id: "segment_1",
    label: "Option 1",
  },
  {
    id: "segment_2",
    label: "Option 2",
    disabled: true,
  },
  {
    id: "segment_3",
    label: "Option 3",
  },
  {
    id: "segment_4",
    label: "Option 4",
    isSelected: true,
  },
];

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add(
    "Documentation",
    () => {
      return (
        <Tabs>
          <TabsItem label="Tab" isSelected />
          <TabsItem label="Tab" />
          <TabsItem label="Tab" />
        </Tabs>
      );
    },
  );

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return (
      <Tabs
        disabled={boolean("disable", false, "Tabs")}
      >
        <TabsItem
          icon={select(
            "icon 1",
            {
              "no icon": null,
              "info": "info",
              "clone": "clone",
              "search": "search",
              "draw": "draw",
              "list": "list",
            },
            null,
            "Tab 1",
          )}
          label={text("Tab 1", "Tab 1", "Tab 1")}
          disabled={boolean("Disable 1", false, "Tab 1")}
          onClick={() => {
            alert("Tab 1 clicked!");
          }}
        />
        <TabsItem
          icon={select(
            "icon 2",
            {
              "no icon": null,
              "info": "info",
              "clone": "clone",
              "search": "search",
              "draw": "draw",
              "list": "list",
            },
            null,
            "Tab 2",
          )}
          label={text("Tab 2", "Tab 2", "Tab 2")}
          disabled={boolean("Disable 2", false, "Tab 2")}
          onClick={() => {
            alert("Tab 2 clicked!");
          }}
        />
        <TabsItem
          icon={select(
            "icon 3",
            {
              "no icon": null,
              "info": "info",
              "clone": "clone",
              "search": "search",
              "draw": "draw",
              "list": "list",
            },
            null,
            "Tab 3",
          )}
          label={text("Tab 3", "Tab 3", "Tab 3")}
          disabled={boolean("Disable 3", false, "Tab 3")}
          onClick={() => {
            alert("Tab 3 clicked!");
          }}
        />
        <TabsItem
          icon={select(
            "icon 4",
            {
              "no icon": null,
              "info": "info",
              "clone": "clone",
              "search": "search",
              "draw": "draw",
              "list": "list",
            },
            null,
            "Tab 4",
          )}
          label={text("Tab 4", "Tab 4", "Tab 4")}
          disabled={boolean("Disable 4", false, "Tab 4")}
          onClick={() => {
            alert("Tab 4 clicked!");
          }}
        />
        <TabsItem
          icon={select(
            "icon 5",
            {
              "no icon": null,
              "info": "info",
              "clone": "clone",
              "search": "search",
              "draw": "draw",
              "list": "list",
            },
            null,
            "Tab 5",
          )}
          label={text("Tab 5", "Tab 5", "Tab 5")}
          disabled={boolean("Disable 5", false, "Tab 5")}
          onClick={() => {
            alert("Tab 5 clicked!");
          }}
        />
      </Tabs>
    );
  });

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add("Single-Row (default)", () => {
    return (
      <Tabs>
        <TabsItem label="Tab" />
        <TabsItem label="Tab" />
        <TabsItem label="Tab" />
      </Tabs>
    );
  })
  .add("Vertical Column", () => {
    return (
      <Tabs vertical>
        <TabsItem label="Tab" />
        <TabsItem label="Tab" isSelected />
        <TabsItem label="Tab" />
      </Tabs>
    );
  })
  .add("Icon Tabs", () => {
    return (
      <Tabs>
        <TabsItem label="Tab" icon="user" />
        <TabsItem label="Tab" icon="user" />
        <TabsItem label="Tab" icon="user" />
      </Tabs>
    );
  })
  .add("Icon Only Tabs", () => {
    return (
      <Tabs>
        <TabsItem icon="user" />
        <TabsItem icon="settings" />
        <TabsItem icon="report" />
      </Tabs>
    );
  })
  .add("Count Tabs", () => {
    return (
      <Tabs>
        <TabsItem label="Tab" count="1" />
        <TabsItem label="Tab" count="87" />
        <TabsItem label="Tab" count="2" />
      </Tabs>
    );
  })
  .add(
    "Passed via Array",
    () => {
      return (
        <Tabs data={tabNames} />
      );
    },
  )
  .add("Disabled (TabsItem Group)", () => {
    return (
      <Tabs disabled>
        <TabsItem label="Tab" />
        <TabsItem label="Tab" />
        <TabsItem label="Tab" />
      </Tabs>
    );
  })
  .add(
    "Disabled (Individual Tab)",
    () => {
      return (
        <Tabs>
          <TabsItem label="Tab" />
          <TabsItem label="Tab" disabled />
          <TabsItem label="Tab" />
        </Tabs>
      );
    },
  );

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add("Interactive", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      const tabButtons = [
        {
          id: "Tab 1",
          label: "Tab 1",
          isSelected: activeSingleTab === "tab1",
          onClick: () => { setActiveSingleTab("tab1"); },
        },
        {
          id: "Tab 2",
          label: "Tab 2",
          isSelected: activeSingleTab === "tab2",
          onClick: () => { setActiveSingleTab("tab2"); },
        },
        {
          id: "Tab 3",
          label: "Tab 3",
          isSelected: activeSingleTab === "tab3",
          onClick: () => { setActiveSingleTab("tab3"); },
        },
      ];
      return (
        <Tabs data={tabButtons} />
      );
    });
  });
