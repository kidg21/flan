/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "./Colors";
import styled from "styled-components";
import Panel from "layout/Panel";
import Title, { SubTitle } from "base/Typography";
import Grid from "layout/Grid";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const GradientColorGreen = styled.div`
  width: 5em;
  border-radius: 5px;
  height: 5em;
  margin: 5px;
  background-image: linear-gradient(#75ab3f, #b6dc70);
`;

const GradientColorBlue = styled.div`
  width: 5em;
  border-radius: 5px;
  height: 5em;
  margin: 5px;
  background-image: linear-gradient(#2b82b1, #60ccfc);
`;

storiesOf("Application|Style Guides/", module)
  .addDecorator(Padding)
  .add("Color Palette", () => {
    return (
      <Panel>
        <Title text="Color Palette" size="large" styling="underline" />
        <SubTitle text="Color Palette is controled by themeing. Colors vary depending on theme selected." />
        <Title text="Palette Colors" size="large" styling="underline" />
        <Grid>
          <Colors color="#2B72B1" comment="HSL(201°, 61%, 43%) Google primary" />
          <Colors color="#65aae3" comment="HSL(207°, 69%, 64%) Google" />
          <Colors color="#004f81" comment="HSL(203°, 100%, 25%) Google" />

          <Colors color="#2483C2" comment="HSL(204°, 69%, 45%)" />
          <Colors color="#68B2E3" comment="HSL(204°, 69%, 65%)" />
          <Colors color="#14496C" comment="HSL(204°, 69%, 25%)" />

          <Colors color="#2A72B0" comment="adobe ccmono HSL208°, 61%, 43%" />
          <Colors color="#88C6FC" comment="accmonoHSL208°, 95%, 76%" />
          <Colors color="#1E517D" comment="accmono HSL208°, 61%, 30%" />

          <Colors color="#7cb342" comment="mono secondary" />
          <Colors color="#d6ffab" comment="mono secondary light" />
          <Colors color="#597f2f" comment="mono secondary dark" />

          <Colors color="#2A72B0" comment="adobe comp HSL208°, 61%, 43%" />
          <Colors color="#56AFFC" comment="accompHSL208°, 97%, 66%" />
          <Colors color="#0E3C63" comment="accomp HSL208°, 75%, 22%" />

          <Colors color="#7cb342" comment="comp secondary" />
          <Colors color="#beff78" comment="comp secondary light" />
          <Colors color="#42661c" comment="comp secondary dark" />

          <Colors color="#7cb342" comment="secondary" />
          <Colors color="#aee571" comment="secondary light" />
          <Colors color="#4b830d" comment="secondary dark" />

          <Colors color="#75ab3f" comment="secondary" />
          <Colors color="#a7dd6e" comment="secondary light" />
          <Colors color="#457b0a" comment="secondary dark" />
        </Grid>
      </Panel>
    );
  });

// <Title text="App Background Colors" size="large" styling="underline" />
// <Grid>
//   <Colors color="#ffffff" comment="background.default" />
//   <Colors color="#f4f6fc" comment="background.app" />
//   <Colors color="#E2E1DF" comment="divider" />
// </Grid>
// <Title text="Text Colors" size="large" styling="underline" />
// <Grid>
//   <Colors color="#5e5a62" comment="text.primary" />
//   <Colors color="#99958f" comment="text.secondary" />
//   <Colors color="#ffffff" comment="text.inverse" />
//   <Colors color="#5FD1E2" comment="text.link" />
//   <Colors color="#E2E1DF" comment="text.disabled" />
// </Grid>

{
  /* <Colors color="#8b878f"  />
          <Colors color="#343138"  />
          <Colors color="#cac6bf"  />
          <Colors color="#6b6762"  />
          <Colors color="#b0afad"  /> */
}

{
  /* <Colors color="#ffffff" comment="palette.white" />
          <Colors color="#000000" comment="palette.black" />
          <Colors color="#E2E1DF" comment="palette.disabled" />
          <Colors color="#99958F" comment="palette.grey" />
          <Colors color="#206bca" comment="palette.info" />
          <Colors color="#b41313" comment="palette.alert" />
          <Colors color="#ca8720" comment="palette.warning" />
          <Colors color="#07843f" comment="palette.success" /> */
}
