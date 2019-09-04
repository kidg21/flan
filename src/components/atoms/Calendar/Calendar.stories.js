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
        label={text("label", "Input Label", "Calendar")}
        helpText={text("help text", "This help text has been passed through a prop!", "Calendar")}
        errorText={text("error text", "", "Calendar")}
        disabled={boolean("disabled", false, "Calendar")}
      />
    );
  })
  .add("Date", () => {
    return (
      <Grid>
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
          errorText="Don't sweat it...we can fix this!"
        />
      </Grid>
    );
  });
