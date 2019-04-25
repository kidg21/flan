import React from "react";
import { storiesOf } from "@storybook/react";
import { Padding } from "helpers/Display";
import Button, { StyledButton as NewButton } from "atoms/Button";

// Buttons
storiesOf("Atoms|Button", module)
  .addDecorator(Padding)
  .add("Standard Button", () => <Button buttonLabel="Standard Button" />)
  .add("Primary Button", () => (
    <Button buttonLabel="Primary Button" isPrimary={true} />
  ))
  .add("Icon Button", () => (
    <Button buttonLabel="Icon Button" icon={["fas", "user"]} />
  ))
  .add("Square Button", () => (
    <Button buttonLabel="Squared Button" isSquare={true} />
  ))
  .add("Floating Button", () => (
    <Button buttonLabel="Floating Button" isFloating={true} />
  ))
  .add("Disabled Button", () => (
    <Button buttonLabel="Disabled Button" isDisabled={true} />
  ));
