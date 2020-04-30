/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import { Link } from "base/Typography";
import Image from "atoms/Image";
import DialogBox from "elements/DialogBox";
import Bar from "layout/Bar";
import Import from "atoms/Import";
import Form, {FormSection} from "layout/Form";




storiesOf("Templates|Upload", module)
  .add(
    "Default",
    () => {
      return React.createElement(() => {

        return (
          <DialogBox
          title="Upload"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              },
            {
              id: "Upload",
              label: "Upload",
            },
          ]}
        >
        <Import />
        </DialogBox>
                     
        );
      });
    },
  )
  .add(
    "With Files",
    () => {
      return React.createElement(() => {

        return (
          <DialogBox
          title="Upload"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              type: "button",
              },
            {
              id: "Upload",
              label: "Upload",
              type: "submit"
            },
          ]}
        >
                   <React.Fragment>
  

         <List>
           <ListItem title="File 1"/>
           <ListItem title="File 2"/>
           <ListItem title="File 3"/>
         </List>
        <Import />
         </React.Fragment>
        </DialogBox>
                     
        );
      });
    },
  );