import React from "react";
import { storiesOf } from "@storybook/react";
import Trial, { StandardCheckbox } from "./Checkbox";

const cbox_1 = {
  id: "cbox_1",
  label: "First Checkbox"
};
const cbox_2 = {
  id: "cbox_2",
  label: "Second Checkbox"
};
const cbox_3 = {
  id: "cbox_3",
  label:
    "Little trees and bushes grow however makes them happy. Just let your mind wander and enjoy. This should make you happy. You don't have to spend all your time thinking about what you're doing, you just let it happen. Let's make a happy little mountain now. If I paint something, I don't want to have to explain what it is."
};

storiesOf("Atoms|Checkbox", module)
  .addDecorator(story => <div style={{ padding: "1rem" }}>{story()}</div>)
  .add("Standard Checkbox", () => (
    <React.Fragment>
      <StandardCheckbox {...cbox_1} />
      <StandardCheckbox {...cbox_2} />
      <StandardCheckbox {...cbox_3} />
    </React.Fragment>
  ))
  .add("Custom Checkbox", () => <Trial />);
