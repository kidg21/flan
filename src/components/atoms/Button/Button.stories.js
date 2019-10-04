/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, select, optionsKnob as options } from "@storybook/addon-knobs";
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
  .add("Documentation", () => {
    return <Button label="Standard Button" />;
  })
  .add("Skeleton", () => {
    return <Button />;
  })
  .add("Knobs", () => {
    return (
      <Button
        icon={select(
          "icon",
          {
            "no icon": null,
            "user": "user",
            "down": "down",
            "bookmark": "bookmark_solid",
            "plus": "plus",
            "print": "print",
          },
          null,
          "Button",
        )}
        label={text("button label", "Button Label", "Button")}
        color={options(
          "color",
          {
            "primary (default)": "primary",
            "secondary": "secondary",
            "success": "success",
            "info": "info",
            "warning": "warning",
            "alert": "alert",
          },
          "default",
          { display: "radio" },
          "Button",
        )}
        type={options(
          "type",
          {
            "outline ( default )": "default",
            "solid": "solid",
          },
          "default",
          { display: "radio" },
          "Button",
        )}
        size={options(
          "size",
          {
            "small": "small",
            "medium ( default )": "default",
            "large": "large",
          },
          "default",
          { display: "radio" },
          "Button",
        )}
        fullWidth={boolean("full width", false, "Button")}
        disabled={boolean("disabled", false, "Button")}
      />
    );
  })
  .add("The Button Family", () => {
    return (
      <Grid>
        <Button label="Standard Primary" />
        <Button label="Solid Primary" type="solid" />
        <Button label="Standard Secondary" color="secondary" />
        <Button label="Solid Secondary" type="solid" color="secondary" />
        <Button label="Solid Info Button" type="solid" />
        <Button icon="filter" label="Fitlers" color="primary" />
        <Button label="Small Button" size="small" />
        <Button label="Large Button" size="large" />
        <Button label="Disabled Button" disabled />
        <Button label="Icon Button" icon="user" type="solid" />
        <Button label="Tab Secondary" color="secondary" type="underlined" />
        <Button label="Tab Primary" color="primary" />
      </Grid>
    );
  });
