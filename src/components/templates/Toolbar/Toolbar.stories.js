/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState } from "hooks";
import { FullScreen, Padding } from "helpers/Display";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Grid from "layout/Grid";
import Popper from "layout/Popper";
import Container from "atoms/Container";
import Text from "base/Typography";
import List from "blocks/List";
import Accordion from "atoms/Accordion";
import Radio, { RadioGroup } from "atoms/Radio";
import Image from "atoms/Image";
import Switch from "atoms/Switch";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import Card, { CardSection } from "elements/Card";
import Menu from "blocks/Menu";
import Template from "layout/Template";

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
                          <Radio id="radio-1" name="radio-group" value="1" label="Satellite" />
                          <Radio id="radio-2" name="radio-group" value="2" label="Hybrid" />
                          <Radio id="radio-3" name="radio-group" value="3" label="Roads" />
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
        <Mapbox />
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
                      <Card>

                        <Card
                          description="Legend 1"
                          more={{
                            content: (
                              <CardSection variant="light">
                                <Button label="Button" variant="success" isSolid fullWidth />
                              </CardSection>
                            ),
                          }}
                        />

                        <Card
                          description="Legend 2"
                          more={{
                            content: (
                              <CardSection variant="light">
                                <Button label="Button" variant="success" isSolid fullWidth />
                              </CardSection>
                            ),
                          }}
                        />
                      </Card>
                    </Popper>
                  </ButtonGroup>
)}
                />
              </Card>
            ),
          }}
        />
        <Mapbox />
      </React.Fragment>
    );
  });
