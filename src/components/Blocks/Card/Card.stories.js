import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import PopCard from "./PopCard";
import Card from "./Card";

storiesOf("Blocks|Card", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Pop-up Card", () =>
    React.createElement(() => {
      return (
        <PopCard
          title="Pop Out Alert"
          message="Something happened and this is the message about it. Hey how you doing? Good? That's nice. Okay Bye"
          action="Do it!"
        />
      );
    })
  )
  .add("Layer Card", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(false);
      return (
        <div>
          <Card
            title="Trial Card"
            layer={true}
            switchProps={{
              checked: checked,
              onChange: () => {
                setChecked(!checked);
              }
            }}
          />
        </div>
      );
    })
  )
  .add("Info Card", () =>
    React.createElement(() => {
      return (
        <div>
          <Card title="Trial Card" info={true} />
        </div>
      );
    })
  )
  .add("Navigation Card", () =>
    React.createElement(() => {
      return (
        <div>
          <Card title="Trial Card" navigation={true} />
        </div>
      );
    })
  );
