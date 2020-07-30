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
import Legend from "blocks/Legend";
import Picker, { ColorSwatch } from "elements/Picker";
import TextInput from "atoms/TextInput";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import Radio, { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import PrintNone from "images/dialogs/image-none.gif";
import PrintFull from "images/dialogs/image-full.gif";
import PrintHalf from "images/dialogs/image-half.gif";
import PrintQuarter from "images/dialogs/image-quarter.gif";

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
            onClick: doNothing,
          },
          {
            id: "Save Map",
            label: "Save Map",
            onClick: doNothing,
          },
        ]}
      >
        <Form
          title="Capture Map Image"
        >
          <FormSection title="Choose an Image Size">
            <Grid columns="4">
              <Image src={PrintNone} width="75" />
              <Image src={PrintFull} width="75" />
              <Image src={PrintHalf} width="75" />
              <Image src={PrintQuarter} width="75" />
            </Grid>
            <RadioGroup columns="4" align="center">
              <Radio
                id="radio-1"
                name="radio-group"
                value="1"
                label="None"
                align="center"
                checked
              />
              <Radio
                id="radio-2"
                name="radio-group"
                value="2"
                label="Quarter"
                align="center"
              />
              <Radio
                id="radio-3"
                name="radio-group"
                value="3"
                label="Half"
                align="center"
              />
              <Radio
                id="radio-4"
                name="radio-group"
                value="4"
                label="Full"
                align="center"
              />
            </RadioGroup>
            {/* <CheckboxGroup columns="1" gap="2x">
              <Checkbox id="Checkbox 1" label="Include Legend" />
            </CheckboxGroup> */}
          </FormSection>
          <FormSection title="">
            <CheckboxGroup columns="1" gap="2x">
              <Checkbox id="Checkbox 1" label="Include Map Legend" />
              <Picker id="standard" label="" columns="6">
                <ColorSwatch color="#D9ECEC" square />
                <ColorSwatch color="#63B1CD" square />
                <ColorSwatch color="#06BFAE" square />
                <ColorSwatch color="#095593" square />
                <ColorSwatch color="#F3822B" square />
                <ColorSwatch color="#FFBF00" square />
              </Picker>
            </CheckboxGroup>
          </FormSection>
        </Form>
      </DialogBox>
    );
  });
