/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import DialogBox from "elements/DialogBox";


storiesOf("Elements|Dialog Box", module)
  .addDecorator(Padding)
  .add(
    "Documentation",
    () => {
      return (
        <DialogBox
          title="Default Dialog"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttons={[
            {
              id: "Negative",
              label: "Negative",
            },
            {
              id: "Affirmative",
              label: "Affirmative",
            },
          ]}
        />
      );
    },
  )

  .add("Success", () => {
    return (
      <DialogBox
        title="Successful Dialog"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttons={[
          {
            id: "Negative",
            label: "Negative",
            variant: "success",
          },
          {
            id: "Affirmative",
            label: "Affirmative",
            variant: "success",
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
            id: "Negative",
            label: "Negative",
            variant: "alert",
          },
          {
            id: "Affirmative",
            label: "Affirmative",
            variant: "alert",
          },
        ]}
      />
    );
  });
