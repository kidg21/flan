/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Text from "base/Typography";
import Accordion from "./Accordion.jsx";

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
          title="Accordion Title"
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
          description="Accordion Title"
        >
          <Text text="hi" />
        </Accordion>
      );
    });
  });

