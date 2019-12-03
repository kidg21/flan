/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Card from "layout/Card";
import Command from "atoms/Command";
import SelectMenu from "atoms/SelectMenu";
import Radio from "atoms/Radio";
import Checkbox from "atoms/Checkbox";
import Switch from "atoms/Switch";
import Image from "atoms/Image";
import Button from "atoms/Button";
import List, { ListItem } from "blocks/List";
import ListNotes from "blocks/List/List.md";

const image = (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
    alt="This is alt text for this image"
    width="75"
  />
);

storiesOf("Blocks|List", module)
  .addParameters({
    info: {
      text:
        "A 'List' can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size. -- 'Ant Design'"
    },
    notes: {
      markdown: ListNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <List>
          <ListItem label="List Item" />
          <ListItem label="List Item" />
          <ListItem label="List Item" />
        </List>
      );
    })
  )
  .add("Knobs", () => {
    return (
      <List
        title={text("Title", "", "List")}
        interactive={boolean("Interactive", false, "List")}
      >
        <ListItem
          label={text("1 - Label", "Item 1", "Item 1")}
          description={text("1 - Description", "", "Item 1")}
          type={select(
            "1 - Type",
            {
              default: null,
              info: "info",
              success: "success",
              warning: "warning",
              alert: "alert"
            },
            null,
            "Item 1"
          )}
          active={boolean("1 - Active", false, "Item 1")}
          disabled={boolean("1 - Disabled", false, "Item 1")}
        />
        <ListItem
          label={text("2 - Label", "Item 2", "Item 2")}
          description={text("2 - Description", "", "Item 2")}
          type={select(
            "2 - Type",
            {
              default: null,
              info: "info",
              success: "success",
              warning: "warning",
              alert: "alert"
            },
            null,
            "Item 2"
          )}
          active={boolean("2 - Active", false, "Item 2")}
          disabled={boolean("2 - Disabled", false, "Item 2")}
        />
        <ListItem
          label={text("3 - Label", "Item 3", "Item 3")}
          description={text("3 - Description", "", "Item 3")}
          type={select(
            "3 - Type",
            {
              default: null,
              info: "info",
              success: "success",
              warning: "warning",
              alert: "alert"
            },
            null,
            "Item 3"
          )}
          active={boolean("3 - Active", false, "Item 3")}
          disabled={boolean("3 - Disabled", false, "Item 3")}
        />
      </List>
    );
  })

  .add("Interactive (hover)", () => {
    return (
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
        <ListItem label="List Item" description="This is the description" />
        <ListItem label="List Item" description="This is the description" />
        <ListItem label="List Item" description="This is the description" />
        <ListItem label="List Item" description="This is the description" />
        <ListItem label="List Item" description="This is the description" />
      </List>
    );
  })

  .add("Avatar", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item (not interactive)"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item (disabled)"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          avatar="LB"
        />
      </List>
    );
  })

  .add("Icon", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item"
          description="This is the description"
          icon="user"
        />
        <ListItem
          label="List Item "
          description="This is the description"
          icon="user"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          icon="circle"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          icon="circle_solid"
        />
        <ListItem
          label="List Item"
          description="This is the description"
          icon="settings"
        />
      </List>
    );
  })

  .add("Checkbox List", () => {
    return (
      <List interactive>
        <ListItem
          label="List Item (not interactive)"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item (disabled)"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
        <ListItem
          label="List Item"
          description="This is the description"
          checkbox
        />
      </List>
    );
  });

// .add("Toggle List", () => {
//   return (
//     <List>
//       <ListItem label="Do Something?" secondaryAction={<Switch />} />
//       <ListItem label="Something Else?" secondaryAction={<Switch />} />
//       <ListItem label="How About This?" secondaryAction={<Switch />} />
//       <ListItem label="Any Ideas?" secondaryAction={<Switch />} />
//       <ListItem label="Flan?" secondaryAction={<Switch />} />
//     </List>
//   );
// })

