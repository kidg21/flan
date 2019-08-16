import React from "react";
import { storiesOf } from "@storybook/react";
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
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Title, { SubTitle, Description } from "base/Typography";
import Bar from "blocks/Bar";
import { Piece, CardList } from "layout/Card";
import Icon from "atoms/Icon";
import IconNotes from "atoms/Icon/Icon.md";
import {
  iconsApp,
  iconsBrand,
  iconsNavigation,
  iconsType,
  iconsSize,
} from "atoms/Icon/libraryIcon.data.js";

/** TODO: figure if this component should be re-usable.
 * If it can, then find it a home.
 */
function IconSet({ data }) {
  return [
    data.map(item => (
      <Piece
        key={item.icon}
        id={item.icon}
        hover={true}
        // TODO: Add background props to Card
        // type={item.background}
      >
        <Bar
          contentAlign="center"
          left={
            <Icon
              icon={item.icon}
              type={item.type}
              size={item.size || "2x"}
              fixedWidth={true}
              spin={item.spin}
              pulse={item.pulse}
            />
          }
          leftWidth="min-content"
          center={
            <>
              {item.name ? (
                <Title text={item.name} size="large" select="all" />
              ) : (
                <Title text={item.icon} size="large" select="all" />
              )}
              <Description text={item.desc} />
            </>
          }
          centerAlign="left"
        />
      </Piece>
    )),
  ];
}

storiesOf("Work|Atoms/Icon/", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      text: "Icon info goes here...",
    },
    notes: {
      markdown: IconNotes,
    },
  })
  .add("Documentation", withInfo()(() => <Icon icon="user_circle" size="2x" />))
  .add("Type", () => (
    <Grid columns="1">
      <Title text="Icon Types" size="large" style="underline" />
      <SubTitle text="Icons inherit the 'color' of the parent container but can be overridden." />
      <Description text="Available Props: default (no prop)', 'info', 'success', 'warning', 'alert', 'inverse'" />
      <CardList>
        <IconSet data={iconsType} />
      </CardList>
    </Grid>
  ))
  .add("Size", () => (
    <Grid columns="1">
      <Title text="Icon Sizes" size="large" style="underline" />
      <SubTitle text="Icons inherit the 'font-size' of the parent container and are relatively sized." />
      <Description text="Available Props: 'xs', 'sm', 'standard (no prop)', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'" />
      <CardList>
        <IconSet data={iconsSize} />
      </CardList>
    </Grid>
  ))

storiesOf("Work|Icon Library", module)
  .addDecorator(Padding)
  .add("App Icons", () => (
    <Grid columns="1">
      <Title text="App Icons" size="large" style="underline" />
      <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
      <CardList>
        <IconSet data={iconsApp} />
      </CardList>
    </Grid>
  ));

storiesOf("Work|Icon Library", module)
  .addDecorator(Padding)
  .add("Navigation Icons", () => (
    <Grid columns="1">
      <Title text="Navigation Icons" size="large" style="underline" />
      <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
      <CardList>
        <IconSet data={iconsNavigation} />
      </CardList>
    </Grid>
  ));

storiesOf("Work|Icon Library", module)
  .addDecorator(Padding)
  .add("Brand Icons", () => (
    <Grid columns="1">
      <Title text="Brand Icons" size="large" style="underline" />
      <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
      <CardList>
        <IconSet data={iconsBrand} />
      </CardList>
    </Grid>
  ));
