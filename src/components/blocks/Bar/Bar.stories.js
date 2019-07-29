import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  button,
  array,
  object,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { colors } from "Variables";
import { Padding } from "helpers/Display";
import Grid from "helpers/Grid";
import Card from "layout/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import BarNotes from "./Bar.md";

const Section = styled.h6`
  margin: 0;
  line-height: normal;
  color: ${colors.grey_60};
`;
const Title = styled.h5`
  margin: 0;
  line-height: normal;
`;
const SubTitle = styled.h6`
  margin: 0;
  line-height: normal;
`;

const image = (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    width="50px"
    height="50px"
  />
);
const shortTitle = <Title>A Standard Title</Title>;
const longTitle = (
  <Title>A Title So Long That It May Take Up Multiple Lines</Title>
);
const multipleLines = (
  <Grid col_1>
    <Title>Towgood, Gary T.</Title>
    <SubTitle>3082 Yellowstone Dr. Costa Mesa, CA 92612</SubTitle>
  </Grid>
);

storiesOf("Blocks|Bar", module)
  .addParameters({
    info: {
      text:
        "The 'Bar' is a Flexbox-based component that is comprised of three flexible sections that evenly distribute the available space. The 'left', 'center', and 'right' props control the alignment of the content in each."
    },
    notes: {
      markdown: BarNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <Card>
        <Bar
          left={<Title>Left</Title>}
          center={<Title>Center</Title>}
          right={<Title>Right</Title>}
        />
      </Card>
    ))
  )

  .add("Some Bars", () => (
    <Grid col_1>
      <Section>Command / Text / Command</Section>
      <Card>
        <Bar
          left={<Command />}
          center={<Title>{shortTitle}</Title>}
          right={<Command />}
        />
      </Card>
      <Card>
        <Bar left={<Command />} center={longTitle} right={<Command />} />
      </Card>
      <Card>
        <Bar left={<Command />} center={multipleLines} right={<Command />} />
      </Card>

      <Section>Text / Command</Section>
      <Card>
        <Bar left={shortTitle} right={<Command />} />
      </Card>
      <Card>
        <Bar left={longTitle} right={<Command />} />
      </Card>
      <Card>
        <Bar left={multipleLines} right={<Command />} />
      </Card>

      <Section>Text</Section>
      <Card>
        <Bar left={shortTitle} />
      </Card>
      <Card>
        <Bar left={longTitle} />
      </Card>
      <Card>
        <Bar left={multipleLines} />
      </Card>

      <Section>Commands</Section>
      <Card>
        <Bar left={<Command />} />
      </Card>
      <Card>
        <Bar center={<Command />} />
      </Card>
      <Card>
        <Bar right={<Command />} />
      </Card>
      <Card>
        <Bar left={<Command />} right={<Command />} />
      </Card>
      <Card>
        <Bar left={<Command />} center={<Command />} right={<Command />} />
      </Card>

      <Section>One Icon per section</Section>
      <Card>
        <Bar
          left={<Icon icon="coffee" />}
          center={<Icon icon="coffee" />}
          right={<Icon icon="coffee" />}
        />
      </Card>

      <Section>Icon Block in single section</Section>
      <Card>
        <Bar
          left={
            <IconBlock>
              <Icon icon="circle" />
              <Icon icon="circle" anchor />
              <Icon icon="circle" success />
            </IconBlock>
          }
        />
      </Card>

      <Section>Icon Block / Text / Icon Block</Section>
      <Card>
        <Bar
          left={
            <IconBlock>
              <Icon icon="circle" />
              <Icon icon="circle" anchor />
              <Icon icon="circle" success />
            </IconBlock>
          }
          center={shortTitle}
          right={
            <IconBlock>
              <Icon icon="circle" />
              <Icon icon="circle" anchor />
              <Icon icon="circle" success />
            </IconBlock>
          }
        />
      </Card>

      <Section>Text / Icon Block</Section>
      <Card>
        <Bar
          left={shortTitle}
          right={
            <IconBlock>
              <Icon icon="circle" />
              <Icon icon="circle" anchor />
              <Icon icon="circle" success />
            </IconBlock>
          }
        />
      </Card>
      <Card>
        <Bar
          left={
            <IconBlock>
              <Icon icon="circle" />
              <Icon icon="circle" anchor />
              <Icon icon="circle" success />
            </IconBlock>
          }
          right={shortTitle}
        />
      </Card>

      <Section>Text / Image</Section>
      <Card>
        <Bar left={multipleLines} right={image} />
      </Card>
      <Card>
        <Bar left={image} right={multipleLines} />
      </Card>
      <Card>
        <Bar center={multipleLines} right={image} />
      </Card>
      <Card>
        <Bar left={image} center={multipleLines} />
      </Card>
    </Grid>
  ));