// .add("Action List", () => {
//   return (
//     <List interactive>
//       <ListItem
//         label="List Item (not interactive)"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//       <ListItem
//         label="List Item (disabled)"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//       <ListItem
//         label="List Item"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//       <ListItem
//         label="List Item"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//       <ListItem
//         label="List Item"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//       <ListItem
//         label="List Item"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//       <ListItem
//         label="List Item"
//         description="This is the description"
//         secondaryAction={<Button label="Action" />}
//       />
//     </List>
//   );
// })

// .add("Image List", () => {
//   return (
//     <List title="Image List (interactive)" interactive>
//       <ListItem
//         label="This Kitty?"
//         description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say..."
//       >
//         {image}
//       </ListItem>
//       <ListItem
//         label="Or This One?"
//         description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say..."
//       >
//         {image}
//       </ListItem>
//       <ListItem
//         label="Awwwww..."
//         description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say..."
//       >
//         {image}
//       </ListItem>
//     </List>
//   );
// })

// .add("Select Menu List", () => {
//   return (
//     <List>
//       <ListItem
//         label="Category1"
//         secondaryAction={
//           <SelectMenu
//             width="40%"
//             options={[
//               { value: "yes", label: "Yes" },
//               { value: "no", label: "No" },
//             ]}
//           />
//         }
//       />
//       <ListItem
//         label="Category2"
//         secondaryAction={
//           <SelectMenu
//             width="40%"
//             options={[
//               { value: "yes", label: "Yes" },
//               { value: "no", label: "No" },
//             ]}
//           />
//         }
//       />
//       <ListItem
//         label="Category3"
//         secondaryAction={
//           <SelectMenu
//             width="40%"
//             options={[
//               { value: "yes", label: "Yes" },
//               { value: "no", label: "No" },
//             ]}
//           />
//         }
//       />
//       <ListItem
//         label="Category4"
//         secondaryAction={
//           <SelectMenu
//             width="40%"
//             options={[
//               { value: "yes", label: "Yes" },
//               { value: "no", label: "No" },
//             ]}
//           />
//         }
//       />
//       <ListItem
//         label="Category5"
//         secondaryAction={
//           <SelectMenu
//             width="40%"
//             options={[
//               { value: "yes", label: "Yes" },
//               { value: "yes", label: "I said YES!" },
//             ]}
//           />
//         }
//       />
//     </List>
//   );
// })

// .add("Mixed List", () => {
//   return (
//     <List title="You Can Give The List A Title" interactive>
//       <ListItem label="List Item" />
//       <ListItem
//         label="List Item"
//         description="This is the description"
//         secondaryAction={<Command command="edit" />}
//       />
//       <ListItem
//         label="List Item"
//         description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
//         secondaryAction={
//           <SelectMenu
//             width="25%"
//             options={[
//               { value: "chocolate", label: "Chocolate" },
//               { value: "strawberry", label: "Strawberry" },
//               { value: "vanilla", label: "Vanilla" },
//               { value: "pistachio", label: "Pistachio" },
//               {
//                 value: "mint chocolate chip",
//                 label: "Mint Chocolate Chip",
//               },
//               { value: "cookie dough", label: "Cookie Dough" },
//             ]}
//           />
//         }
//       />
//       <ListItem
//         label="This is a very long and informative title that might even need multiple lines to display it all"
//         description="This is the description"
//       />
//       <ListItem
//         label="List Item"
//         description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
//         secondaryAction={<Command command="settings" />}
//       />
//       <ListItem
//         label="List Item"
//         secondaryAction={
//           <Checkbox id="enable" label="Enable" align="right" />
//         }
//       />
//       <ListItem
//         label="This is a very long and informative title that might even need multiple lines to display it all"
//         description="This description is much longer but that's okay because it will just keep on wrapping to the next line until you run out of things to say in support of the long title that you just typed above this one."
//         secondaryAction={
//           <Checkbox id="relaxed" label="Relaxed?" align="right" />
//         }
//       />
//     </List>
//   );
// });
