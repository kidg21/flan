/* eslint-disable react/jsx-filename-extension */
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
import Controls, { Control } from "blocks/Controls";
import Grid from "layout/Grid";

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <Controls>
          <Control ControlLabel="Control" isSelected />
          <Control ControlLabel="Control" />
          <Control ControlLabel="Control" />
        </Controls>
      );
    }),
  );

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return (
      <Controls
        columns={options(
          "columns / row",
          {
            "single row ( default )": "default",
            "row wrap (responsive)": "wrap",
            "1 column / row": "1",
            "2 columns / row": "2",
            "3 columns / row": "3",
            "4 columns / row": "4",
            "5 columns / row": "5",
          },
          "default",
          { display: "radio" },
          "Control Group",
        )}
        align={options(
          "align",
          {
            "top ( default )": "default",
            "left ( 1 column / vertical )": "left",
            "bottom": "bottom",
            "right ( 1 column / vertical )": "right",
          },
          "default",
          { display: "radio" },
          "Control Group",
        )}
      >
        <Control
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
            "Control 1",
          )}
          ControlLabel={text("Control 1", "Control 1", "Control 1")}
          disabled={boolean("Disable 1", false, "Control 1")}
        />
        <Control
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
            "Control 2",
          )}
          ControlLabel={text("Control 2", "Control 2", "Control 2")}
          disabled={boolean("Disable 2", false, "Control 2")}
        />
        <Control
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
            "Control 3",
          )}
          ControlLabel={text("Control 3", "Control 3", "Control 3")}
          disabled={boolean("Disable 3", false, "Control 3")}
        />
        <Control
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
            "Control 4",
          )}
          ControlLabel={text("Control 4", "Control 4", "Control 4")}
          disabled={boolean("Disable 4", false, "Control 4")}
        />
        <Control
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
            "Control 5",
          )}
          ControlLabel={text("Control 5", "Control 5", "Control 5")}
          disabled={boolean("Disable 5", false, "Control 5")}
        />
      </Controls>
    );
  });

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .add("Single-Row (default)", () => {
    return (
      <Controls>
        <Control ControlLabel="Control" />
        <Control ControlLabel="Control" />
        <Control ControlLabel="Control" />
      </Controls>
    );
  })
  .add("Row-Wrap (responsive)", () => {
    return (
      <Controls columns="wrap">
        <Control ControlLabel="Control" />
        <Control ControlLabel="Control" />
        <Control ControlLabel="Control" />
      </Controls>
    );
  })

  .add("Icon Controls", () => {
    return (
      <Controls>
        <Control ControlLabel="Control" icon="user" />
        <Control ControlLabel="Control" icon="user" />
        <Control ControlLabel="Control" icon="user" />
      </Controls>
    );
  });

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .add("Single-Select", () => {
    return React.createElement(() => {
      const [activeSingleControl, setActiveSingleControl] = useState("Control1",);
      return (
        <Controls columns="">
          <Control
            ControlLabel="Control 1"
            isSelected={activeSingleControl === "Control1"}
            onClick={() => {
              setActiveSingleControl("Control1");
            }}
          />
          <Control
            ControlLabel="Control 2"
            isSelected={activeSingleControl === "Control2"}
            onClick={() => {
              setActiveSingleControl("Control2");
            }}
          />
          <Control
            ControlLabel="Control 3"
            isSelected={activeSingleControl === "Control3"}
            onClick={() => {
              setActiveSingleControl("Control3");
            }}
          />
        </Controls>
      );
    });
  })
  .add("Toggle-Select", () => {
    return React.createElement(() => {
      const [activeToggleControl, setActiveToggleControl] = useState("");
      return (
        <Controls columns="">
          <Control
            ControlLabel="Control 1"
            isSelected={activeToggleControl === "Control1"}
            onClick={() => {
              if (activeToggleControl === "Control1") {
                setActiveToggleControl("");
              } else {
                setActiveToggleControl("Control1");
              }
              return false;
            }}
          />
          <Control
            ControlLabel="Control 2"
            isSelected={activeToggleControl === "Control2"}
            onClick={() => {
              if (activeToggleControl === "Control2") {
                setActiveToggleControl("");
              } else {
                setActiveToggleControl("Control2");
              }
              return false;
            }}
          />
          <Control
            ControlLabel="Control 3"
            isSelected={activeToggleControl === "Control3"}
            onClick={() => {
              if (activeToggleControl === "Control3") {
                setActiveToggleControl("");
              } else {
                setActiveToggleControl("Control3");
              }
              return false;
            }}
          />
        </Controls>
      );
    });
  })
  .add("Multi-Select", () => {
    return React.createElement(() => {
      const [activeMultiControl, setActiveMultiControl] = useState(false);
      const [activeMultiControl2, setActiveMultiControl2] = useState(false);
      const [activeMultiControl3, setActiveMultiControl3] = useState(false);
      return (
        <Controls columns="">
          <Control
            ControlLabel="Control 1"
            isSelected={activeMultiControl}
            onClick={() => {
              setActiveMultiControl(!activeMultiControl);
            }}
          />
          <Control
            ControlLabel="Control 2"
            isSelected={activeMultiControl2}
            onClick={() => {
              setActiveMultiControl2(!activeMultiControl2);
            }}
          />
          <Control
            ControlLabel="Control 3"
            isSelected={activeMultiControl3}
            onClick={() => {
              setActiveMultiControl3(!activeMultiControl3);
            }}
          />
        </Controls>
      );
    });
  });
