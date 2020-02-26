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
            id="date"
            type="date"
            label="Date Input Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <Calendar
            id="time"
            type="time"
            label="Time Input Label"
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <Calendar
            id="datetime"
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
        id="knobs"
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
          id="dateLabel"
          type="date"
          label="Date Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <Calendar
          id="dateRequired"
          type="date"
          label="Date Input Label (required)"
          helpText="Hang in there, buddy, I'm here to help!"
          isRequired
        />
        <Calendar
          id="dateDisabled"
          type="date"
          label="Date Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          disabled
        />
        <Calendar
          id="dateError"
          type="date"
          label="Date Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          error="Don't sweat it...we can fix this!"
        />
        <Calendar
          id="dateWarning"
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
          id="timeLabel"
          type="time"
          label="Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <Calendar
          id="timeRequired"
          type="time"
          label="Time Input Label (required)"
          helpText="Hang in there, buddy, I'm here to help!"
          isRequired
        />
        <Calendar
          id="timeDisabled"
          type="time"
          label="Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          disabled
        />
        <Calendar
          id="timeError"
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
          id="dateTimeLabel"
          type="datetime"
          label="Date-Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
        />
        <Calendar
          id="dateTimeRequired"
          type="datetime"
          label="Date-Time Input Label (required)"
          helpText="Hang in there, buddy, I'm here to help!"
          isRequired
        />
        <Calendar
          id="dateTimeDisabled"
          type="datetime"
          label="Date-Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          disabled
        />
        <Calendar
          id="dateTimeError"
          type="datetime"
          label="Date-Time Input Label"
          helpText="Hang in there, buddy, I'm here to help!"
          state="error"
          error="Don't sweat it...we can fix this!"
        />
      </Form>
    );
  });
