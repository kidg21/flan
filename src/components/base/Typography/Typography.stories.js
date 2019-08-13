import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "./Typography";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .add("Typography", () => (
    <div>
      <Title text="COLORS" />
      <div>
        <Title text="Default Title" />
        <Title text="Info Title" type="info" />
        <Title text="Success Title" type="success" />
        <Title text="Warning Title" type="warning" />
        <Title text="Alert Title" type="alert" />
        <Title text="Inverse Title" type="inverse" />
      </div>
      <Title text="SIZES" />
      <div>
        <Title text="Tiny Title" size="tiny" />
        <Title text="Small Title" size="small" />
        <Title text="Standard Title" />
        <Title text="Large Title" size="large" />
        <Title text="XLarge Title" size="xlarge" />
        <Title text="XXLarge Title" size="xxlarge" />
      </div>
      <div style={{ padding: "20px" }} />
      <Title text="STYLE" />
      <div>
        <Title text="Default Title" />
        <Title text="Italicized Title" style="italic" />
        <Title text="Underlined Title" style="underline" />
      </div>
      <div style={{ padding: "20px" }} />
      <Title text="SPECIAL TITLES" />
      <div>
        <Title text="Count Title" count="4" />
      </div>
    </div>
  ));
