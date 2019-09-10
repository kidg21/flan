import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Radio from "atoms/Radio";
import Checkbox from "atoms/Checkbox";
import TextInput from "atoms/TextInput";
import Switch from "atoms/Switch";


storiesOf("Atoms|Switch", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Documentation", () => {
    return <Switch />;
  })
  .add("Switch", () => {
    return React.createElement(() => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
      );
    });
  })
  .add("Disabled", () => {
    return (
      <Grid>
        <Switch id="switch_1" label="Label" />
        <Switch label="Label" disabled />
        <Checkbox id="disabled" label="Disabled" disabled />
        <Radio label="Disabled" disabled />
        <TextInput
          inputLabel="TextInput ( Disabled )"
          placeholder="I am just keeping things warm"
          helpText="This help text has been passed through a prop!"
          disabled
        />
      </Grid>
    );
  });
