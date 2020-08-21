/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import {
  Padding, CenterDecorator,
} from "helpers/Display";
import Divider from "atoms/Divider";
import DialogBox from "elements/DialogBox";
import Form from "layout/Form";
import Picker, { ImageSwatch } from "elements/Picker";
import PrintNone from "images/dialogs/image-none.gif";
import PrintFull from "images/dialogs/image-full.gif";
import PrintHalf from "images/dialogs/image-half.gif";
import PrintQuarter from "images/dialogs/image-quarter.gif";
import PrintLegend from "images/dialogs/image-legend.gif";

function doNothing() {
  // do nothing
}

storiesOf("Templates/Modules/Dialogs", module)
  .addDecorator(Padding)
  .addDecorator(CenterDecorator)
  .addDecorator(withA11y)
  .add("Print Options", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Save Map Image",
              label: "Save Map Image",
              onClick: doNothing,
            },
          ]}
        >
          <Form>
            <Picker
              id="size"
              label="Choose an Image Size and Legend Option"
              columns="repeat(6, auto);"
            >
              <ImageSwatch
                src={PrintNone}
                alt="None"
                width="75"
                label="None"
                isSelected={activeSingleTab === "option1"}
                onClick={() => { setActiveSingleTab("option1"); }}
              />
              <ImageSwatch
                src={PrintFull}
                alt="Full"
                width="75"
                label="Full"
                isSelected={activeSingleTab === "option2"}
                onClick={() => { setActiveSingleTab("option2"); }}
              />
              <ImageSwatch
                src={PrintHalf}
                alt="Half"
                width="75"
                label="Half"
                isSelected={activeSingleTab === "option3"}
                onClick={() => { setActiveSingleTab("option3"); }}
              />
              <ImageSwatch
                src={PrintQuarter}
                alt="Quarter"
                width="75"
                label="Quarter"
                isSelected={activeSingleTab === "option4"}
                onClick={() => { setActiveSingleTab("option4"); }}
              />
              <Divider isVertical />
              <ImageSwatch
                src={PrintLegend}
                alt="Legend"
                width="75"
                label="Legend"
                isSelected={legend}
                onClick={toggleLegend}
              />
            </Picker>
          </Form>
        </DialogBox>
      );
    });
  });
