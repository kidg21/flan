import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";
import AlertBadge from "./AlertBadge";

// const props = {
//     nameProp: ["far", "angle-down"],
//     colorProp: "red",
// };

// Colors
storiesOf("Atoms|Badge", module)
  .add("Badge", () => (
    <div>
      <Badge grey={true} message="25" />
      <Badge orange={true} message="GR" />
      <Badge red={true} message="LD" />
      <Badge blue={true} message="2" />
      <Badge green={true} message="18" />
    </div>
  ))
  .add("Icon Badge", () => (
    <div>
      {" "}
      <AlertBadge info={true} /> <AlertBadge warning={true} />{" "}
      <AlertBadge success={true} /> <AlertBadge error={true} />
    </div>
  ));
