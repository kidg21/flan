import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Switch from "./Switch";

// Colors
storiesOf("Atoms|Switch", module)
  .addDecorator(Padding)
  .add("Switch", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        />
      );
    })
  );
