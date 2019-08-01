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
import Search from "blocks/Search";
import Command from "atoms/Command";
import SelectMenu from "atoms/SelectMenu";
import Checkbox from "atoms/Checkbox";
import Switch from "atoms/Switch";
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
        <List title="A List Can Have A Title">
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

  .add("List Item Colors", () => (
    <Card>
      <List>
        <ListItem label="List Item -- default" />
        <ListItem label="List Item -- info" type="info" />
        <ListItem label="List Item -- success" type="success" />
        <ListItem label="List Item -- warning" type="warning" />
        <ListItem label="List Item -- alert" type="alert" />
        <ListItem label="List Item -- inverse" type="inverse" />
      </List>
    </Card>
  ))

  .add("Interactive List (hover / click)", () => (
    <Card>
      <List>
        <ListItem
          label="List Item"
          description="This is the description"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          type="info"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          type="success"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          type="warning"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          type="alert"
          onClick={() => []}
        />
        <ListItem
          label="List Item"
          description="This is the description"
          type="inverse"
          onClick={() => []}
        />
      </List>
    </Card>
  ))

  .add("Checkbox List", () => (
    <Card>
      <List>
        <ListItem
          label="Do Something?"
          action={<Checkbox id="Checkbox 1" label="No" align="right" />}
        />
        <ListItem
          label="Something Else?"
          action={<Checkbox id="Checkbox 2" label="Yes" align="right" />}
        />
        <ListItem
          label="How About This?"
          action={<Checkbox id="Checkbox 3" label="Nah..." align="right" />}
        />
        <ListItem
          label="Any Ideas?"
          action={
            <Checkbox id="Checkbox 4" label="Gimme A Sec..." align="right" />
          }
        />
        <ListItem
          label="Flan?"
          action={<Checkbox id="Checkbox 5" label="BINGO!!!" align="right" />}
        />
      </List>
    </Card>
  ))

  .add("Toggle List", () => (
    <Card>
      <List>
        <ListItem label="Do Something?" action={<Switch />} />
        <ListItem label="Something Else?" action={<Switch />} />
        <ListItem label="How About This?" action={<Switch />} />
        <ListItem label="Any Ideas?" action={<Switch />} />
        <ListItem label="Flan?" action={<Switch />} />
      </List>
    </Card>
  ))

  .add("Select Menu List", () => (
    <Card>
      <List>
        <ListItem
          label="Do Something?"
          action={
            <SelectMenu
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          }
          actionWidth="25%"
        />
        <ListItem
          label="Something Else?"
          action={
            <SelectMenu
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          }
          actionWidth="25%"
        />
        <ListItem
          label="How About This?"
          action={
            <SelectMenu
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          }
          actionWidth="25%"
        />
        <ListItem
          label="Any Ideas?"
          action={
            <SelectMenu
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          }
          actionWidth="25%"
        />
        <ListItem
          label="Flan?"
          action={
            <SelectMenu
              options={[
                { value: "yes", label: "Yes" },
                { value: "yes", label: "I said YES!" },
              ]}
            />
          }
          actionWidth="25%"
        />
      </List>
    </Card>
  ))

  .add("Mixed List", () => (
    <Grid col_1>
      <Card>
        <Search placeholder="Search by Address or Location" />
      </Card>
      <Card>
        <List title="You Can Give The List A Title">
          <ListItem label="List Item" />
          <ListItem
            label="List Item"
            description="This is the description"
            action={<Command />}
          />
          <ListItem
            label="List Item"
            // description="This is the description"
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
            action={
              <SelectMenu
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                  { value: "pistachio", label: "Pistachio" },
                  {
                    value: "mint chocolate chip",
                    label: "Mint Chocolate Chip",
                  },
                  { value: "cookie dough", label: "Cookie Dough" },
                ]}
              />
            }
            actionWidth="25%"
          />
          <ListItem
            label="This is a very long and informative title that might even need multiple lines to display it all"
            description="This is the description"
            onClick={() => []}
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
