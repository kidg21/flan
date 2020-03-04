/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Text from "base/Typography";
import Accordion from "./Accordion.jsx";
import Checkbox from "atoms/Checkbox";

storiesOf("Atoms|Accordion", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return React.createElement(() => {
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
          }}
          open={open}
          header={{ title: "Accordion Title" }}
        >
          <Text text="hi" />
        </Accordion>
      );
    });
  })
  .add("Text", () => {
    return React.createElement(() => {
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
              }}
          open={open}
          header={{ description: "Accordion Title" }}
        >
          <Text text="hi" />
        </Accordion>
      );
    });
  })
  .add("Checkbox", () => {
    return React.createElement(() => {
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
          onClick={(e, evt) => {
            if (evt.target.id !== "checkbox-id") {
              toggleDropdown(e);
            }
          }}
          open={open}
          header={
            <Checkbox
              label="Label 1"
              id="checkbox-id"
            />}
        >
          <Text text="hi" />
        </Accordion>
      );
    });
  });

