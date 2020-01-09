/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  select,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Tabs, { Tab } from "blocks/Tabs";
import TabsNotes from "./Tabs.md";

storiesOf("Blocks|Tabs", module)
  .addParameters({
    info: {
      text: "Tabs info goes here...",
    },
    notes: {
      markdown: TabsNotes,
    },
  })
  .addDecorator(Padding)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <Tabs>
          <Tab tabLabel="Tab" isSelected />
          <Tab tabLabel="Tab" />
          <Tab tabLabel="Tab" />
        </Tabs>
      );
    }),
  )
  .add(
    "Secondary",
    withInfo()(() => {
      return (
        <Tabs>
          <Tab tabLabel="Tab" color="secondary" isSelected />
          <Tab tabLabel="Tab" color="secondary" />
          <Tab tabLabel="Tab" color="secondary" />
        </Tabs>
      );
    }),
  );

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return (
      <Tabs
        align={options(
          "align",
          {
            "top ( default )": "top",
            "left ( 1 column / vertical )": "left",
            "bottom": "bottom",
            "right ( 1 column / vertical )": "right",
          },
          "top",
          { display: "radio" },
          "Tab Group",
        )}
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
          tabLabel={text("Tab 1", "Tab 1", "Tab 1")}
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
          tabLabel={text("Tab 2", "Tab 2", "Tab 2")}
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
          tabLabel={text("Tab 3", "Tab 3", "Tab 3")}
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
          tabLabel={text("Tab 4", "Tab 4", "Tab 4")}
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
          tabLabel={text("Tab 5", "Tab 5", "Tab 5")}
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
        <Tab tabLabel="Tab" />
        <Tab tabLabel="Tab" />
        <Tab tabLabel="Tab" />
      </Tabs>
    );
  })
  .add("Vertical Column", () => {
    return (
      <Tabs vertical>
        <Tab tabLabel="Tab" />
        <Tab tabLabel="Tab" isSelected />
        <Tab tabLabel="Tab" />
      </Tabs>
    );
  })
  .add("Icon Tabs", () => {
    return (
      <Tabs>
        <Tab tabLabel="Tab" icon="user" />
        <Tab tabLabel="Tab" icon="user" />
        <Tab tabLabel="Tab" icon="user" />
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
        <Tab tabLabel="Tab" count="1" />
        <Tab tabLabel="Tab" count="87" />
        <Tab tabLabel="Tab" count="2" />
      </Tabs>
    );
  });

storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  .add("Single-Select", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      return (
        <Tabs columns="">
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
    });
  })
  .add("Toggle-Select", () => {
    return React.createElement(() => {
      const [activeToggleTab, setActiveToggleTab] = useState("");
      return (
        <Tabs columns="">
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
    });
  })
  .add("Multi-Select", () => {
    return React.createElement(() => {
      const [activeMultiTab, setActiveMultiTab] = useState(false);
      const [activeMultiTab2, setActiveMultiTab2] = useState(false);
      const [activeMultiTab3, setActiveMultiTab3] = useState(false);
      return (
        <Tabs columns="">
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
    });
  });
