/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from "react";
import { Padding } from "helpers/Display";
import Card, { CardSection, CardGrid } from "elements/Card";
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
          <CardSection>
            <Bar
              left={<Title text="Left" />}
              center={<Title text="Center" />}
              right={<Title text="Right" />}
            />
          </CardSection>
        </Card>
      );
    },
  )

  .add("Knobs", () => {
    return (
      <Card>
        <Bar
          padding={options(
            "padding",
            {
              "none": "none",
              "default": null,
              "2x": "2x",
              "3x": "3x",
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
          <CardSection>
            <Bar left={<Command />} center={shortTitle} right={<Command />} />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar
              left={<Command align="right" />}
              center={longTitle}
              right={<Command align="right" />}
            />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar
              left={<Command align="center" />}
              center={multipleLines}
              right={<Command align="center" />}
            />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar
              left={
                <IconBlock>
                  <Icon icon="circle_solid" />
                  <Icon icon="circle_solid" variant="info" />
                  <Icon icon="circle_solid" variant="success" />
                </IconBlock>
              }
            />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar
              contentAlign="center"
              left={
                <IconBlock>
                  <Icon icon="circle_solid" />
                  <Icon icon="circle_solid" variant="info" />
                  <Icon icon="circle_solid" variant="success" />
                </IconBlock>
              }
              center={longTitle}
              right={
                <IconBlock>
                  <Icon icon="circle_solid" />
                  <Icon icon="circle_solid" variant="info" />
                  <Icon icon="circle_solid" variant="success" />
                </IconBlock>
              }
            />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar
              contentAlign="center"
              left={shortTitle}
              right={
                <IconBlock>
                  <Icon icon="circle_solid" />
                  <Icon icon="circle_solid" variant="info" />
                  <Icon icon="circle_solid" variant="success" />
                </IconBlock>
              }
            />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar
              contentAlign="center"
              left={
                <IconBlock>
                  <Icon icon="circle_solid" />
                  <Icon icon="circle_solid" variant="info" />
                  <Icon icon="circle_solid" variant="success" />
                </IconBlock>
              }
              right={shortTitle}
            />
          </CardSection>
        </Card>
      </CardGrid>
    );
  });
