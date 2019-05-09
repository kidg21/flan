import React from "react"
import { storiesOf } from "@storybook/react"
import { Padding } from "helpers/Display"
import Grid from "helpers/Grid"
import { withInfo } from "@storybook/addon-info"
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs"
import { colors } from "Variables"
import Button from "atoms/Button"
import ButtonNotes from "./Button.md"

// Button
storiesOf("Atoms|Button", module)
  .addParameters({
    info: {
      text:
        "A control that executes your custom code in response to user interactions.  When you tap a button, or select a button that has focus, the button performs any actions attached to it. You communicate the purpose of a button using a text label, an image, or both. The appearance of buttons is configurable, so you can tint buttons or format titles to match the design of your app. You can add buttons to your interface programmatically or using Interface Builder. -- 'developer.apple.com'"
    },
    notes: {
      markdown: ButtonNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", withInfo()(() => <Button />))
  .add("Standard Button", () => <Button buttonLabel="Standard Button" />)
  .add("Primary Button", () => (
    <Button buttonLabel="Primary Button" buttonPrimary={true} />
  ))
  .add("Secondary Button", () => (
    <Button buttonLabel="Secondary Button" buttonSecondary={true} />
  ))
  .add("Icon Button", () => (
    <Button buttonLabel="Icon Button" icon={["fas", "user"]} />
  ))
  .add("Round Button", () => (
    <Button buttonLabel="Round Button" isRound={true} />
  ))
  .add("Floating Button", () => (
    <Button buttonLabel="Floating Button" isFloating={true} />
  ))
  .add("Disabled Button", () => (
    <Button buttonLabel="Disabled Button" isDisabled={true} />
  ))
  .add("The Button Family", () => (
    <>
      <Grid>
        <Button label="Standard Button" />
        <Button label="Standard Secondary" isSecondary={true} />
        <Button label="Standard Solid" isSolid={true} />
        <Button label="Secondary Solid" isSolid={true} isSecondary={true} />
        <Button label="Standard Round" isRound={true} />
        <Button label="Secondary Round" isRound={true} isSecondary={true} />
        <Button label="Icon Button" icon={["fas", "user"]} />
        <Button label="Floating Button" isFloating={true} />
        <Button label="Disabled Button" isDisabled={true} />
      </Grid>
      <br />
      <Grid alignLeft={true}>
        <Button label="Left-Aligned" />
      </Grid>
      <br />
      <Grid alignCenter={true}>
        <Button label="Center-Aligned" />
      </Grid>
      <br />
      <Grid alignRight={true}>
        <Button label="Right-Aligned" />
      </Grid>
      <br />
      <Grid col_2>
        <Button label="Two Column" />
        <Button label="Button Grid" />
      </Grid>
      <br />
      <Grid col_3>
        <Button label="Three Column" />
        <Button label="Button" />
        <Button label="Grid" />
      </Grid>
      <br />
      <Grid col_4>
        <Button label="Four" />
        <Button label="Column" />
        <Button label="Button" />
        <Button label="Grid" />
      </Grid>
      <br />
      <Grid col_5>
        <Button label="Five" />
        <Button label="Column" />
        <Button icon="plus" label="Hit Me!" isSecondary={true} />
        <Button label="Button" />
        <Button label="Grid" />
      </Grid>
    </>
  ))
