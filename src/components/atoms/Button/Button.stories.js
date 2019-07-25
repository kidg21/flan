import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { colors } from "Variables";
import Button from "atoms/Button";
import ButtonNotes from "./Button.md";

// Button
storiesOf("Atoms|Button", module)
  .addParameters({
    info: {
      text:
        "A control that executes your custom code in response to user interactions.  When you tap a button, or select a button that has focus, the button performs any actions attached to it. You communicate the purpose of a button using a text label, an image, or both. The appearance of buttons is configurable, so you can tint buttons or format titles to match the design of your app. You can add buttons to your interface programmatically or using Interface Builder. -- 'developer.apple.com'",
    },
    notes: {
      markdown: ButtonNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => <Button buttonLabel="Standard Button" />),
  )

  .add("Knobs", () => (
    <Button
      icon={select(
        "icon",
        {
          "no icon": null,
          user: "user",
          "angle down": ["far", "angle-down"],
          bookmark: ["far", "bookmark"],
          plus: "plus",
          print: "print",
        },
        null,
        "Button",
      )}
      buttonLabel={text("button label", "Button Label", "Button")}
      color={options(
        "color",
        {
          "anchor ( default )": "default",
          success: "success",
          warning: "warning",
          alert: "alert",
        },
        "default",
        { display: "radio" },
        "Button",
      )}
      type={options(
        "type",
        {
          "outline ( default )": "default",
          solid: "solid",
          disabled: "disabled",
        },
        "default",
        { display: "radio" },
        "Button",
      )}
      size={options(
        "size",
        {
          small: "small",
          "medium ( default )": "default",
          large: "large",
        },
        "default",
        { display: "radio" },
        "Button",
      )}
      fullWidth={boolean("full width", false, "Button")}
    />
  ))
  .add("The Button Family", () => (
    <>
      <Grid>
        <Button buttonLabel="Standard Button" />
        <Button buttonLabel="Solid Button" type="solid" />
        <Button buttonLabel="Success Button" color="success" />
        <Button
          buttonLabel="Solid Success Button"
          type="solid"
          color="success"
        />
        <Button buttonLabel="Warning Button" color="warning" />
        <Button
          buttonLabel="Solid Warning Button"
          type="solid"
          color="warning"
        />
        <Button buttonLabel="Alert Button" color="alert" />
        <Button buttonLabel="Solid Alert Button" type="solid" color="alert" />
        <Button buttonLabel="Small Button" size="small" />
        <Button buttonLabel="Large Button" size="large" />
        <Button buttonLabel="Disabled Button" type="disabled" />
        <Button buttonLabel="Icon Button" icon={["fas", "user"]} />
        <Button
          buttonLabel="Large / Alert / Icon Button"
          icon={["fas", "user"]}
          size="large"
          type="solid"
          color="alert"
        />
      </Grid>
    </>
  ));
