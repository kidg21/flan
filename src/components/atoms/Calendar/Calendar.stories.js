/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Calendar from "atoms/Calendar";

storiesOf("Atoms|Calendar", module)
  .addDecorator(withInfo)
  .addDecorator(Padding)
  .add("Date", () => {
    return (
      <Calendar
        type="date"
        label="Date Input Label"
        helpText="This help text has been passed through a prop!"
      />
    );
  })
  .add("Time", () => {
    return (
      <Calendar
        type="time"
        label="Time Input Label"
        helpText="This help text has been passed through a prop!"
      />
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
          label="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
          disabled
        />
        <Calendar
          type="datetime"
          label="Date-Time Input Label"
          helpText="This help text has been passed through a prop!"
          state="error"
        />
      </Grid>
    );
  });
