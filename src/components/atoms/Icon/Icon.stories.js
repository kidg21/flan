/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Padding, IconGrid } from "helpers/Display";
import Grid from "layout/Grid";
import Title, { SubTitle, Description } from "base/Typography";
import { CardList } from "layout/Card";
import Icon from "atoms/Icon";
import IconNotes from "atoms/Icon/Icon.md";
import { iconsType, iconsSize } from "atoms/Icon/libraryIcon.data";

storiesOf("Atoms|Icon", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation", withInfo()(() => {
      return <Icon icon="user_circle" size="2x" />;
    }),
  )
  .add("Knobs", () => {
    return (
      <Icon
        icon={select(
          "icon",
          {
            user_circle: "user_circle",
            down: "down",
            bookmark: "bookmark_solid",
            plus: "plus",
            print: "print",
          },
          "user_circle",
          "Icon",
        )}
        type={select(
          "type",
          {
            info: "info",
            standard: "default",
            success: "success",
            warning: "warning",
            primary: "primary",
            secondary: "secondary",
            alert: "alert",
            inverse: "inverse",
          },
          "default",
          "Icon",
        )}
        size={select(
          "size",
          {
            xs: "xs",
            sm: "sm",
            standard: "default",
            lg: "lg",
            "2x": "2x",
            "3x": "3x",
            "4x": "4x",
            "5x": "5x",
            "6x": "6x",
            "7x": "7x",
            "8x": "8x",
            "9x": "9x",
            "10x": "10x",
          },
          "default",
          "Icon",
        )}
        onClick={boolean("interactive", false, "Icon")}
        disabled={boolean("disabled", false, "Icon")}
      />
    );
  })

  .add("Type", () => {
    return (
      <Grid columns="1">
        <Title text="Icon Types" size="large" styling="underline" />
        <SubTitle text="Icons inherit the 'color' of the parent container but can be overridden." />
        <Description text="Available Props: default (no prop)', 'info', 'success', 'warning', 'alert', 'inverse'" />
        <CardList>
          <IconGrid data={iconsType} />
        </CardList>
      </Grid>
    );
  })
  .add("Size", () => {
    return (
      <Grid columns="1">
        <Title text="Icon Sizes" size="large" styling="underline" />
        <SubTitle text="Icons inherit the 'font-size' of the parent container and are relatively sized." />
        <Description text="Available Props: 'xs', 'sm', 'standard (no prop)', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'" />
        <CardList>
          <IconGrid data={iconsSize} />
        </CardList>
      </Grid>
    );
  });
