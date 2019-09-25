/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, optionsKnob as options } from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Form from "layout/Form";
import Calendar from "atoms/Calendar";
import CalendarNotes from "./Calendar.md";

storiesOf("Atoms|Calendar", module)
  .addParameters({
    info: {
      text: "Calendar info goes here...",
    },
    notes: {
      markdown: CalendarNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <Form>
          <Calendar
            type="date"
            label="Date Input Label"
            helpText="This help text has been passed through a prop!"
          />
          <Calendar
            type="time"
            label="Time Input Label"
            helpText="This help text has been passed through a prop!"
          />
          <Calendar
            type="datetime"
            label="Date-Time Input Label"
            helpText="This help text has been passed through a prop!"
          />
        </Form>
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <Calendar
        type={options(
          "type",
          {
            date: "date",
            time: "time",
            datetime: "datetime",
          },
          "date",
          { display: "select" },
          "Calendar",
        )}
        label={text("label", "Input Label", "Calendar")}
        helpText={text("help text", "This help text has been passed through a prop!", "Calendar")}
        error={
          boolean("error", false, "Calendar") && text("error text", "Error message...", "Calendar")
        }
        disabled={boolean("disabled", false, "Calendar")}
      />
    );
  })
  .add("Date", () => {
    return (
      <Form>
        <Calendar
          type="date"
          label="Date Input Label"
          helpText="This help text has been passed through a prop!"
        />
        <Calendar
          type="date"
          label="Date Input Label (required)"
          helpText="This help text has been passed through a prop!"
          isRequired
        />
        <Calendar
          type="date"
          label="Date Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="date"
          label="Date Input Label"
          helpText="This help text has been passed through a prop!"
          error="Don't sweat it...we can fix this!"
        />
      </Form>
    );
  })
  .add("Time", () => {
    return (
      <Form>
        <Calendar
          type="time"
          label="Time Input Label"
          helpText="This help text has been passed through a prop!"
        />
        <Calendar
          type="time"
          label="Time Input Label (required)"
          helpText="This help text has been passed through a prop!"
          isRequired
        />
        <Calendar
          type="time"
          label="Time Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="time"
          label="Time Input Label"
          helpText="This help text has been passed through a prop!"
          state="error"
          error="Don't sweat it...we can fix this!"
        />
      </Form>
    );
  })
  .add("Date / Time", () => {
    return (
      <Form>
        <Calendar
          type="datetime"
          label="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label (required)"
          helpText="This help text has been passed through a prop!"
          isRequired
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
          state="error"
          error="Don't sweat it...we can fix this!"
        />
      </Form>
    );
  });
