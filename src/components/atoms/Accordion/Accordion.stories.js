/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, {useState} from "react";
import Accordion from "./Accordion.jsx";
import Text from "base/Typography";

storiesOf("Atoms|Accordion", module)
  .addDecorator(withKnobs)
  .add("Default",() => {
    const [open, setOpen] = useState(false);
    function toggleDropdown() {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
      return (
        <Accordion
        onClick={(e) => {
          toggleDropdown(e);
          if (more.onToggle) more.onToggle(e);
        }}
        open={open}
        title="Accordion Title"
      >
        <Text text="hi"/>
      </Accordion>
      );
    })
    .add("Text",() => {
        const [open, setOpen] = useState(false);
        function toggleDropdown() {
          if (open) {
            setOpen(false);
          } else {
            setOpen(true);
          }
        }
          return (
            <Accordion
            onClick={(e) => {
              toggleDropdown(e);
              if (more.onToggle) more.onToggle(e);
            }}
            open={open}
            text="Accordion Title"
          >
            <Text text="hi"/>
          </Accordion>
          );
        });
    
