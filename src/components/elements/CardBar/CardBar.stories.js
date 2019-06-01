import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import CardBar from "./CardBar";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// Colors
storiesOf("Elements|Card Bar", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Layer", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState("");
      return (
        <CardBar
          layer="true"
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
  .add("Disabled", () => <CardBar title="Demographics" disabled="true" />);

storiesOf("Elements|Card Bar", module)
  .add("Navigation", () => <CardBar navigation="true" title="Property" />)
  .add("Info", () => <CardBar info="true" title="Ownership" />);
