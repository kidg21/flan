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
        <Title title="Default (Normal) Title" />
        <Title title="Small Title" size="small" />
        <Title title="Normal Title" size="normal" />
        <Title title="Large Title" size="large" />
        <Title title="XLarge Title" size="xlarge" />
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
        <Title title="Count Title" number="4" />
        <Title results="3289" />
      </div>
    </div>
  ));
