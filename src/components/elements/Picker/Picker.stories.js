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
        <Picker id="standard" label="Draw Tools Color Picker" columns="3">
          <ColorSwatch color="#EBEAEC" />
          <ColorSwatch color="#D9ECEC" />
          <ColorSwatch isSelected color="#80959D" />
          <ColorSwatch color="#63B1CD" />
          <ColorSwatch color="#06BFAE" />
          <ColorSwatch color="#095593" />
          <ColorSwatch color="#F3822B" />
          <ColorSwatch color="#FFBF00" />
        </Picker>
      );
    },
  )
  .add("Toggle-Select", () => {
    return React.createElement(() => {
      const [activeToggleTab, setActiveToggleTab] = useState("");
      return (
        <Picker id="toggleSelect" label="Standard Swatches" columns="4">
          <ColorSwatch
            color="#095593"
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
            color="#F3822B"
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
            color="#FFBF00"
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
        <Picker id="square" label="Square Swatches" columns="4">
          <ColorSwatch
            square
            color="#095593"
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
            color="#F3822B"
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
            color="#FFBF00"
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
