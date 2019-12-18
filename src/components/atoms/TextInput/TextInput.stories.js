/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Panel, { PanelSection } from "layout/Panel";
import Form, { Section } from "layout/Form";
import TextInput from "atoms/TextInput";

const TextInputNotes = markdown.require("./TextInput.md");

storiesOf("Atoms|Text Input", module)
  .addParameters({
    info: {
      text:
        "Text Inputs allow users to enter text into a UI. They typically appear in forms and dialogs",
    },
    notes: {
      markdown: TextInputNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <TextInput
          id="111"
          label="Text Input ( Standard )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
      );
    }),
  )
  .add("Skeleton", () => {
    return <TextInput />;
  })
  .add("Knobs", () => {
    return (
      <TextInput
        type={options(
          "type",
          {
            "Date": "date",
            "Email": "email",
            "Hidden": "hidden",
            "Month": "month",
            "Number": "number",
            "Password": "password",
            "Search": "search",
            "Telephone": "tel",
            "Text (default)": "text",
            "Textarea": "textarea",
            "Time": "time",
            "URL": "url",
          },
          "text",
          { display: "select" },
          "Text Input",
        )}
        label={text("label", "Text Input Label", "Text Input")}
        isRequired={boolean("required", false, "Text Input")}
        placeholder={text(
          "placeholder text",
          "I am just keeping things warm",
          "Text Input",
        )}
        helpText={text("help text", "Have you been helped yet?", "Text Input")}
        error={
          boolean("error", false, "Text Input") &&
          text("error text", "Error message...", "Text Input")
        }
        disabled={boolean("disabled", false, "Text Input")}
      />
    );
  });
// Text Input ( The Text Input Family )
storiesOf("Atoms|Text Input", module)
  .add("Types", () => {
    return (
      <Form>
        <TextInput
          pattern="[A-Za-z]{3}"
          label="Text Input ( text )"
          placeholder="I am just keeping things warm"
          helpText="Can contain only three letters (no numbers or special characters"
        />
        <TextInput
          type="textarea"
          label="Text Input ( textarea )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="number"
          label="Text Input ( number )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="search"
          label="Text Input ( search )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          autofocus
          type="password"
          pattern=".{6,}"
          title="Six or more characters"
          label="Text Input ( password )"
          placeholder="I am just keeping things warm"
          helpText="Must contain 6 or more characters"
        />
        <TextInput
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          label="Text Input ( email )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          label="Text Input ( tel )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="url"
          pattern="https?://.+"
          label="Text Input ( url )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="color"
          label="Text Input ( color )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="date"
          label="Text Input ( date )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="time"
          label="Text Input ( time )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="datetime-local"
          label="Text Input ( datetime-local )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="month"
          label="Text Input ( month )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="week"
          label="Text Input ( week )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <TextInput
          type="hidden"
          label="Text Input ( hidden )"
          placeholder="I am just keeping things warm"
          helpText="Hang in there, buddy, I'm here to help!"
        />
      </Form>
    );
  })
  .add("The Text Input Family", () => {
    return (
      <Panel>
        <PanelSection body>
          <Form title="The Text Input Family">
            <Section>
              <TextInput
                label="Text Input ( error boolean )"
                placeholder="I am just keeping things warm"
                helpText="Hang in there, buddy, I'm here to help!"
                error
              />
              <TextInput
                label="Text Input ( error string )"
                placeholder="I am just keeping things warm"
                helpText="Hang in there, buddy, I'm here to help!"
                error="Error Message"
              />
              <TextInput
                label="Text Input ( Standard )"
                placeholder="I am just keeping things warm"
                helpText="Hang in there, buddy, I'm here to help!"
              />
              <TextInput
                type="number"
                label="Text Input ( Number )"
                helpText="Hang in there, buddy, I'm here to help!"
              />
              <TextInput
                type="textarea"
                label="Text Input ( Text Area )"
                helpText="Hang in there, buddy, I'm here to help!"
              />
              <TextInput
                label="Text Input ( Required )"
                placeholder="I am just keeping things warm"
                helpText="Hang in there, buddy, I'm here to help!"
                isRequired
              />
              <TextInput
                label="Text Input ( Disabled )"
                placeholder="I am just keeping things warm"
                helpText="Hang in there, buddy, I'm here to help!"
                disabled
              />
              <TextInput
                label="Text Input ( Error )"
                placeholder="I am just keeping things warm"
                helpText="Hang in there, buddy, I'm here to help!"
                error="Don't sweat it...we can fix this!"
              />
            </Section>
          </Form>
        </PanelSection>
      </Panel>
    );
  });
