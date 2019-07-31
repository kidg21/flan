import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  button,
  array,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Grid from "helpers/Grid.jsx";
import Card from "layout/Card";
import TextInput from "atoms/TextInput";
import Search from "blocks/Search";
import Command from "atoms/Command";
import Checkbox from "atoms/Checkbox";
import List, { ListItem } from "blocks/List";
import ListNotes from "./List.md";

storiesOf("Blocks|List", module)
  .addParameters({
    info: {
      text:
        "A 'List' can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size. -- 'Ant Design'",
    },
    notes: {
      markdown: ListNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => (
      <Card>
        <List name="A List Can Have A Title">
          <ListItem label="List Item" />
          <ListItem label="List Item" />
          <ListItem label="List Item" />
          <ListItem label="List Item -- info" type="info" />
          <ListItem label="List Item -- success" type="success" />
          <ListItem label="List Item -- warning" type="warning" />
          <ListItem label="List Item -- alert" type="alert" />
          <ListItem label="List Item -- inverse" type="inverse" />
        </List>
      </Card>
    )),
  )

  .add("Stuff In A List", () => (
    <Grid col_1>
      <Card>
        <Search placeholder="Search by Address or Location" />
      </Card>
      <Card>
        <List name="You Can Give The List A Title">
          <ListItem label="List Item" />
          <ListItem
            label="List Item"
            description="This is the description"
            action={<Command />}
          />
          <ListItem
            label="This is a very long and informative title that might even need multiple lines to display it all"
            description="This is the description"
          />
          <ListItem
            label="List Item"
            onClick={() => {}}
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
            action={<Command name="settings" />}
          />
          <ListItem
            label="List Item"
            action={<Checkbox id="enable" label="Enable" align="right" />}
          />
          <ListItem
            label="This is a very long and informative title that might even need multiple lines to display it all"
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
            action={<Checkbox id="relaxed" label="Relaxed?" align="right" />}
          />
        </List>
      </Card>
    </Grid>
  ));
