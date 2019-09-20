import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, optionsKnob as options } from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Card, { CardList } from "layout/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Command from "atoms/Command";
import Title from "base/Typography";
import Bar from "blocks/Bar";
import BarNotes from "./Bar.md";

const image = (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    width="50px"
    height="50px"
  />
);
const shortTitle = <Title text="A Standard Title" />;
const longTitle = <Title text="A Title So Long That It May Take Up Multiple Lines" />;
const multipleLines = (
  <>
    <Title text="Towgood, Gary T." />
    <Title text="3082 Yellowstone Dr. Costa Mesa, CA 92612" size="small" weight="normal" />
  </>
);

storiesOf("Blocks|Bar", module)
  .addParameters({
    info: {
      text:
        "The 'Bar' is a Flexbox-based component that is comprised of three flexible sections that evenly distribute the available space. The 'left', 'center', and 'right' props control the alignment of the content in each.",
    },
    notes: {
      markdown: BarNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <Card>
        <Bar
          left={<Title text="Left" />}
          center={<Title text="Center" />}
          right={<Title text="Right" />}
        />
      </Card>
    )),
  )

  .add("Knobs", () => {
    return (
      <Card>
        <Bar
          padding={options(
            "padding",
            {
              none: "none",
              default: "default",
              "2x": "2x",
              "3x": "3x",
            },
            "default",
            { display: "radio" },
            "Bar",
          )}
          contentAlign={options(
            "align content",
            {
              top: "default",
              center: "center",
              bottom: "bottom",
            },
            "default",
            { display: "radio" },
            "Bar",
          )}
          centerAlign={options(
            "center content",
            {
              left: "left",
              center: "default",
              right: "right",
            },
            "default",
            { display: "radio" },
            "Bar",
          )}
          left={<Title text="Left" />}
          leftWidth={text("left area width (max 40%)", "", "Bar")}
          center={multipleLines}
          right={<Title text="Right" />}
          rightWidth={text("right area width (max 40%)", "", "Bar")}
        />
      </Card>
    );
  })

  .add("Some Bars", () => (
    <CardList>
      <Card>
        <Bar left={<Command />} center={shortTitle} right={<Command />} />
      </Card>
      <Card>
        <Bar
          left={<Command align="right" />}
          center={longTitle}
          right={<Command align="right" />}
        />
      </Card>
      <Card>
        <Bar
          left={<Command align="center" />}
          center={
            <>
              <Title text="Towgood, Gary T." />
              <Title
                text="3082 Yellowstone Dr. Costa Mesa, CA 92612"
                size="small"
                weight="normal"
              />
            </>
          }
          right={<Command align="center" />}
        />
      </Card>

      <Card>
        <Bar left={shortTitle} right={<Command />} />
      </Card>
      <Card>
        <Bar left={longTitle} right={<Command />} />
      </Card>
      <Card>
        <Bar left={multipleLines} right={<Command />} />
      </Card>

      <Card>
        <Bar left={shortTitle} />
      </Card>
      <Card>
        <Bar left={longTitle} />
      </Card>
      <Card>
        <Bar left={multipleLines} />
      </Card>

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

      <Card>
        <Bar
          left={<Icon icon="circle" />}
          center={<Icon icon="circle" />}
          right={<Icon icon="circle" />}
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
        />
      </Card>

      <Card>
        <Bar
          contentAlign="center"
          left={
            <IconBlock>
              <Icon icon="circle" />
              <Icon icon="circle" anchor />
              <Icon icon="circle" success />
            </IconBlock>
          }
          center={longTitle}
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
          contentAlign="center"
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
          contentAlign="center"
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

      <Card>
        <Bar left={multipleLines} right={image} />
      </Card>
      <Card>
        <Bar left={image} right={multipleLines} />
      </Card>
      <Card>
        <Bar center={multipleLines} centerAlign="left" right={image} />
      </Card>
      <Card>
        <Bar left={image} center={multipleLines} centerAlign="right" />
      </Card>
    </CardList>
  ));
