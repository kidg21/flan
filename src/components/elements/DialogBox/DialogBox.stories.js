/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import DialogBox from "elements/DialogBox";


storiesOf("Elements|Dialog Box", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text:
        "Dialogue Boxes are used to convey a body between the server/computer and the user. A dialogue box either has one absolute action (button) or two button options; typically an affirmative and dissenting option. If two buttons are selected then they are located on the bottom left corner as to be readily accessbile to the user. The primary button is always solid, the second is outlined. Both buttons must be the same color family. If one button is selected the button is center in the middle of the dialogue box. ",
    },
  })
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <DialogBox
          title="Dialogue Box Title"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttons={[
            {
              id: "Negative Action",
              label: "Negative Action",
            },
            {
              id: "Affirmative Action",
              label: "Affirmative Action",
            },
          ]}
        />
      );
    }),
  )

  .add("Success", () => {
    return (
      <DialogBox
        title="Successful Dialog"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttons={[
          {
            id: "Negative Action",
            label: "Negative Action",
            type: "success",
          },
          {
            id: "Affirmative Action",
            label: "Affirmative Action",
            type: "success",
          },
        ]}
      />
    );
  })
  .add("Error", () => {
    return (
      <DialogBox
        title="Error Dialog"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttons={[
          {
            id: "Negative Action",
            label: "Negative Action",
            type: "alert",
          },
          {
            id: "Affirmative Action",
            label: "Affirmative Action",
            type: "alert",
          },
        ]}
      />
    );
  });

