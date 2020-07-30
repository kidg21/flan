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
import Accordion from "atoms/Accordion";
import Radio from "atoms/Radio";
import Image from "atoms/Image";
import Switch from "atoms/Switch";
import Checkbox from "atoms/Checkbox";
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
                    <Menu
                      isFlex
                      id="menu-anchor"
                      visible
                      data={[{
                        label: "Satellite",
                        pre: { type: "radio" },
                      }, {
                        label: "Hybrid",
                        pre: { type: "radio" },
                      }, {
                         label: "Roads",
                        pre: { type: "radio" },
                      }]}
                      position="bottomRight"
                    >
                      <Button id="button-anchor" isPlain variant="neutral" label="Map Type" icon="map" alignCenter />
                    </Menu>
                    <Menu
                      id="menu-anchor"
                      isFlex
                      visible
                      data={[{
                        label: "Demographics",
                        pre: { type: "checkbox" },
                      }, {
                        label: "Household Income",
                        pre: { type: "checkbox" },
                      }, {
                        label: "Floods",
                        pre: { type: "checkbox" },
                      }, {
                        label: "Wetlands",
                        pre: { type: "checkbox" },
                      }, {
                        label: "Age",
                        pre: { type: "checkbox" },
                      }]}
                      position="bottomRight"
                    >
                      <Button id="button-anchor" isPlain variant="neutral" label="Layers" icon="layers" alignCenter />
                    </Menu>
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
