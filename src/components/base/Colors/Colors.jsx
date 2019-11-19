/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import Bar from "blocks/Bar";
import { Lighten, Darken } from "Variables";
import Title, { Headline, SubTitle } from "base/Typography";
import Panel, { PanelSection } from "layout/Panel";
import Grid from "layout/Grid";

const ThemeWrapper = styled.div`
  color: ${(props) => {
    return props.theme.text[props.color] || props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
`;

const ColorBlockColor = styled.div`
  width: 5em;
  border-radius: 100px;
  height: 5em;
  margin: 5px;
  filter: ${(props) => {
    return props.filterShade || "";
  }};
  border: 1px solid
    ${(props) => {
    return props.theme.text.disabled;
  }};

  background-color: ${(props) => {
    return props.theme.palette[props.color] || "";
  }};

  &:hover {
    ${Darken}
  }

  &:active {
    ${Lighten}
  }
`;

function Colors({ id, color }) {
  return (
    <Bar
      contentAlign="center"
      left={<ColorBlockColor color={color} />}
      leftWidth="min-content"
      center={<Title text={color} />}
      centerAlign="left"
    />
  );
}

function ColorPalette() {
  return (
    <ThemeWrapper>
      <PanelSection body>
        <Grid>

          <Headline text="Color Palette" />
          <SubTitle text="Color Palette is controled by themeing. Colors vary depending on theme selected." />

          <Colors color="primary" />
          <Colors color="primaryDark" />
          <Colors color="primaryLight" />
          <Colors color="primaryTint" />

          <Colors color="secondary" />
          <Colors color="secondaryDark" />
          <Colors color="secondaryLight" />
          <Colors color="secondaryTint" />

          <Colors color="grey" />
          <Colors color="grey2" />
          <Colors color="grey3" />
          <Colors color="grey4" />
          <Colors color="grey5" />
          <Colors color="grey6" />

          <Colors color="info" />
          <Colors color="infoTint" />
          <Colors color="success" />
          <Colors color="successTint" />
          <Colors color="warning" />
          <Colors color="warningTint" />
          <Colors color="alert" />
          <Colors color="alertTint" />

        </Grid>
      </PanelSection>
    </ThemeWrapper>
  );
}

export { ColorPalette as default, Colors };
