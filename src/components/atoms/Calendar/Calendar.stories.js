/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Form from "layout/Form";
import Calendar from "atoms/Calendar";


storiesOf("Atoms|Calendar", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return (
        <Form>
          <Calendar
            type="date"
            label="Date Input Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <Calendar
            type="time"
            label="Time Input Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <Calendar
            type="datetime"
            label="Date-Time Input Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
        </Form>
      );
    })
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
        helpText={text(
          "help text",
          "Hang in there, buddy, I'm here to help!",
          "Calendar",
        )}
        error={text("error", null, "Calendar")}
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
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <Calendar
          type="date"
          label="Date Input Label (required)"
          helpText="Hang in there, buddy, I'm here to help!"
          isRequired
        />
        <Calendar
          type="date"
          label="Date Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          disabled
        />
        <Calendar
          type="date"
          label="Date Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          error="Don't sweat it...we can fix this!"
        />
        <Calendar
          type="date"
          label="Date Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          warning="WARNING!"
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
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <Calendar
          type="time"
          label="Time Input Label (required)"
          helpText="Hang in there, buddy, I'm here to help!"
          isRequired
        />
        <Calendar
          type="time"
          label="Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          disabled
        />
        <Calendar
          type="time"
          label="Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
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
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label (required)"
          helpText="Hang in there, buddy, I'm here to help!"
          isRequired
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          disabled
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          state="error"
          error="Don't sweat it...we can fix this!"
        />
      </Form>
    );
  });
