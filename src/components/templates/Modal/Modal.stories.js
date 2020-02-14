/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, {useState} from "react";
import { Padding } from "helpers/Display";
import DialogBox from "elements/DialogBox";
import Form from "layout/Form";
import styled from "styled-components";
import Expander from "utils/Expander";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import TextInput from "atoms/TextInput";
import Text, { Title } from "base/Typography";
import SelectMenu from "atoms/SelectMenu";
import Accordion from "atoms/Accordion";
import Picker, {ColorSwatch} from "elements/Picker";


const options = [
    { value: "dataset1", label: "dataset1" },
    { value: "dataset2", label: "dataset2" },
    { value: "dataset3", label: "dataset3" },
    { value: "dataset4", label: "dataset4" },
    { value: "dataset5", label: "dataset5" },
  ];





storiesOf("Templates|Modal", module)
  .addDecorator(Padding)
  .add(
    "Thematic Ramper",
    () => {
        const [open, setOpen] = useState(false);
        function toggleDropdown() {
          if (open) {
            setOpen(false);
          } else {
            setOpen(true);
          }
        }


        const ColorPicker = (
          <Picker 
          text="Color Swatch" 
          columns="12">
                    <ColorSwatch
                    color="jobs"
                    
                    />
                    <ColorSwatch
                    color="research"
                     
                    />
                    <ColorSwatch
                    color="bi"
                     
                    />
                                <ColorSwatch
                    color="jobs"
                    isSelected
                     
                    />
                                <ColorSwatch
                    color="brand1"
                     
                    />
                                <ColorSwatch
                    color="brand2"
                    
                    />
                                <ColorSwatch
                    color="brand3"
                     
                    />
                                <ColorSwatch
                    color="brand4"
                     
                    />
                  </Picker>
        )

      return (
        <DialogBox
        title="Edit Legend"
        buttons={[
          {
            id: "Cancel",
            label: "Cancel",
          },
          {
            id: "Save",
            label: "Save",
          },
        ]}
      >
<Form>
  <SelectMenu
        label="Data Field"
        placeholder="dataset1"
        options={options}
      />
        {/* <SelectMenu
        label="Color Array"
        placeholder="dataset1"
        options={options}
      />   */}
     {ColorPicker}
            <Accordion
            onClick={(e) => {
              toggleDropdown(e);
              if (more.onToggle) more.onToggle(e);
            }}
            open={open}
            text="Define Legend Ranges"
          >
              <Form>
                <TextInput
                 placeholder="<1000"/>
                 <TextInput
                 placeholder="1000-10000"/>
                 <TextInput

                 placeholder="10000-50000"/>
                <TextInput

                 placeholder=">=500000"/>
                 </Form>
          </Accordion>
      </Form>

    </DialogBox>
      );
    });