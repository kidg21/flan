/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Padding } from "helpers/Display";
import Picker, { ColorSwatch } from "elements/Picker";


storiesOf("Elements|Picker", module)
  .addDecorator(Padding)
  .add(
    "Picker",
    () => {
      return (
        <Picker label="Color Picker" columns="4">
          <ColorSwatch color="jobs" />
          <ColorSwatch color="bi" />
          <ColorSwatch isSelected color="research" />
          <ColorSwatch color="brand1" />
          <ColorSwatch color="brand2" />
          <ColorSwatch color="brand3" />
          <ColorSwatch color="brand4" />
        </Picker>
      );
    },
  )
  .add("Toggle-Select", () => {
    return React.createElement(() => {
      const [activeToggleTab, setActiveToggleTab] = useState("");
      return (
        <Picker label="Standard Swatches" columns="4">
          <ColorSwatch
            color="jobs"
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
          <ColorSwatch
            color="research"
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
          <ColorSwatch
            color="bi"
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
        </Picker>
      );
    });
  })

  .add("Square ", () => {
    return React.createElement(() => {
      const [activeToggleTab, setActiveToggleTab] = useState("");
      return (
        <Picker label="Square Swatches" columns="4">
          <ColorSwatch
            square
            color="jobs"
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
          <ColorSwatch
            square
            color="research"
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
          <ColorSwatch
            square
            color="bi"
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
        </Picker>
      );
    });
  });
