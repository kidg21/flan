/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from "react";
import { Padding } from "helpers/Display";
import Card, { CardGrid } from "elements/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Command from "atoms/Command";
import Text, {Title} from "base/Typography";
import Bar from "blocks/Bar";

const BarNotes = markdown.require("./Bar.md");

const shortTitle = <Title text="A Standard Title" />;
const longTitle = (
  <Title text="A Title So Long That It May Take Up Multiple Lines" />
);
const multipleLines = (
  <Fragment>
    <Title text="Towgood, Gary T." />
    <Text text="3082 Yellowstone Dr. Costa Mesa, CA 92612" />
  </Fragment>
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
    withInfo()(() => {
      return (
        <Card>
          <Bar
            left={<Title text="Left" />}
            center={<Title text="Center" />}
            right={<Title text="Right" />}
          />
        </Card>
      );
    }),
  )

  .add("Knobs", () => {
    return (
      <Card>
        <Bar
          padding={options(
            "padding",
            {
              "none": "none",
              "1x (default)": null,
              "2x": "2x",
              "3x": "3x",
              "top": "top",
            },
            null,
            { display: "radio" },
            "Bar",
          )}
          contentAlign={options(
            "align content",
            {
              top: "top",
              center: "center",
              bottom: "bottom",
            },
            "top",
            { display: "radio" },
            "Bar",
          )}
          centerAlign={options(
            "center content",
            {
              left: "left",
              center: "center",
              right: "right",
            },
            "center",
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

  .add("Some Bars", () => {
    return (
      <CardGrid>
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
            center={multipleLines}
            right={<Command align="center" />}
          />
        </Card>

//         <Card>
//           <Bar left={shortTitle} right={<Command />} />
//         </Card>
//         <Card>
//           <Bar center={longTitle} centerAlign="left" right={<Command />} />
//         </Card>
//         <Card>
//           <Bar center={multipleLines} centerAlign="left" right={<Command />} />
//         </Card>

//         <Card>
//           <Bar left={shortTitle} />
//         </Card>
//         <Card>
//           <Bar left={longTitle} />
//         </Card>
//         <Card>
//           <Bar left={multipleLines} />
//         </Card>

//         <Card>
//           <Bar left={<Command />} />
//         </Card>
//         <Card>
//           <Bar center={<Command />} />
//         </Card>
//         <Card>
//           <Bar right={<Command />} />
//         </Card>
//         <Card>
//           <Bar left={<Command />} right={<Command />} />
//         </Card>
//         <Card>
//           <Bar left={<Command />} center={<Command />} right={<Command />} />
//         </Card>

//         <Card>
//           <Bar
            left={<Icon icon="circle" />}
            center={<Icon icon="circle" />}
            right={<Icon icon="circle" />}
          />
        </Card>

        <Card>
          <Bar
            left={
              <IconBlock>
                <Icon icon="circle_solid" />
                <Icon icon="circle_solid" type="info" />
                <Icon icon="circle_solid" type="success" />
              </IconBlock>
            }
          />
        </Card>

        <Card>
          <Bar
            contentAlign="center"
            left={
              <IconBlock>
                <Icon icon="circle_solid" />
                <Icon icon="circle_solid" type="info" />
                <Icon icon="circle_solid" type="success" />
              </IconBlock>
            }
            center={longTitle}
            right={
              <IconBlock>
                <Icon icon="circle_solid" />
                <Icon icon="circle_solid" type="info" />
                <Icon icon="circle_solid" type="success" />
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
                <Icon icon="circle_solid" />
                <Icon icon="circle_solid" type="info" />
                <Icon icon="circle_solid" type="success" />
              </IconBlock>
            }
          />
        </Card>
        <Card>
          <Bar
            contentAlign="center"
            left={
              <IconBlock>
                <Icon icon="circle_solid" />
                <Icon icon="circle_solid" type="info" />
                <Icon icon="circle_solid" type="success" />
              </IconBlock>
            }
            right={shortTitle}
          />
        </Card>
      </CardGrid>
    );
  });
