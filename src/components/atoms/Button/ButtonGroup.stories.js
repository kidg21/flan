/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Button, { ButtonGroup } from "atoms/Button";

export default {
  title: "Blocks/Button Group/Tests",
  component: ButtonGroup,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs"],
  decorators: [Padding, withKnobs],
};

export const Knobs = () => {
  return (
    <ButtonGroup
      id={text("id", "Button Group", "Button Group")}
      columns={options(
        "# of columns",
        {
          auto: "",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
        },
        "",
        { display: "select" },
        "Button Group",
      )}
    >
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
    </ButtonGroup>
  );
};
Knobs.story = {
  parameters: {
    parameters: {
      viewMode: "story",
    },
  },
};
