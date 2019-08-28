/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, date, optionsKnob as options } from "@storybook/addon-knobs";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
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
        <Grid>
          <Calendar
            type="date"
            inputLabel="Date Input Label"
            helpText="This help text has been passed through a prop!"
          />
          <Calendar
            type="time"
            inputLabel="Time Input Label"
            helpText="This help text has been passed through a prop!"
          />
          <Calendar
            type="datetime"
            inputLabel="Date-Time Input Label"
            helpText="This help text has been passed through a prop!"
          />
        </Grid>
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
          { display: "radio" },
          "Calendar",
        )}
        inputLabel={text("input label", "Input Label", "Calendar")}
        helpText={text("help text", "This help text has been passed through a prop!", "Calendar")}
        state={options(
          "state",
          {
            valid: null,
            error: "error",
          },
          null,
          { display: "select" },
          "Calendar",
        )}
        errorText={text("error text", "Don't sweat it...we can fix this!", "Calendar")}
        disabled={boolean("disabled", false, "Calendar")}
      />
    );
  })
  .add("Date", () => {
    return (
      <Grid>
        <Calendar
          type="date"
          inputLabel="Date Input Label"
          helpText="This help text has been passed through a prop!"
        />
        <Calendar
          type="date"
          inputLabel="Date Input Label (required)"
          helpText="This help text has been passed through a prop!"
          isRequired
        />
        <Calendar
          type="date"
          inputLabel="Date Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="date"
          inputLabel="Date Input Label"
          helpText="This help text has been passed through a prop!"
          state="error"
          errorText="Don't sweat it...we can fix this!"
        />
      </Grid>
    );
  })
  .add("Time", () => {
    return (
      <Grid>
        <Calendar
          type="time"
          inputLabel="Time Input Label"
          helpText="This help text has been passed through a prop!"
        />
        <Calendar
          type="time"
          inputLabel="Time Input Label (required)"
          helpText="This help text has been passed through a prop!"
          isRequired
        />
        <Calendar
          type="time"
          inputLabel="Time Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="time"
          inputLabel="Time Input Label"
          helpText="This help text has been passed through a prop!"
          state="error"
          errorText="Don't sweat it...we can fix this!"
        />
      </Grid>
    );
  })
  .add("Date / Time", () => {
    return (
      <Grid>
        <Calendar
          type="datetime"
          inputLabel="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
        />
        <Calendar
          type="datetime"
          inputLabel="Date-Time Input Label (required)"
          helpText="This help text has been passed through a prop!"
          isRequired
        />
        <Calendar
          type="datetime"
          inputLabel="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="datetime"
          inputLabel="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
          state="error"
          errorText="Don't sweat it...we can fix this!"
        />
      </Grid>
    );
  });
