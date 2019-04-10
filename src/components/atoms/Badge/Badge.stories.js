import React from "react"
import { storiesOf } from "@storybook/react"
import Badge, { IconBadge } from "./Badge"

// const props = {
//     nameProp: ["far", "angle-down"],
//     colorProp: "red",
// };

// Colors
storiesOf("Atoms|Badge", module)
  .add("Badge", () => <Badge message="25" />)
  .add("Icon Badge", () => (
    <div>
      {" "}
      <IconBadge info /> <IconBadge warning /> <IconBadge success />{" "}
      <IconBadge error />{" "}
    </div>
  ))
  .add("Trial Badge", () => <IconBadge />)
