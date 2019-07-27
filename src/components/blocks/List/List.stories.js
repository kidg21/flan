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
import List, { ListItem } from "blocks/List";
import ListNotes from "./List.md";

const Title = styled.h5`
  margin: 0;
  line-height: normal;
`;

storiesOf("Blocks|List", module)
  .addParameters({
    info: {
      text:
        "The 'List' is a Flexbox-based component that is comprised of three flexible sections that evenly distribute the available space. The 'left', 'center', and 'right' props control the alignment of the content in each.",
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
          <ListItem>List Item</ListItem>
          <ListItem>List Item</ListItem>
          <ListItem>List Item</ListItem>
        </List>
      </Card>
    )),
  );
