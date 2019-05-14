import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Switch from "./Switch";

// Colors
storiesOf("Atoms|Switch", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Documentation", () => <Switch />)
  .add("Switch", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
      );
    })
  );
