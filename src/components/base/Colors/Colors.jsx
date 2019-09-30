import React from "react";
import styled from "styled-components";
import Bar from "blocks/Bar";
import Panel from "layout/Panel";
import Title, { SubTitle } from "base/Typography";
import Grid from "layout/Grid";

const ColorBlockColor = styled.div`
  width: 5em;
  border-radius: 100px;
  height: 5em;
  margin: 5px;
  filter: ${props => {
    return props.filterShade || "";
  }};
  border: 1px solid
    ${props => {
      return props.theme.text.disabled;
    }};

  background-color: ${props => {
    return props.theme.palette[props.color] || "";
  }};
`;

const TextStuff = styled(Title)`
  color: ${props => {
    return props.color || "";
  }};
  font-weight: semi-bold;
  font-size: 14px;
`;

function Colors({ id, shade, color }) {
  let filterShade;
  switch (shade) {
    case "darken":
      filterShade = "brightness(85%) contrast(150%)";
      break;
    case "lighten":
      filterShade = "brightness(115%)";
      break;
    default:
      break;
  }
  return (
    <Bar
      contentAlign="center"
      left={<ColorBlockColor color={color} filterShade={filterShade} />}
      leftWidth="min-content"
      center={
        <>
          <TextStuff color={color} text={color} />
        </>
      }
      centerAlign="left"
    />
  );
}

function ColorPalette() {
  return (
    <Panel>
      <Title text="Color Palette" size="large" styling="underline" />
      <SubTitle text="Color Palette is controled by themeing. Colors vary depending on theme selected." />
      <Title text="Main Colors" size="large" styling="underline" />
      <Grid>
        <Colors color="primary" />
        <Colors color="primaryLight" />
        <Colors color="primaryTint" />
        <Colors color="primaryDark" />

        <Colors color="secondary" />
        <Colors color="secondaryLight" />
        <Colors color="secondaryTint" />
        <Colors color="secondaryDark" />
      </Grid>
      <Title text="Greys" size="large" styling="underline" />
      <Grid>
        <Colors color="grey" />
        <Colors color="grey2" />
        <Colors color="grey3" />
        <Colors color="grey4" />
        <Colors color="grey5" />
        <Colors color="grey6" />
      </Grid>
      <Title text="Notification Colors" size="large" styling="underline" />
      <Grid>
        <Colors color="info" />
        <Colors color="success" />
        <Colors color="warning" />
        <Colors color="alert" />
      </Grid>
    </Panel>
  );
}

export { ColorPalette as default, Colors };
