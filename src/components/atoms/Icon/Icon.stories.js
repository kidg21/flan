import React, { Fragment } from "react";
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
import styled, { css } from "styled-components";
import { colors, shadows } from "Variables";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import IconNotes from "atoms/Icon/Icon.md";

const Success = styled.span`
  color: ${colors.success};
  font-weight: bold;
`;

const Title = styled.h2`
  font-weight: 400;
  grid-column: 1/-1;
`;

const SubTitle = styled.h5`
  grid-column: 1/-1;
  margin: 0;
`;

const SectionTitle = styled.h4`
  grid-column: 1/-1;
  letter-spacing: 1px;
  margin: 0;
  padding-top: 1em;
  border-top: 2px solid ${colors.grey_light};
`;

const StaticIcon = styled.li`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  justify-items: center;
  transition: all 0.15s ease;
  > svg {
    margin: 0.5rem 0;
  }
`;
const ActiveIcon = styled(StaticIcon)`
  cursor: pointer;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.anchor};
    filter: ${shadows.cardShadow};
    ${IconLabel} {
      &:hover {
        background-color: ${colors.white};
      }
    }
  }
`;
const IconLabel = styled.h6`
  flex: auto;
  color: inherit;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0.5em 0;
  line-height: normal;
  cursor: text;
  user-select: all;
`;
const blockStyle = {
  padding: ".5em",
  border: "1px solid lightgrey",
};

storiesOf("Atoms|Icon", module)
  .addDecorator(Padding)
  .add("Documentation", withInfo()(() => <Icon icon="circle" />));

storiesOf("Atoms|Icon", module)
  .addParameters({
    info: {
      text: "Icon info goes here...",
    },
    notes: {
      markdown: IconNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Icon icon="circle" size="lg" />))
  .add("Icon Colors", () => (
    <Grid columns="3" style={{ fontSize: "2em" }}>
      <Title>
        <u>Icon Colors</u>
      </Title>
      <SubTitle>
        Icons inherit the 'color' of the parent container but can be overridden.
      </SubTitle>
      <SubTitle>
        Available Props: default (no prop)', 'anchor', 'success', 'warning',
        'alert', 'inverse'
      </SubTitle>
      <StaticIcon>
        <Icon icon="circle" />
        <IconLabel>standard</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" type="info" />
        <IconLabel>info</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" type="success" />
        <IconLabel>success</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" type="warning" />
        <IconLabel>warning</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" type="alert" />
        <IconLabel>alert</IconLabel>
      </StaticIcon>
      <StaticIcon style={{ backgroundColor: "black" }}>
        <Icon icon="circle" type="inverse" />
        <IconLabel style={{ color: "white" }}>inverse</IconLabel>
      </StaticIcon>
    </Grid>
  ))
  .add("Icon Sizes", () => (
    <Grid columns="3">
      <Title>
        <u>Icon Sizes</u>
      </Title>
      <SubTitle>
        Icons inherit the 'font-size' of the parent container and are relatively
        sized.
      </SubTitle>
      <SubTitle>
        Available Props: 'xs', 'sm', 'default (no prop)', 'lg', '2x', '3x',
        '4x', '5x', '6x', '7x', '8x', '9x', '10x'
      </SubTitle>
      <StaticIcon>
        <Icon icon="circle" size="xs" />
        <IconLabel>xs</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="sm" />
        <IconLabel>sm</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" />
        <IconLabel>default</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="lg" />
        <IconLabel>lg</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="2x" />
        <IconLabel>2x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="3x" />
        <IconLabel>3x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="4x" />
        <IconLabel>4x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="5x" />
        <IconLabel>5x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="6x" />
        <IconLabel>6x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="7x" />
        <IconLabel>7x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="8x" />
        <IconLabel>8x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="9x" />
        <IconLabel>9x</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon icon="circle" size="10x" />
        <IconLabel>10x</IconLabel>
      </StaticIcon>
    </Grid>
  ))
  .add("Pulled + Bordered Icons", () => (
    <Grid columns="1">
      <Title>
        <u>Pulled + Bordered</u>
      </Title>
      <div>
        <Icon icon="circle" size="3x" pull="left" />
        <p>
          <u>
            <b>Pulled Left</b>
          </u>
          <br />
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
      <div>
        <Icon icon="circle" size="3x" border={true} pull="left" />
        <p>
          <u>
            <b>Pulled Left with Border</b>
          </u>
          <br />
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
      <div>
        <Icon icon="circle" size="3x" pull="right" />
        <p>
          <u>
            <b>Pulled Right</b>
          </u>
          <br />
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
      <div>
        <Icon icon="circle" size="3x" border={true} pull="right" />
        <p>
          <u>
            <b>Pulled Right with Border</b>
          </u>
          <br />
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
    </Grid>
  ))
  .add("Animated Icons", () => (
    <Grid columns="4" style={{ fontSize: "2em" }}>
      <Title>
        <u>Animated Icons</u>
      </Title>
      <SubTitle>
        Use the <Success>spin</Success> prop to get any icon to rotate, and use{" "}
        <Success>pulse</Success> to have it rotate with 8 steps.
      </SubTitle>
      <StaticIcon>
        <Icon name="loading" spin={true} />
        <IconLabel>spin</IconLabel>
      </StaticIcon>
      <StaticIcon>
        <Icon name="loading" pulse={true} />
        <IconLabel>pulse</IconLabel>
      </StaticIcon>
    </Grid>
  ));

storiesOf("Blocks|IconBlock", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Icon Block", () => (
    <Grid columns="3">
      <Title>
        <u>Icon Block</u>
      </Title>
      <SubTitle>Distributes icons horizontally</SubTitle>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
        <Icon icon="circle" type="warning" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
        <Icon icon="circle" type="warning" />
        <Icon icon="circle" type="alert" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
        <Icon icon="circle" type="warning" />
        <Icon icon="circle" type="alert" />
        <Icon icon="circle" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
        <Icon icon="circle" type="warning" />
        <Icon icon="circle" type="alert" />
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
      </IconBlock>
      <IconBlock style={blockStyle}>
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
        <Icon icon="circle" type="warning" />
        <Icon icon="circle" type="alert" />
        <Icon icon="circle" />
        <Icon icon="circle" type="info" />
        <Icon icon="circle" type="success" />
      </IconBlock>
    </Grid>
  ));

