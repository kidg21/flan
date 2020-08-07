/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FullScreen } from "helpers/Display";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Popper from "layout/Popper";
import Container from "atoms/Container";
import Radio, { RadioGroup } from "atoms/Radio";
import Image from "atoms/Image";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import Card, { CardGrid, CardSection } from "elements/Card";
import Template from "layout/Template";
import LegendValue1 from "images/maps/legendvalue1.png";
import LegendValue2 from "images/maps/legendvalue2.png";
import LegendValue3 from "images/maps/legendvalue3.png";

storiesOf("Templates/Modules/Toolbar", module)
  .addDecorator(FullScreen)
  .addDecorator(checkA11y)
  .add("Map Tools", () => {
    return (
      <React.Fragment>
        <Template
          id="Template Regions"
          template="A_01"
          isOverlay
          A={{
            id: "A",
            content: (
              <Card>
                <Bar left={(
                  <ButtonGroup columns="5">
                    <Button alignCenter isPlain label="Draw" icon="draw" />
                    <Button alignCenter label="Measure" isPlain icon="measure" />
                    <Popper isFlex visible anchor={<Button id="button-anchor" isPlain variant="neutral" label="Map Type" icon="map" alignCenter />}>
                      <Card padding="3x">
                        <RadioGroup columns="1">
                          <Radio id="radio-1" name="radio-group" value="1" label="Roads" />
                          <Radio id="radio-2" name="radio-group" value="2" label="Aerial" />
                          <Radio id="radio-3" name="radio-group" value="3" label="Aerial with Labels" />
                        </RadioGroup>
                      </Card>
                    </Popper>
                    <Popper
                      anchor={<Button id="button-anchor" isPlain variant="neutral" label="Layers" icon="layers" alignCenter />}
                      isFlex
                      visible
                      position="bottomRight"
                    >
                      <Card padding="3x">
                        <CheckboxGroup columns="1">
                          <Checkbox
                            id="Checkbox-1"
                            name="Checkbox-group"
                            value="1"
                            label="Demographics"
                          />
                          <Checkbox
                            id="Checkbox-2"
                            name="Checkbox-group"
                            value="2"
                            label="Household Income"
                          />
                          <Checkbox
                            id="Checkbox-3"
                            name="Checkbox-group"
                            value="3"
                            label="Population Density"
                          />
                          <Checkbox
                            id="Checkbox-4"
                            name="Checkbox-group"
                            value="4"
                            label="Household Age"
                          />
                        </CheckboxGroup>
                      </Card>
                    </Popper>
                    <Button id="button-anchor" isPlain variant="neutral" label="Legend" icon="list" alignCenter />
                  </ButtonGroup>
                )}
                />
              </Card>
            ),
          }}
        />

      </React.Fragment>
    );
  })
  .add("Map Legend", () => {
    return (
      <React.Fragment>
        <Template
          id="Template Regions"
          template="A_01"
          isOverlay
          A={{
            id: "A",
            content: (
              <Card>
                <Bar left={(
                  <ButtonGroup columns="5">
                    <Button alignCenter isPlain label="Draw" icon="draw" />
                    <Button alignCenter label="Measure" isPlain icon="measure" />
                    <Button id="button-anchor" isSmall isPlain variant="neutral" label="Map Type" icon="map" alignCenter />
                    <Button id="button-anchor" isPlain isSmall variant="neutral" label="Layers" icon="layers" alignCenter />
                    <Popper
                      isFlex
                      id="popper-standard"
                      anchor={(
                        <Button
                          label="Legend"
                          icon="list"
                          isSmall
                          isPlain
                          alignCenter
                        />
                      )}
                      visible
                    >
                      <Container padding="0" hasBorder height="20rem">
                        <CardGrid>
                          <Card
                            description="Legend 1"
                            more={{
                              content: (
                                <CardSection>
                                  <Image
                                    src={LegendValue1}
                                    alt="Legend 1"
                                  />
                                </CardSection>),
                            }}
                          />
                          <Card
                            description="Legend 2"
                            more={{
                              content: (
                                <CardSection>
                                  <Image
                                    src={LegendValue2}
                                    alt="Legend 2"
                                  />
                                </CardSection>),
                            }}
                          />
                          <Card
                            description="Legend 3"
                            more={{
                              content: (
                                <CardSection>
                                  <Image
                                    src={LegendValue3}
                                    alt="Legend 3"
                                  />
                                </CardSection>),
                            }}
                          />
                        </CardGrid>
                      </Container>
                    </Popper>
                  </ButtonGroup>
                )}
                />
              </Card>
            ),
          }}
        />
      </React.Fragment>
    );
  });
