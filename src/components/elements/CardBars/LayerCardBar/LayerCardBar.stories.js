import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import LayerCardBar from "./LayerCardBar";
import Icon from "atoms/Icon";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const Icons = (
  <React.Fragment>
    <Icon icon={["far", "expand-arrows"]} />
    <Icon icon={["far", "share"]} />
    <Icon icon={["far", "filter"]} />
  </React.Fragment>
);

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
            },
          }}
          icons={Icons}
        />
      );
    })
  )
  .add("Layer Disabled", () => (
    <LayerCardBar title="Demographics" disabled icons={Icons} />
  ));