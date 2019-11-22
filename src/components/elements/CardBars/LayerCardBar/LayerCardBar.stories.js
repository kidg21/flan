/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Icon from "atoms/Icon";
import LayerCardBar from "./LayerCardBar";

const Icons = (
  <React.Fragment>
    <Icon icon="zoom_extents" />
    <Icon icon="share" />
    <Icon icon="filter" />
  </React.Fragment>
);

storiesOf("Elements|Card Bar/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Layer", () => {
    return React.createElement(() => {
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
    });
  })
  .add("Layer Disabled", () => {
    return <LayerCardBar title="Demographics" disabled icons={Icons} />;
  });
