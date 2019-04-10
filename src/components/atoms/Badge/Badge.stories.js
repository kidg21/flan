import React from "react"
import { storiesOf } from "@storybook/react"
import Badge, { IconBadge } from "./Badge"
import AlertBadge from "./AlertBadge"

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
      <AlertBadge info /> <AlertBadge warning /> <AlertBadge success />{" "}
      <AlertBadge error />{" "}
    </div>
  ))
  .add("Trial Badge", () => <IconBadge />)
