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
        <CardSection>
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
        </CardSection>
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
            <Bar left={shortTitle} right={<Command />} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar center={longTitle} centerAlign="left" right={<Command />} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar center={multipleLines} centerAlign="left" right={<Command />} />
          </CardSection>

        </Card>

        <Card>
          <CardSection>
            <Bar left={shortTitle} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar left={longTitle} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar left={multipleLines} />
          </CardSection>

        </Card>

        <Card>
          <CardSection>
            <Bar left={<Command />} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar center={<Command />} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar right={<Command />} />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Bar left={<Command />} right={<Command />} />
          </CardSection>

        </Card>
        <Card>
          <CardSection>
            <Bar left={<Command />} center={<Command />} right={<Command />} />
          </CardSection>

        </Card>

        <Card>
          <CardSection>
            <Bar
              left={<Icon icon="circle" />}
              center={<Icon icon="circle" />}
              right={<Icon icon="circle" />}
            />
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Bar
              left={
                <IconBlock>
                  <Icon icon="circle_solid" />
                  <Icon icon="circle_solid" type="info" />
                  <Icon icon="circle_solid" type="success" />
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
                  <Icon icon="circle_solid" type="info" />
                  <Icon icon="circle_solid" type="success" />
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
                  <Icon icon="circle_solid" type="info" />
                  <Icon icon="circle_solid" type="success" />
                </IconBlock>
              }
              right={shortTitle}
            />
          </CardSection>
        </Card>
      </CardGrid>
    );
  });
