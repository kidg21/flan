import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import { withInfo } from "@storybook/addon-info";
import Grid from "helpers/Grid";
import Tabs, { Tab } from "blocks/Tabs";

// Buttons
storiesOf("Blocks|Tabs", module)
  .addDecorator(Padding)
  // .addDecorator(withInfo)
  .add("Tabs", () =>
    React.createElement(() => {
      // Single-Select
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      // Multi-Select
      const [activeMultiTab, setActiveMultiTab] = useState(false);
      const [activeMultiTab2, setActiveMultiTab2] = useState(false);
      const [activeMultiTab3, setActiveMultiTab3] = useState(false);
      // Toggle-Select
      const [activeToggleTab, setActiveToggleTab] = useState("tab1");
      return (
        <Grid col_1>
          <h6>Single-Select</h6>
          <Tabs>
            <Tab
              label="Tab 1"
              // Single-Select
              isSelected={activeSingleTab === "tab1"}
              onClick={() => {
                setActiveSingleTab("tab1");
              }}
            />
            <Tab
              label="Tab 2"
              // Single-Select
              isSelected={activeSingleTab === "tab2"}
              onClick={() => {
                setActiveSingleTab("tab2");
              }}
            />
            <Tab
              label="Tab 3"
              // Single-Select
              isSelected={activeSingleTab === "tab3"}
              onClick={() => {
                setActiveSingleTab("tab3");
              }}
            />
          </Tabs>
          <h6>Toggle-Select</h6>
          <Tabs>
            <Tab
              label="Tab 1"
              // Toggle-Select
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
              label="Tab 2"
              // Toggle-Select
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
              label="Tab 3"
              // Toggle-Select
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
          <h6>Multi-Select</h6>
          <Tabs>
            <Tab
              label="Tab 1"
              // Multi-Select
              isSelected={activeMultiTab}
              onClick={() => {
                setActiveMultiTab(!activeMultiTab);
              }}
            />
            <Tab
              label="Tab 2"
              // Multi-Select
              isSelected={activeMultiTab2}
              onClick={() => {
                setActiveMultiTab2(!activeMultiTab2);
              }}
            />
            <Tab
              label="Tab 3"
              // Multi-Select
              isSelected={activeMultiTab3}
              onClick={() => {
                setActiveMultiTab3(!activeMultiTab3);
              }}
            />
          </Tabs>
        </Grid>
      );
    })
  );
