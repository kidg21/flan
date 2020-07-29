/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {
  FullScreen, Padding, CenterDecorator,
} from "helpers/Display";
import Text, { Title, Link } from "base/Typography";
import Button, { ButtonGroup } from "atoms/Button";
import Icon from "atoms/Icon";
import Bar from "layout/Bar";
import Grid from "layout/Grid";
import Card, { CardSection, CardGrid } from "elements/Card";
import Menu from "blocks/Menu";
import DialogBox from "elements/DialogBox";
import InputBlock from "blocks/InputBlock";
import Form, { FormSection } from "layout/Form";
import Template from "layout/Template";
import Image from "atoms/Image";
import TextInput from "atoms/TextInput";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import Radio, { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import MapStreets from "images/maps/map-streets.png";
import MapSatellite from "images/maps/map-satellite.jpg";
import MapHybrid from "images/maps/map-hybrid.jpg";

function doNothing() {
  // do nothing
}

storiesOf("Templates/Modules/Dialogs", module)
  // .addDecorator(FullScreen)
  .addDecorator(Padding)
  .addDecorator(CenterDecorator)
  .addDecorator(checkA11y)
  .add("Print Options", () => {
    return (
      <DialogBox
        buttons={[
          {
            id: "Cancel",
            label: "Cancel",
            // onClick: doNothing,
          },
          {
            id: "Save Map",
            label: "Save Map",
          },
        ]}
      >
        <Form
          title="Capture Map Image"
        >
          <FormSection title="Choose a Map Size">
            <RadioGroup columns="4" gap="2x">
              <Radio id="radio-1" name="radio-group" value="1" label="Radio 1" />
              <Radio id="radio-2" name="radio-group" value="2" label="Radio 2" />
              <Radio id="radio-3" name="radio-group" value="3" label="Radio 3" />
              <Radio id="radio-4" name="radio-group" value="4" label="Radio 4" />
            </RadioGroup>
          </FormSection>
          <FormSection title="Include Legend">
            <CheckboxGroup columns="1" gap="2x">
              <Checkbox id="Checkbox 1" label="Checkbox 1" />
            </CheckboxGroup>
          </FormSection>
        </Form>
      </DialogBox>
      // <CardGrid columns="3">
      //   <Card shadow="2x">
      //     <Image src={MapStreets} width="75" onClick />
      //     <Image src={MapSatellite} width="75" onClick />
      //     <Image src={MapHybrid} width="75" onClick />
      //   </Card>
      //   <Card shadow="2x">
      //     <Image src={MapStreets} width="75" onClick />
      //     <Image src={MapSatellite} width="75" onClick />
      //     <Image src={MapHybrid} width="75" onClick />
      //   </Card>
      //   <Card shadow="2x">
      //     <Image src={MapStreets} width="75" onClick />
      //     <Image src={MapSatellite} width="75" onClick />
      //     <Image src={MapHybrid} width="75" onClick />
      //   </Card>
      // </CardGrid>
    );
  });
