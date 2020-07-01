/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "helpers/Display"
import Divider from "atoms/Divider"

storiesOf("Utilities|Divider", module)
  .addDecorator(Padding)
  .add("Default", () => <Divider />)
