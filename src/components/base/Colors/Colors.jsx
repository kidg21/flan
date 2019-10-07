import React from "react";
import styled from "styled-components";
import Bar from "blocks/Bar";
import { Lighten, Darken } from "Variables";
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

  &:hover {
    ${Darken}
  }

  &:active {
    ${Lighten}
  }
`;

const TextStuff = styled(Title)`
  color: ${props => {
    return props.color || "";
  }};
  font-weight: semi-bold;
  font-size: 14px;
`;

function Colors({ id, color }) {
  return (
    <Bar
      contentAlign="center"
      left={<ColorBlockColor color={color} />}
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
    <Grid>
      <Title text="Color Palette" size="large" styling="underline" />
      <SubTitle text="Color Palette is controled by themeing. Colors vary depending on theme selected." />
      <Colors color="primary" />
      <Colors color="primaryLight" />
      <Colors color="primaryTint" />
      <Colors color="primaryDark" />

      <Colors color="secondary" />
      <Colors color="secondaryLight" />
      <Colors color="secondaryTint" />
      <Colors color="secondaryDark" />

      <Colors color="grey" />
      <Colors color="grey2" />
      <Colors color="grey3" />
      <Colors color="grey4" />
      <Colors color="grey5" />
      <Colors color="grey6" />

      <Colors color="info" />
      <Colors color="success" />
      <Colors color="successLight" />
      <Colors color="successDark" />
      <Colors color="warning" />
      <Colors color="alert" />
      <Colors color="alertLight" />
      <Colors color="alertTint" />
      <Colors color="alertDark" />
    </Grid>
  );
}

export { ColorPalette as default, Colors };
