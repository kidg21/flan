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
import Card from "layout/Card";
import TextInput from "atoms/TextInput";
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
        <TextInput />
        <List>
          <ListItem title="List Item" />
          <ListItem
            title="List Item"
            description="This is the description"
            action={<Command />}
          />
          <ListItem title="This is a very long and informative title that might even need multiple lines to display it all" />
          <ListItem
            title="List Item"
            onClick={() => {}}
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
          />
          <ListItem
            title="List Item"
            action={<Checkbox id="enable" label="Enable" />}
          />
          <ListItem
            title="This is a very long and informative title that might even need multiple lines to display it all"
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
          />
        </List>
      </Card>
    )),
  );
