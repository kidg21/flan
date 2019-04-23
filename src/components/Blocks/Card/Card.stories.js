import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
// import PopCard from "./PopCard";
import PopCard from "./PopCard";
import Card from "./Card";

storiesOf("Blocks|Card", module)
  .add("Pop-up Card", () => (
    <PopCard
      title="Pop Out Alert"
      message="Something happened and this is the message about it. Hey how you doing? Good? That's nice. Okay Bye"
      action="Do it!"
    />
  ))
  .add("Panel Cards", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(false);
      return (
        <div>
          <Card title="Trial Card" info={true} />
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
          <Card title="Trial Card" navigation={true} />
        </div>
      );
    })
  );
