/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
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
import Controls, { Control } from "blocks/Controls";

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .add(
    "Documentation",
    () => {
      return (
        <Controls>
          <Control label="Control" isSelected />
          <Control label="Control" />
          <Control label="Control" />
        </Controls>
      );
    });

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return (
      <Controls >
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
          label={text("Control 1", "Control 1", "Control 1")}
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
          label={text("Control 2", "Control 2", "Control 2")}
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
          label={text("Control 3", "Control 3", "Control 3")}
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
          label={text("Control 4", "Control 4", "Control 4")}
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
          label={text("Control 5", "Control 5", "Control 5")}
          disabled={boolean("Disable 5", false, "Control 5")}
        />
      </Controls>
    );
  });

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .add("Default", () => {
    return (
      <Controls>
        <Control label="Control" />
        <Control label="Control" />
        <Control label="Control" />
      </Controls>
    );
  })

  .add("Icon Controls", () => {
    return (
      <Controls>
        <Control label="Control" icon="user" />
        <Control label="Control" icon="user" />
        <Control label="Control" icon="user" />
      </Controls>
    );
  });

storiesOf("Blocks|Controls", module)
  .addDecorator(Padding)
  .add("Single-Select", () => {
    return React.createElement(() => {
      const [activeSingleControl, setActiveSingleControl] = useState("Control1");
      return (
        <Controls columns="">
          <Control
            label="Control 1"
            isSelected={activeSingleControl === "Control1"}
            onClick={() => {
              setActiveSingleControl("Control1");
            }}
          />
          <Control
            label="Control 2"
            isSelected={activeSingleControl === "Control2"}
            onClick={() => {
              setActiveSingleControl("Control2");
            }}
          />
          <Control
            label="Control 3"
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
            label="Control 1"
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
            label="Control 2"
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
            label="Control 3"
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
            label="Control 1"
            isSelected={activeMultiControl}
            onClick={() => {
              setActiveMultiControl(!activeMultiControl);
            }}
          />
          <Control
            label="Control 2"
            isSelected={activeMultiControl2}
            onClick={() => {
              setActiveMultiControl2(!activeMultiControl2);
            }}
          />
          <Control
            label="Control 3"
            isSelected={activeMultiControl3}
            onClick={() => {
              setActiveMultiControl3(!activeMultiControl3);
            }}
          />
        </Controls>
      );
    });
  });
