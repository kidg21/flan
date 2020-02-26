/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import {
  withKnobs,
  text,
  boolean,
  select,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Tabs, { Tab } from "blocks/Tabs";

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
          <Tab label="Tab" isSelected />
          <Tab label="Tab" />
          <Tab label="Tab" />
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
        <Tab
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
        <Tab
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
        <Tab
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
        <Tab
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
        <Tab
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
        <Tab label="Tab" />
        <Tab label="Tab" />
        <Tab label="Tab" />
      </Tabs>
    );
  })
  .add("Vertical Column", () => {
    return (
      <Tabs vertical>
        <Tab label="Tab" />
        <Tab label="Tab" isSelected />
        <Tab label="Tab" />
      </Tabs>
    );
  })
  .add("Icon Tabs", () => {
    return (
      <Tabs>
        <Tab label="Tab" icon="user" />
        <Tab label="Tab" icon="user" />
        <Tab label="Tab" icon="user" />
      </Tabs>
    );
  })
  .add("Icon Only Tabs", () => {
    return (
      <Tabs>
        <Tab icon="user" />
        <Tab icon="settings" />
        <Tab icon="report" />
      </Tabs>
    );
  })
  .add("Count Tabs", () => {
    return (
      <Tabs>
        <Tab label="Tab" count="1" />
        <Tab label="Tab" count="87" />
        <Tab label="Tab" count="2" />
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
  .add("Disabled (Tab Group)", () => {
    return (
      <Tabs disabled>
        <Tab label="Tab" />
        <Tab label="Tab" />
        <Tab label="Tab" />
      </Tabs>
    );
  })
  .add(
    "Disabled (Individual Tab)",
    () => {
      return (
        <Tabs>
          <Tab label="Tab" />
          <Tab label="Tab" disabled />
          <Tab label="Tab" />
        </Tabs>
      );
    },
  );

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add("Interactive", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      return (
        <Tabs columns="">
          <Tab
            label="Tab 1"
            isSelected={activeSingleTab === "tab1"}
            onClick={() => {
              setActiveSingleTab("tab1");
            }}
          />
          <Tab
            label="Tab 2"
            isSelected={activeSingleTab === "tab2"}
            onClick={() => {
              setActiveSingleTab("tab2");
            }}
          />
          <Tab
            label="Tab 3"
            isSelected={activeSingleTab === "tab3"}
            onClick={() => {
              setActiveSingleTab("tab3");
            }}
          />
        </Tabs>
      );
    });
  });
