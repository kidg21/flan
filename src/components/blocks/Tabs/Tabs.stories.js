import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import Tabs, { Tab } from "blocks/Tabs";
import TabsNotes from "./Tabs.md";

storiesOf("Blocks|Tabs", module)
  .addParameters({
    info: {
      text: "Tabs info goes here..."
    },
    notes: {
      markdown: TabsNotes
    }
  })
  .addDecorator(Padding)
  .add(
    "Documentation",
    withInfo()(() => (
      <Tabs>
        <Tab tabLabel="Tab" />
        <Tab tabLabel="Tab" />
        <Tab tabLabel="Tab" />
      </Tabs>
    ))
  );

storiesOf("Blocks|Tabs", module)
  .addDecorator(withKnobs)
  .add("Knobs", () => (
    <Tabs
      columns={options(
        "columns / row",
        {
          "single row ( default )": "default",
          "row wrap (responsive)": "wrap",
          "1 column / row": "1",
          "2 columns / row": "2",
          "3 columns / row": "3",
          "4 columns / row": "4",
          "5 columns / row": "5"
        },
        "default",
        { display: "radio" },
        "Tab Group"
      )}
      align={options(
        "align",
        {
          "top ( default )": "default",
          "left ( 1 column / vertical )": "left",
          bottom: "bottom",
          "right ( 1 column / vertical )": "right"
        },
        "default",
        { display: "radio" },
        "Tab Group"
      )}
      isFloating={boolean("float", false, "Tab Group")}
    >
      <Tab
        icon={select(
          "icon 1",
          {
            "no icon": null,
            info: "info",
            clone: ["fal", "clone"],
            search: ["far", "search"],
            pencil: "pencil",
            list: "list"
          },
          null,
          "Tab 1"
        )}
        tabLabel={text("Tab 1", "Tab 1", "Tab 1")}
        isDisabled={boolean("Disable 1", false, "Tab 1")}
      />
      <Tab
        icon={select(
          "icon 2",
          {
            "no icon": null,
            info: "info",
            clone: ["fal", "clone"],
            search: ["far", "search"],
            pencil: "pencil",
            list: "list"
          },
          null,
          "Tab 2"
        )}
        tabLabel={text("Tab 2", "Tab 2", "Tab 2")}
        isDisabled={boolean("Disable 2", false, "Tab 2")}
      />
      <Tab
        icon={select(
          "icon 3",
          {
            "no icon": null,
            info: "info",
            clone: ["fal", "clone"],
            search: ["far", "search"],
            pencil: "pencil",
            list: "list"
          },
          null,
          "Tab 3"
        )}
        tabLabel={text("Tab 3", "Tab 3", "Tab 3")}
        isDisabled={boolean("Disable 3", false, "Tab 3")}
      />
      <Tab
        icon={select(
          "icon 4",
          {
            "no icon": null,
            info: "info",
            clone: ["fal", "clone"],
            search: ["far", "search"],
            pencil: "pencil",
            list: "list"
          },
          null,
          "Tab 4"
        )}
        tabLabel={text("Tab 4", "Tab 4", "Tab 4")}
        isDisabled={boolean("Disable 4", false, "Tab 4")}
      />
      <Tab
        icon={select(
          "icon 5",
          {
            "no icon": null,
            info: "info",
            clone: ["fal", "clone"],
            search: ["far", "search"],
            pencil: "pencil",
            list: "list"
          },
          null,
          "Tab 5"
        )}
        tabLabel={text("Tab 5", "Tab 5", "Tab 5")}
        isDisabled={boolean("Disable 5", false, "Tab 5")}
      />
    </Tabs>
  ));

storiesOf("Blocks|Tabs", module)
  .add("Simgle-Row (default)", () => (
    <Tabs>
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("Row-Wrap (responsive)", () => (
    <Tabs columns="wrap">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("1 Column per Row", () => (
    <Tabs columns="1">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("2 Columns per Row", () => (
    <Tabs columns="2">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("3 Columns per Row", () => (
    <Tabs columns="3">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("4 Columns per Row", () => (
    <Tabs columns="4">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("5 Columns per Row", () => (
    <Tabs columns="5">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("Vertical Column - Left", () => (
    <Tabs align="left">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("Simgle-Row, Bottom-Aligned", () => (
    <Tabs align="bottom">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("Vertical Column - Right", () => (
    <Tabs align="right">
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("Floating", () => (
    <Tabs isFloating={true}>
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
      <Tab tabLabel="Tab" />
    </Tabs>
  ))
  .add("Icon Tabs", () => (
    <Tabs>
      <Tab icon="user" />
      <Tab icon="user" />
      <Tab icon="user" />
    </Tabs>
  ));

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add("Simgle-Select", () =>
    React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      return (
        <Tabs columns="" isFloating={false}>
          <Tab
            tabLabel="Tab 1"
            isSelected={activeSingleTab === "tab1"}
            onClick={() => {
              setActiveSingleTab("tab1");
            }}
          />
          <Tab
            tabLabel="Tab 2"
            isSelected={activeSingleTab === "tab2"}
            onClick={() => {
              setActiveSingleTab("tab2");
            }}
          />
          <Tab
            tabLabel="Tab 3"
            isSelected={activeSingleTab === "tab3"}
            onClick={() => {
              setActiveSingleTab("tab3");
            }}
          />
        </Tabs>
      );
    })
  )
  .add("Toggle-Select", () =>
    React.createElement(() => {
      const [activeToggleTab, setActiveToggleTab] = useState("");
      return (
        <Tabs columns="" isFloating={false}>
          <Tab
            tabLabel="Tab 1"
            isSelected={activeToggleTab === "tab1"}
            onClick={() => {
              if (activeToggleTab === "tab1") {
                setActiveToggleTab("");
              } else {
                setActiveToggleTab("tab1");
              }
              return false;
            }}
          />
          <Tab
            tabLabel="Tab 2"
            isSelected={activeToggleTab === "tab2"}
            onClick={() => {
              if (activeToggleTab === "tab2") {
                setActiveToggleTab("");
              } else {
                setActiveToggleTab("tab2");
              }
              return false;
            }}
          />
          <Tab
            tabLabel="Tab 3"
            isSelected={activeToggleTab === "tab3"}
            onClick={() => {
              if (activeToggleTab === "tab3") {
                setActiveToggleTab("");
              } else {
                setActiveToggleTab("tab3");
              }
              return false;
            }}
          />
        </Tabs>
      );
    })
  )
  .add("Multi-Select", () =>
    React.createElement(() => {
      const [activeMultiTab, setActiveMultiTab] = useState(false);
      const [activeMultiTab2, setActiveMultiTab2] = useState(false);
      const [activeMultiTab3, setActiveMultiTab3] = useState(false);
      return (
        <Tabs columns="" isFloating={false}>
          <Tab
            tabLabel="Tab 1"
            isSelected={activeMultiTab}
            onClick={() => {
              setActiveMultiTab(!activeMultiTab);
            }}
          />
          <Tab
            tabLabel="Tab 2"
            isSelected={activeMultiTab2}
            onClick={() => {
              setActiveMultiTab2(!activeMultiTab2);
            }}
          />
          <Tab
            tabLabel="Tab 3"
            isSelected={activeMultiTab3}
            onClick={() => {
              setActiveMultiTab3(!activeMultiTab3);
            }}
          />
        </Tabs>
      );
    })
  );
