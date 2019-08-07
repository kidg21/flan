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

storiesOf("Work|Application/Libraries/Icon Library", module)
  .addDecorator(Padding)
  .add("Brand Icons", () => (
    <Grid columns="1">
      <Title title="Brand Icons" size="large" style="underline" />
      <IconGrid>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="apple" size="2x" />
                <Title title="apple" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='apple'" size="small" select />
                <Title title="icon={['fab', 'apple']}" size="small" select />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="facebook" size="2x" />
                <Title title="facebook" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='facebook'" size="small" select />
                <Title title="icon={['fab', 'facebook']}" size="small" select />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="firefox" size="2x" />
                <Title title="firefox" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='firefox'" size="small" select />
                <Title title="icon={['fab', 'firefox']}" size="small" select />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="google" size="2x" />
                <Title title="google" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='google'" size="small" select />
                <Title title="icon={['fab', 'google']}" size="small" select />
              </Grid>
            }
          />
        </Piece>
        <Piece>
          <Bar
            left={
              <Grid columns="1" gap="tiny">
                <Icon name="ie" size="2x" />
                <Title title="ie" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='ie'" size="small" select />
                <Title
                  title="icon={['fab', 'internet-explorer']}"
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
                <Icon name="twitter" size="2x" />
                <Title title="twitter" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='twitter'" size="small" select />
                <Title
                  title="icon={['fab', 'twitter-square']}"
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
                <Icon name="windows" size="2x" />
                <Title title="windows" size="large" />
                <Description title="Short description of meaning and usage." />
                <Title title="name='windows'" size="small" select />
                <Title title="icon={['fab', 'windows']}" size="small" select />
              </Grid>
            }
          />
        </Piece>
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
