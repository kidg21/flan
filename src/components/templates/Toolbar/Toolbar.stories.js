/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen, Padding } from "helpers/Display";
import Panel from "layout/Panel";
import Text, { Title, Link } from "base/Typography";
import Button, { ButtonGroup } from "atoms/Button";
import Icon from "atoms/Icon";
import Bar from "layout/Bar";
import Mapbox from "layout/Map";
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
                  <Menu id="menu-anchor" visible data={[{
                label:  <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
                alt="This is alt text for this image"
              />
                }, ]} position="bottomRight">
                    <Button id="button-anchor" isPlain variant="neutral" label="Legend" icon="list" alignCenter />
                  </Menu></ButtonGroup>}/></Card>
            )
          }}/>
        <Mapbox />
      </React.Fragment>
    );
  });