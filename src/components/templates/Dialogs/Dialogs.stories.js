/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import {
  Padding, CenterDecorator,
} from "helpers/Display";
import Bar from "layout/Bar";
import Icon from "atoms/Icon";
import FileImport from "blocks/FileImport";
import Text, { Title, Link } from "base/Typography";
import Button from "atoms/Button";
import Command from "atoms/Command";
import Container from "atoms/Container";
import List, { ListItem } from "blocks/List";
import TextInput from "atoms/TextInput";
import Divider from "atoms/Divider";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Modal from "layout/Modal";
import Panel from "layout/Panel";
import DialogBox from "elements/DialogBox";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
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
  .addDecorator(checkA11y)
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
                width="75"
                label="None"
                isSelected={activeSingleTab === "option1"}
                onClick={() => { setActiveSingleTab("option1"); }}
              />
              <ImageSwatch
                src={PrintFull}
                width="75"
                label="Full"
                isSelected={activeSingleTab === "option2"}
                onClick={() => { setActiveSingleTab("option2"); }}
              />
              <ImageSwatch
                src={PrintHalf}
                width="75"
                label="Half"
                isSelected={activeSingleTab === "option3"}
                onClick={() => { setActiveSingleTab("option3"); }}
              />
              <ImageSwatch
                src={PrintQuarter}
                width="75"
                label="Quarter"
                isSelected={activeSingleTab === "option4"}
                onClick={() => { setActiveSingleTab("option4"); }}
              />
              <Divider isVertical />
              <ImageSwatch
                src={PrintLegend}
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
  })
  .add("Share Dialog", () => {
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
          title="Share"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Share",
              label: "Share",
              onClick: doNothing,
            },
          ]}
        >
          <Form>
                <FormSection columns="2">
                  <TextInput label="Username" placeholder="i.e. JDoe" isRequired />
                  <TextInput label="Email" />
                </FormSection>
                </Form>
        </DialogBox>
      );
    });
  })

  .add("Attachment Dialog", () => {
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
          title="Attachments "
         
        >
              <Container padding="1x" hasBorder maxHeight="25rem" width="30rem">
                <List isDivided>
      <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                  <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
                </List>
              </Container>
              <Bar left={<Command label="Add File" icon="plus" />}/>
              <Bar right={<Button label="Done" isSolid />}/>
            </DialogBox>
      );
    });
  })
  .add("Upload Dialog", () => {
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
          title="Add File"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Upload",
              onClick: doNothing,
            },
          ]}
         
        >
          <Form>
              <FileImport id="FileImport_Standard" />
              <TextInput label="Rename"/>
              </Form>
            </DialogBox>
      );
    });
  });
