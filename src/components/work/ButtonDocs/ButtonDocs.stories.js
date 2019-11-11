/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { withKnobs, text, boolean, select, optionsKnob as options } from "@storybook/addon-knobs";
import Button from "atoms/Button";

// CSF format
export default { title: "Work|Docs/ButtonDocs (CSF)", component: Button };
export const CSFFormat = () => {
  return <Button label="Standard Button" />;
};
export const CSFFormat2 = () => {
  return <Button label="Standard Button 2" />;
};
export const CSFFormat3 = () => {
  return <Button label="Standard Button 3" />;
};
export const Knobs = () => {
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
      fill={boolean("fill", false, "Button")}
      noBorder={boolean("noBorder", false, "Button")}
      disabled={boolean("disabled", false, "Button")}
    />
  );
};
