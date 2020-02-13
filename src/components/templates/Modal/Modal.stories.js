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


const options = [
    { value: "dataset1", label: "dataset1" },
    { value: "dataset2", label: "dataset2" },
    { value: "dataset3", label: "dataset3" },
    { value: "dataset4", label: "dataset4" },
  ];

const Arrow = styled(Icon)`
  transform: ${(props) => { return (props.toggleOn ? "rotate(-180deg)" : "rotate(0deg)"); }};
`;

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
        <SelectMenu
        label="Color Array"
        placeholder="dataset1"
        options={options}
      />
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