import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import styled from "styled-components";
import { colors, shadows, screen } from "Variables";
import Title, { SubTitle, Description } from "base/Typography";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Icon from "atoms/Icon";
import {
  iconsApp,
  iconsBrand,
  iconsNavigation,
  iconsType,
} from "atoms/Icon/libraryIcon.data.js";

const IconGrid = styled(Grid)`
  grid-template-columns: repeat(1, 1fr);
  @media ${screen.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${screen.large} {
    grid-template-columns: repeat(6, 1fr);
  }
  grid-auto-flow: dense;
`;

const IconItem = styled(Bar)`
  background-color: ${props => props.backgroundColor || ""};
  &:hover {
    color: ${colors.success};
    cursor: pointer;
  }
`;

/** TODO: figure if this component should be re-usable.
 * If it can, then find it a home.
 */
function IconSet({ data, backgroundColor }) {
  return [
    data.map(item => (
      <Piece key={item.icon} id={item.icon}>
        <IconItem
          contentAlign="center"
          backgroundColor={item.background}
          left={
            <Icon
              icon={item.icon}
              type={item.type}
              size="2x"
              fixedWidth={true}
              spin={item.spin}
              pulse={item.pulse}
            />
          }
          leftWidth="min-content"
          center={
            <>
              {item.name ? (
                <Title
                  text={item.name}
                  size="large"
                  type={item.type}
                  select="all"
                />
              ) : (
                <Title
                  text={item.icon}
                  size="large"
                  type={item.type}
                  select="all"
                />
              )}
              <Description text={item.desc} type={item.type} />
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
  .add("Type", () => (
    <Grid columns="1">
      <Title text="Icon Types" size="large" style="underline" />
      <SubTitle text="Icons inherit the 'color' of the parent container but can be overridden." />
      <Description text="Available Props: default (no prop)', 'info', 'success', 'warning', 'alert', 'inverse'" />
      <IconGrid>
        <IconSet data={iconsType} />
      </IconGrid>
    </Grid>
  ));

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("App Icons", () => (
    <Grid columns="1">
      <Title text="App Icons" size="large" style="underline" />
      <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
      <IconGrid>
        <IconSet data={iconsApp} />
      </IconGrid>
    </Grid>
  ));

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Navigation Icons", () => (
    <Grid columns="1">
      <Title text="Navigation Icons" size="large" style="underline" />
      <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
      <IconGrid>
        <IconSet data={iconsNavigation} />
      </IconGrid>
    </Grid>
  ));

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Brand Icons", () => (
    <Grid columns="1">
      <Title text="Brand Icons" size="large" style="underline" />
      <SubTitle text="Click the name of the icon to select, copy, and use the value in the Icon's 'name' prop" />
      <IconGrid>
        <IconSet data={iconsBrand} />
      </IconGrid>
    </Grid>
  ));
