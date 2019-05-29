import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import PopCard from "./PopCard";

storiesOf("Elements|Popup Card", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Popup", () => (
    <PopCard title="Popup Card" message="lets see if this does anything" />
  ));
