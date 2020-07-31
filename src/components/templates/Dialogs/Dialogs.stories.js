/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
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
import Picker, { ColorSwatch, ImageSwatch } from "elements/Picker";
import TextInput from "atoms/TextInput";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import Radio, { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import PrintNone from "images/dialogs/image-none.gif";
import PrintFull from "images/dialogs/image-full.gif";
import PrintHalf from "images/dialogs/image-half.gif";
import PrintQuarter from "images/dialogs/image-quarter.gif";
import PrintLegend from "images/dialogs/image-legend.gif";

function doNothing() {
  // do nothing
}

storiesOf("Templates/Modules/Dialogs", module)
  // .addDecorator(FullScreen)
  .addDecorator(Padding)
  .addDecorator(CenterDecorator)
  .addDecorator(checkA11y)
  .add("Print Options", () => {
    const [legend, setLegend] = useState(false);
    function toggleLegend() {
      if (legend) {
        setLegend(false);
      } else {
        setLegend(true);
      }
    }
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      // const tabButtons = [
      //   {
      //     id: "Tab 1",
      //     label: "Overview",
      //     isSelected: activeSingleTab === "tab1",
      //     onClick: () => { setActiveSingleTab("tab1"); },
      //   },
      //   {
      //     id: "Tab 2",
      //     label: "Zoning",
      //     isSelected: activeSingleTab === "tab2",
      //     onClick: () => { setActiveSingleTab("tab2"); },
      //   },
      //   {
      //     id: "Tab 3",
      //     label: "Transactions",
      //     isSelected: activeSingleTab === "tab3",
      //     onClick: () => { setActiveSingleTab("tab3"); },
      //   },
      //   {
      //     id: "Tab 4",
      //     label: "Assessment & Tax",
      //     isSelected: activeSingleTab === "tab4",
      //     onClick: () => { setActiveSingleTab("tab4"); },
      //   },
      // ];
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
            {/* <FormSection title="" columns=""> */}
            <Picker
              id="size"
              label="Choose an Image Size"
              columns="4"
            >
              <ImageSwatch
                src={PrintNone}
                width="75px"
                label="None"
                isSelected={activeSingleTab === "tab1"}
                onClick={() => { setActiveSingleTab("tab1"); }}
              />
              <ImageSwatch
                src={PrintFull}
                width="75px"
                label="Full"
                isSelected={activeSingleTab === "tab2"}
                onClick={() => { setActiveSingleTab("tab2"); }}
              />
              <ImageSwatch
                src={PrintHalf}
                width="75px"
                label="Half"
                isSelected={activeSingleTab === "tab3"}
                onClick={() => { setActiveSingleTab("tab3"); }}
              />
              <ImageSwatch
                src={PrintQuarter}
                width="75px"
                label="Quarter"
                isSelected={activeSingleTab === "tab4"}
                onClick={() => { setActiveSingleTab("tab4"); }}
              />
            </Picker>
            {/* </FormSection> */}
            {/* <FormSection title="" columns=""> */}
            <CheckboxGroup columns="" gap="">
              <Checkbox id="Checkbox 1" label="Include Map Legend" />
            </CheckboxGroup>
            {/* </FormSection> */}
            {/* <Picker
            id="legend"
            label="Include Legend"
            columns="4"
          >
            <ImageSwatch
              src={PrintLegend}
              width="120px"
              isSelected={legend}
              onClick={toggleLegend}
            />
          </Picker> */}
            {/* <FormSection title="Choose an Image Size">
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
                media={PrintNone}
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
          </FormSection>
          <FormSection title="" columns="1">
            <CheckboxGroup columns="" gap="">
              <Checkbox id="Checkbox 1" label="Include Map Legend" />
            </CheckboxGroup>
            <Image src={PrintLegend} width="150px" />
          </FormSection> */}
          </Form>
        </DialogBox>
      );
    });
  });