storiesOf("Application|Libraries/", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Icon Library", () => (
    <Grid style={{ fontSize: "2em" }}>
      <Title>
        <u>Icon Library</u>
      </Title>
      <SubTitle>
        The label of each Icon is the value of its 'icon' prop. ( string or
        array ) Select an Icon, copy its label, and paste the value into the
        'icon' prop.
      </SubTitle>
      <SectionTitle>Icons ( Alphabetical )</SectionTitle>
      <ActiveIcon>
        <Icon icon={["far", "angle-down"]} />
        <IconLabel>"far", "angle-down"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "angle-left"]} />
        <IconLabel>"far", "angle-left"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "angle-right"]} />
        <IconLabel>"far", "angle-right"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "angle-up"]} />
        <IconLabel>"far", "angle-up"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "apple"]} />
        <IconLabel>"fab", "apple"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "arrow-from-bottom"]} />
        <IconLabel>"far", "arrow-from-bottom"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "bell"]} />
        <IconLabel>"far", "bell"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "bookmark"]} />
        <IconLabel>"far", "bookmark"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="check" />
        <IconLabel>check</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="chevron-down" />
        <IconLabel>chevron-down</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="chevron-left" />
        <IconLabel>chevron-left</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fal", "chevron-left"]} />
        <IconLabel>"fal", "chevron-left"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="chevron-right" />
        <IconLabel>chevron-right</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fal", "chevron-right"]} />
        <IconLabel>"fal", "chevron-right"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="chevron-up" />
        <IconLabel>chevron-up</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="circle" />
        <IconLabel>circle</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fal", "clone"]} />
        <IconLabel>"fal", "clone"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "code"]} />
        <IconLabel>"far", "code"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="circle" />
        <IconLabel>coffee</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "cog"]} />
        <IconLabel>"far", "cog"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "copy"]} />
        <IconLabel>"far", "copy"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fal", "directions"]} />
        <IconLabel>"fal", "directions"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "ellipsis-v"]} />
        <IconLabel>"far", "ellipsis-v"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="envelope" />
        <IconLabel>envelope</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="exclamation" />
        <IconLabel>exclamation</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "expand-arrows"]} />
        <IconLabel>"far", "expand-arrows"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "filter"]} />
        <IconLabel>"far", "filter"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="flag" />
        <IconLabel>flag</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "globe"]} />
        <IconLabel>"far", "globe"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "highlighter"]} />
        <IconLabel>"far", "highlighter"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="home" />
        <IconLabel>home</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="info" />
        <IconLabel>info</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="key" />
        <IconLabel>key</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "layer-group"]} />
        <IconLabel>"far", "layer-group"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "location-arrow"]} />
        <IconLabel>"far", "location-arrow"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "map"]} />
        <IconLabel>"far", "map"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="map-marker-alt" />
        <IconLabel>map-marker-alt</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="minus" />
        <IconLabel>minus</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="money-bill" />
        <IconLabel>money-bill</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="phone" />
        <IconLabel>phone</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="plus" />
        <IconLabel>plus</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fal", "plus-circle"]} />
        <IconLabel>"fal", "plus-circle"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "question-circle"]} />
        <IconLabel>"far", "question-circle"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "share"]} />
        <IconLabel>"far", "share"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "share-alt"]} />
        <IconLabel>"far", "share-alt"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "sign-out"]} />
        <IconLabel>"far", "sign-out"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="spinner" />
        <IconLabel>spinner</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="times" />
        <IconLabel>times</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fal", "times"]} />
        <IconLabel>"fal", "times"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "toggle-off"]} />
        <IconLabel>"far", "toggle-off"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["far", "toggle-on"]} />
        <IconLabel>"far", "toggle-on"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="user" />
        <IconLabel>user</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="users" />
        <IconLabel>users</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon="user-circle" />
        <IconLabel>user-circle</IconLabel>
      </ActiveIcon>
      <SectionTitle>Brand Icons</SectionTitle>
      <ActiveIcon>
        <Icon icon={["fab", "apple"]} />
        <IconLabel>"fab", "apple-pay"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "apple-pay"]} />
        <IconLabel>"fab", "apple-pay"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "ebay"]} />
        <IconLabel>"fab", "ebay"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "facebook"]} />
        <IconLabel>"fab", "facebook"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "firefox"]} />
        <IconLabel>"fab", "firefox"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "font-awesome"]} />
        <IconLabel>"fab", "font-awesome"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "google"]} />
        <IconLabel>"fab", "google"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "internet-explorer"]} />
        <IconLabel>"fab", "internet-explorer"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "linkedin"]} />
        <IconLabel>"fab", "linkedin"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "react"]} />
        <IconLabel>"fab", "react"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "twitter-square"]} />
        <IconLabel>"fab", "twitter-square"</IconLabel>
      </ActiveIcon>
      <ActiveIcon>
        <Icon icon={["fab", "windows"]} />
        <IconLabel>"fab", "windows"</IconLabel>
      </ActiveIcon>
    </Grid>
  ));
