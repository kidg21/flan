/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Card from "layout/Card";
import Command from "atoms/Command";
import SelectMenu from "atoms/SelectMenu";
import Checkbox from "atoms/Checkbox";
import Switch from "atoms/Switch";
import List, { ListItem } from "blocks/List";
import ListNotes from "blocks/List/List.md";

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
    withInfo()(() => {
      return (
        <Card>
          <List>
            <ListItem label="List Item" />
            <ListItem label="List Item" />
            <ListItem label="List Item" />
          </List>
        </Card>
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <Card>
        <List
          title={text("Title", "", "List")}
          interactive={boolean("Interactive", false, "List")}
        >
          <ListItem
            label={text("1 - Label", "Item 1", "Item 1")}
            description={text("1 - Description", "", "Item 1")}
            state={select(
              "1 - State",
              {
                default: null,
                active: "active",
              },
              null,
              "Item 1",
            )}
            type={select(
              "1 - Type",
              {
                default: null,
                info: "info",
                success: "success",
                warning: "warning",
                alert: "alert",
                inverse: "inverse",
              },
              null,
              "Item 1",
            )}
            disabled={boolean("1 - Disabled", false, "Item 1")}
          />
          <ListItem
            label={text("2 - Label", "Item 2", "Item 2")}
            description={text("2 - Description", "", "Item 2")}
            state={select(
              "2 - State",
              {
                default: null,
                active: "active",
              },
              null,
              "Item 2",
            )}
            type={select(
              "2 - Type",
              {
                default: null,
                info: "info",
                success: "success",
                warning: "warning",
                alert: "alert",
                inverse: "inverse",
              },
              null,
              "Item 2",
            )}
            disabled={boolean("2 - Disabled", false, "Item 2")}
          />
          <ListItem
            label={text("3 - Label", "Item 3", "Item 3")}
            description={text("3 - Description", "", "Item 3")}
            state={select(
              "3 - State",
              {
                default: null,
                active: "active",
              },
              null,
              "Item 3",
            )}
            type={select(
              "3 - Type",
              {
                default: null,
                info: "info",
                success: "success",
                warning: "warning",
                alert: "alert",
                inverse: "inverse",
              },
              null,
              "Item 3",
            )}
            disabled={boolean("3 - Disabled", false, "Item 3")}
          />
        </List>
      </Card>
    );
  })

  .add("State / Type", () => {
    return (
      <Card>
        <List>
          <ListItem label="List Item -- default" />
          <ListItem label="List Item -- default (active)" state="active" />
          <ListItem label="List Item -- (disabled)" type="inverse" disabled />
          <ListItem label="List Item -- info" type="info" />
          <ListItem
            label="List Item -- info (active)"
            type="info"
            state="active"
          />
          <ListItem label="List Item -- success" type="success" />
          <ListItem
            label="List Item -- success (active)"
            type="success"
            state="active"
          />
          <ListItem label="List Item -- warning" type="warning" />
          <ListItem
            label="List Item -- warning (active)"
            type="warning"
            state="active"
          />
          <ListItem label="List Item -- alert" type="alert" />
          <ListItem
            label="List Item -- alert (active)"
            type="alert"
            state="active"
          />
          <ListItem label="List Item -- inverse" type="inverse" />
          <ListItem
            label="List Item -- inverse (active)"
            type="inverse"
            state="active"
          />
        </List>
      </Card>
    );
  })

  .add("Interactive (hover)", () => {
    return (
      <Card>
        <List interactive>
          <ListItem
            label="List Item (not interactive)"
            description="This is the description"
            interactive={false}
          />
          <ListItem
            label="List Item (disabled)"
            description="This is the description"
            disabled
          />
          <ListItem label="List Item" description="This is the description" />
          <ListItem
            label="List Item"
            description="This is the description"
            type="info"
          />
          <ListItem
            label="List Item"
            description="This is the description"
            type="success"
          />
          <ListItem
            label="List Item"
            description="This is the description"
            type="warning"
          />
          <ListItem
            label="List Item"
            description="This is the description"
            type="alert"
          />
          <ListItem
            label="List Item"
            description="This is the description"
            type="inverse"
          />
        </List>
      </Card>
    );
  })

  .add("Checkbox List", () => {
    return (
      <Card>
        <List>
          <ListItem label="Do Something?">
            <Checkbox id="Checkbox 1" label="No" align="right" />
          </ListItem>
          <ListItem label="Something Else?" disabled>
            <Checkbox id="Checkbox 2" label="Yes" align="right" />
          </ListItem>
          <ListItem label="How About This?">
            <Checkbox id="Checkbox 3" label="Nah..." align="right" />
          </ListItem>
          <ListItem label="Any Ideas?">
            <Checkbox id="Checkbox 4" label="Gimme A Sec..." align="right" />
          </ListItem>
          <ListItem label="Flan?">
            <Checkbox id="Checkbox 5" label="BINGO!!!" align="right" />
          </ListItem>
        </List>
      </Card>
    );
  })

  .add("Toggle List", () => {
    return (
      <Card>
        <List>
          <ListItem label="Do Something?">
            <Switch />
          </ListItem>
          <ListItem label="Something Else?" disabled>
            <Switch />
          </ListItem>
          <ListItem label="How About This?">
            <Switch />
          </ListItem>
          <ListItem label="Any Ideas?">
            <Switch />
          </ListItem>
          <ListItem label="Flan?">
            <Switch />
          </ListItem>
        </List>
      </Card>
    );
  })

  .add("Select Menu List", () => {
    return (
      <Card>
        <List>
          <ListItem label="Do Something?">
            <SelectMenu
              width="40%"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          </ListItem>
          <ListItem label="Something Else?" disabled>
            <SelectMenu
              width="40%"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          </ListItem>
          <ListItem label="How About This?">
            <SelectMenu
              width="40%"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          </ListItem>
          <ListItem label="Any Ideas?">
            <SelectMenu
              width="40%"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          </ListItem>
          <ListItem label="Flan?">
            <SelectMenu
              width="40%"
              options={[
                { value: "yes", label: "Yes" },
                { value: "yes", label: "I said YES!" },
              ]}
            />
          </ListItem>
        </List>
      </Card>
    );
  })

  .add("Mixed List", () => {
    return (
      <Card>
        <List title="You Can Give The List A Title">
          <ListItem label="List Item" />
          <ListItem label="List Item" description="This is the description">
            <Command />
          </ListItem>
          <ListItem
            label="List Item"
            // description="This is the description"
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
          >
            <SelectMenu
              width="25%"
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
          </ListItem>
          <ListItem
            label="This is a very long and informative title that might even need multiple lines to display it all"
            description="This is the description"
          />
          <ListItem
            label="List Item"
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
          >
            <Command name="settings" />
          </ListItem>
          <ListItem label="List Item">
            <Checkbox id="enable" label="Enable" align="right" />
          </ListItem>
          <ListItem
            label="This is a very long and informative title that might even need multiple lines to display it all"
            description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
          >
            <Checkbox id="relaxed" label="Relaxed?" align="right" />
          </ListItem>
        </List>
      </Card>
    );
  });