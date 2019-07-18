import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import LayerCardBar from "./LayerCardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// Colors
storiesOf("Elements|Card Bar/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Layer", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState("");
      return (
        <LayerCardBar
          title="Demographics"
          switchProps={{
            checked: checked,
            onChange: () => {
              setChecked(!checked);
            }
          }}
        />
      );
    })
  )
  .add("Layer Disabled", () => (
    <LayerCardBar title="Demographics" disabled="true" />
  ));
