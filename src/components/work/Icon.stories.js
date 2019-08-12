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
  &:hover {
    color: ${colors.success};
    cursor: pointer;
  }
`;

const IconDescription = styled(Description)`
  grid-column: 1/-1;
`;

/** TODO: figure if this component should be re-usable.
 * If it can, then find it a home.
 */
function IconSet({ data }) {
  return [
    data.map(item => (
      <Piece key={item.name} id={item.name}>
        <IconItem
          barAlign="center"
          left={<Icon name={item.name} size="2x" fixedWidth />}
          leftWidth="min-content"
          center={
            <>
              <Title title={item.name} size="large" select="all" />
              <IconDescription title={item.desc} />
            </>
          }
          centerAlign="left"
        />
      </Piece>
    )),
  ];
}

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("App Icons", () => (
    <Grid columns="1">
      <Title title="App Icons" size="large" style="underline" />
      <IconGrid>
        <IconSet data={iconsApp} />
      </IconGrid>
    </Grid>
  ));

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Navigation Icons", () => (
    <Grid columns="1">
      <Title title="Map Icons" size="large" style="underline" />
      <IconGrid>
        <IconSet data={iconsNavigation} />
      </IconGrid>
    </Grid>
  ));

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Brand Icons", () => (
    <Grid columns="1">
      <Title title="Brand Icons" size="large" style="underline" />
      <IconGrid>
        <IconSet data={iconsBrand} />
      </IconGrid>
    </Grid>
  ));
