import React from "react";
import { storiesOf } from "@storybook/react";
import Title, { SubTitle, Description, Link } from "./Typography";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

/** TODO: Use standard components for displaying stories */
storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .add("Typography", () => (
    <div>
      <Title text="TYPES" />
      <div>
        <Title text="This is a Title" />
        <SubTitle text="This is a Subtitle" />
        <Description text="This is a Description" />
        <Link text="This is a Link using a 'text' prop" />
        <Link>This is a Link wrapping text</Link>
      </div>
      <div style={{ padding: "20px" }} />
      <Title text="COLORS" />
      <div>
        <Title text="Default Title" />
        <Title text="Info Title" type="info" />
        <Title text="Success Title" type="success" />
        <Title text="Warning Title" type="warning" />
        <Title text="Alert Title" type="alert" />
        <Title text="Inverse Title" type="inverse" />
      </div>
      <div style={{ padding: "20px" }} />
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
