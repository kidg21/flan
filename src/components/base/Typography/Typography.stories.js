import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "./Typography";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .add("Typography", () => (
    <div>
      <Title title="COLORS" />
      <div>
        <Title title="Default Title" />
        <Title title="Info Title" type="info" />
        <Title title="Success Title" type="success" />
        <Title title="Warning Title" type="warning" />
        <Title title="Alert Title" type="alert" />
        <Title title="Inverse Title" type="inverse" />
      </div>
      <Title title="SIZES" />
      <div>
<<<<<<< HEAD
        <Title title="Default (Normal) Title" />
        <Title title="Small Title" size="small" />
        <Title title="Normal Title" size="normal" />
        <Title title="Large Title" size="large" />
        <Title title="XLarge Title" size="xlarge" />
=======
        <Title title="Tiny Title" size="tiny" />
        <Title title="Small Title" size="small" />
        <Title title="Standard Title" />
        <Title title="Large Title" size="large" />
        <Title title="XLarge Title" size="xlarge" />
        <Title title="XXLarge Title" size="xxlarge" />
>>>>>>> master
      </div>
      <div style={{ padding: "20px" }} />
      <Title title="STYLE" />
      <div>
        <Title title="Default Title" />
        <Title title="Italicized Title" style="italic" />
        <Title title="Underlined Title" style="underline" />
      </div>
      <div style={{ padding: "20px" }} />
      <Title title="SPECIAL TITLES" />
      <div>
        <Title title="Count Title" count="4" />
      </div>
<<<<<<< HEAD
      <div style={{ padding: "20px" }} />
      <div>
        <Title title="Light Weight" weight="light" />
        <Title title="Normal Weight" weight="normal" />
        <Title title="Bold Weight" weight="bold" />
      </div>
=======
>>>>>>> master
    </div>
  ));
