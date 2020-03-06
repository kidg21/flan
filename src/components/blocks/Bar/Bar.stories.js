/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from "react";
import { Padding } from "helpers/Display";
import Card, { CardGrid } from "elements/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Command from "atoms/Command";
import Text, { Title } from "base/Typography";
import Bar from "blocks/Bar";

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

  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return (
        <Card>
          <Bar
            left={<Title text="Left" />}
            center={<Title text="Center" />}
            right={<Title text="Right" />}
          />
        </Card>
      );
    })

  .add("Knobs", () => {
    return (
      <Card>
        <Bar
          padding={options(
            "padding",
            {
              "none (default)": null,
              "1x": "1x",
              "2x": "2x",
              "3x": "3x",
              "top": "top",
              "horizontal": "horizontal",
              "vertical": "vertical",
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
          left={object(
            "left",
            {
              content: <Title text="Left" />,
              align: null,
              width: null,
            },
            "Bar",
          )}
          center={object(
            "center",
            {
              content: multipleLines,
              align: "center",
              width: null,
            },
            "Bar",
          )}
          right={object(
            "right",
            {
              content: <Title text="Right" />,
              align: "right",
              width: null,
            },
            "Bar",
          )}
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
