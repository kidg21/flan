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
import Control, { Segment } from "blocks/Control";

const segmentNames = [
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

storiesOf("Blocks|Control", module)
  .addDecorator(Padding)
  .add(
    "Documentation",
    () => {
      return (
        <Control >
          <Segment label="Active" isSelected />
          <Segment label="Inactive" />
          <Segment label="Inactive" />
        </Control>
      );
    },
  )
  .add(
    "Passed via Array",
    () => {
      return (
        <Control data={segmentNames} />
      );
    },
  )
  .add(
    "Disabled (Control)",
    () => {
      return (
        <Control disabled >
          <Segment label="Segment" isSelected />
          <Segment label="Segment" />
          <Segment label="Segment" />
        </Control>
      );
    },
  )
  .add(
    "Disabled (Segment)",
    () => {
      return (
        <Control>
          <Segment label="Segment" isSelected />
          <Segment label="Segment" disabled />
          <Segment label="Segment" />
        </Control>
      );
    },
  );

storiesOf("Blocks|Control", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return (
      <Control
        disabled={boolean("disable", false, "Control")}
      >
        <Segment
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
            "Segment 1",
          )}
          label={text("Segment 1", "Segment 1", "Segment 1")}
          disabled={boolean("Disable 1", false, "Segment 1")}
        />
        <Segment
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
            "Segment 2",
          )}
          label={text("Segment 2", "Segment 2", "Segment 2")}
          disabled={boolean("Disable 2", false, "Segment 2")}
        />
        <Segment
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
            "Segment 3",
          )}
          label={text("Segment 3", "Segment 3", "Segment 3")}
          disabled={boolean("Disable 3", false, "Segment 3")}
        />
        <Segment
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
            "Segment 4",
          )}
          label={text("Segment 4", "Segment 4", "Segment 4")}
          disabled={boolean("Disable 4", false, "Segment 4")}
        />
        <Segment
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
            "Segment 5",
          )}
          label={text("Segment 5", "Segment 5", "Segment 5")}
          disabled={boolean("Disable 5", false, "Segment 5")}
        />
      </Control>
    );
  });

storiesOf("Blocks|Control", module)
  .addDecorator(Padding)
  .add("Default", () => {
    return (
      <Control>
        <Segment label="Segment" />
        <Segment label="Segment" />
        <Segment label="Segment" />
      </Control>
    );
  })

  .add("Icon Control", () => {
    return (
      <Control>
        <Segment label="Segment" icon="user" />
        <Segment label="Segment" icon="user" />
        <Segment label="Segment" icon="user" />
      </Control>
    );
  });

storiesOf("Blocks|Control", module)
  .addDecorator(Padding)
  .add("Single-Select", () => {
    return React.createElement(() => {
      const [activeSingleControl, setActiveSingleControl] = useState("Control1");
      return (
        <Control>
          <Segment
            label="Segment 1"
            isSelected={activeSingleControl === "Control1"}
            onClick={() => {
              setActiveSingleControl("Control1");
            }}
          />
          <Segment
            label="Segment 2"
            isSelected={activeSingleControl === "Control2"}
            onClick={() => {
              setActiveSingleControl("Control2");
            }}
          />
          <Segment
            label="Segment 3"
            isSelected={activeSingleControl === "Control3"}
            onClick={() => {
              setActiveSingleControl("Control3");
            }}
          />
        </Control>
      );
    });
  })
  .add("Toggle-Select", () => {
    return React.createElement(() => {
      const [activeToggleControl, setActiveToggleControl] = useState("");
      return (
        <Control>
          <Segment
            label="Segment 1"
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
          <Segment
            label="Segment 2"
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
          <Segment
            label="Segment 3"
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
        </Control>
      );
    });
  })
  .add("Multi-Select", () => {
    return React.createElement(() => {
      const [activeMultiControl, setActiveMultiControl] = useState(false);
      const [activeMultiControl2, setActiveMultiControl2] = useState(false);
      const [activeMultiControl3, setActiveMultiControl3] = useState(false);
      return (
        <Control>
          <Segment
            label="Segment 1"
            isSelected={activeMultiControl}
            onClick={() => {
              setActiveMultiControl(!activeMultiControl);
            }}
          />
          <Segment
            label="Segment 2"
            isSelected={activeMultiControl2}
            onClick={() => {
              setActiveMultiControl2(!activeMultiControl2);
            }}
          />
          <Segment
            label="Segment 3"
            isSelected={activeMultiControl3}
            onClick={() => {
              setActiveMultiControl3(!activeMultiControl3);
            }}
          />
        </Control>
      );
    });
  });
