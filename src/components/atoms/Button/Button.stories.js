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
        <Button buttonLabel="Standard Button" />
        <Button buttonLabel="Standard Secondary" isSecondary={true} />
        <Button buttonLabel="Standard Solid" isSolid={true} />
        <Button
          buttonLabel="Secondary Solid"
          isSolid={true}
          isSecondary={true}
        />
        <Button buttonLabel="Standard Round" isRound={true} />
        <Button
          buttonLabel="Secondary Round"
          isRound={true}
          isSecondary={true}
        />
        <Button buttonLabel="Icon Button" icon={["fas", "user"]} />
        <Button buttonLabel="Floating Button" isFloating={true} />
        <Button buttonLabel="Disabled Button" isDisabled={true} />
      </Grid>
      <br />
      <Grid alignLeft={true}>
        <Button buttonLabel="Left-Aligned" />
      </Grid>
      <br />
      <Grid alignCenter={true}>
        <Button buttonLabel="Center-Aligned" />
      </Grid>
      <br />
      <Grid alignRight={true}>
        <Button buttonLabel="Right-Aligned" />
      </Grid>
      <br />
      <Grid col_2>
        <Button buttonLabel="Two Column" />
        <Button buttonLabel="Button Grid" />
      </Grid>
      <br />
      <Grid col_3>
        <Button buttonLabel="Three Column" />
        <Button buttonLabel="Button" />
        <Button buttonLabel="Grid" />
      </Grid>
      <br />
      <Grid col_4>
        <Button buttonLabel="Four" />
        <Button buttonLabel="Column" />
        <Button buttonLabel="Button" />
        <Button buttonLabel="Grid" />
      </Grid>
      <br />
      <Grid col_5>
        <Button buttonLabel="Five" />
        <Button buttonLabel="Column" />
        <Button icon="plus" buttonLabel="Hit Me!" isSecondary={true} />
        <Button buttonLabel="Button" />
        <Button buttonLabel="Grid" />
      </Grid>
    </>
  ))
