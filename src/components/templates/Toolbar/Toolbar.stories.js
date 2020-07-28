/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen, Padding } from "helpers/Display";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Mapbox from "layout/Map";
import Grid from "layout/Grid";
import Popper from "layout/Popper";
import Container from "atoms/Container";
import Text from "base/Typography";
import Accordion from "atoms/Accordion";
import Radio from "atoms/Radio";
import Image from "atoms/Image";
import Switch from "atoms/Switch";
import Checkbox from "atoms/Checkbox";
import Card, { CardSection, CardGrid } from "elements/Card";
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
            content:(
              <Card ><Bar left={<ButtonGroup columns="5"><Button alignCenter isPlain label="Draw" icon="draw" /><Button alignCenter label="Measure" isPlain icon="measure" />
              <Menu id="menu-anchor" visible data={[{
                label: <Radio label="Satellite" isSelected/>
                }, {
                label: <Radio label="Hybrid"/>
                }, {
                label: <Radio label="Roads"/>
                }, ]} position="bottomRight">
                    <Button id="button-anchor" isPlain variant="neutral" label="Map Type" icon="map" alignCenter />
                  </Menu>
                  <Menu id="menu-anchor" visible data={[{
                label: <Checkbox label="Demographics" />
                }, {
                label: <Checkbox label="Income" isSelected/>
                }, {
                label: <Checkbox label="Floods"/>
                }, {
                label: <Checkbox label="Crime" isSelected/>
                }, {
                label: <Checkbox label="Wetlands"/>
                }, ]} position="bottomRight">
                    <Button id="button-anchor" isPlain variant="neutral" label="Layers" icon="layers" alignCenter />
                  </Menu>
                    <Button id="button-anchor" isPlain variant="neutral" label="Legend" icon="list" alignCenter />
                  </ButtonGroup>}/></Card>
            )
          }}/>
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
            content:(
              <Card ><Bar left={<ButtonGroup columns="5"><Button alignCenter isPlain label="Draw" icon="draw" /><Button alignCenter label="Measure" isPlain icon="measure" />
                    <Button id="button-anchor" isSmall isPlain variant="neutral" label="Map Type" icon="map" alignCenter />
                    <Button id="button-anchor" isPlain isSmall variant="neutral" label="Layers" icon="layers" alignCenter />
                   
                    <Popper
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
            <Accordion description="Demographics">
            <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
                  alt="This is alt text for this image"
                />
              </Accordion>
              <Accordion description="Demographics">
            <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
                  alt="This is alt text for this image"
                />
              </Accordion>
              <Card description="Income" 
             more={{ content: <CardSection variant="light"><Button label="Button" variant="success" isSolid fullWidth /></CardSection> }}/>
              </Card>
        </Popper>
                  </ButtonGroup>}/></Card>
            )
          }}/>
        <Mapbox />
      </React.Fragment>
    );
  });