import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import styled from "styled-components";
import { colors, shadows, screen } from "Variables";
import Title, { SubTitle, Description } from "base/Typography";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";

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

const placeholder = {
  desc: "Short description of meaning and usage.",
};

function IconSet({ id, data }) {
  return [
    data.map(item => (
      <Piece id={id} key={item.id}>
        <Bar
          left={
            <Grid columns="1" gap="tiny">
              <Icon name={item.name} size="2x" />
              <Title title={item.title} size="large" />
              <Description title={item.desc} />
              <Title
                title={"name=" + "'" + item.name + "'"}
                size="small"
                select
              />
              <Title
                title={"icon=" + "'" + item.icon + "'"}
                size="small"
                select
              />
            </Grid>
          }
        />
      </Piece>
    )),
  ];
}

const iconsBrand = [
  {
    id: "1",
    title: "apple",
    name: "apple",
    icon: "{['fab', 'apple']}",
    desc: placeholder.desc,
  },
  {
    id: "2",
    title: "facebook",
    name: "facebook",
    icon: "{['fab', 'facebook']}",
    desc: placeholder.desc,
  },
  {
    id: "3",
    title: "firefox",
    name: "firefox",
    icon: "{['fab', 'firefox']}",
    desc: placeholder.desc,
  },
  {
    id: "4",
    title: "ie",
    name: "ie",
    icon: "{['fab', 'internet-explorer']}",
    desc: placeholder.desc,
  },
  {
    id: "5",
    title: "twitter",
    name: "twitter",
    icon: "{['fab', 'twitter-square']}",
    desc: placeholder.desc,
  },
  {
    id: "6",
    title: "windows",
    name: "windows",
    icon: "{['fab', 'windows']}",
    desc: placeholder.desc,
  },
];

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

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Navigation Icons", () => (
    <Grid columns="1">
      <Title title="Navigation Icons" size="large" style="underline" />
      <IconGrid>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="menu" size="2x" />
                <Title title="menu" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='menu'" size="small" select />
                <Title title="icon='bars'" size="small" select />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="up" size="2x" />
                <Title title="up" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='up'" size="small" select />
                <Title title="icon={['far', 'angle-up']}" size="small" select />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="down" size="2x" />
                <Title title="down" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='down'" size="small" select />
                <Title
                  title="icon={['far', 'angle-down']}"
                  size="small"
                  select
                />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="left" size="2x" />
                <Title title="left" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='left'" size="small" select />
                <Title
                  title="icon={['far', 'angle-left']}"
                  size="small"
                  select
                />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="right" size="2x" />
                <Title title="right" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='right'" size="small" select />
                <Title
                  title="icon={['far', 'angle-right']}"
                  size="small"
                  select
                />
              </Grid>
            }
          />
        </Piece>
      </IconGrid>
    </Grid>
  ));

const iconsMap = [
  {
    id: "1",
    title: "menu",
    icon: "menu",
    name: "menu",
    desc: placeholder.desc,
  },
  {
    id: "2",
    title: "up",
    icon: "up",
    name: "up",
    desc: placeholder.desc,
  },
  {
    id: "3",
    title: "down",
    icon: "down",
    name: "down",
    desc: placeholder.desc,
  },
  {
    id: "4",
    title: "left",
    icon: "left",
    name: "left",
    desc: placeholder.desc,
  },
  {
    id: "5",
    title: "right",
    icon: "right",
    name: "right",
    desc: placeholder.desc,
  },
];

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Map Icons", () => (
    <Grid columns="1">
      <Title title="Map Icons" size="large" style="underline" />
      <IconGrid>
        <IconSet data={iconsMap} />
      </IconGrid>
    </Grid>
  ));
