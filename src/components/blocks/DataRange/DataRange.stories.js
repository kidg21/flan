/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Form, { Section } from "layout/Form";
import DataRange from "blocks/DataRange";



const options = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const selectorOptions = [
  { value: "0", label: "=" },
  { value: "1", label: "!=" },
  { value: "2", label: ">" },
  { value: "3", label: "<" },
  { value: "4", label: ">=" },
  { value: "5", label: "<=" },
];

storiesOf("Blocks|Data Range", module)
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    () => {
      return (
        <Form columns="1">
          <DataRange
            label="Data Range (default)"
            helpText="Hang in there, buddy, I'm here to help!"
            min={{
              label: "Min",
            }}
            max={{
              label: "Max",
            }}
          />
          <DataRange
            label="Data Range (with options)"
            helpText="Hang in there, buddy, I'm here to help!"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
          />
        </Form>
      );
    })
  .add("Knobs", () => {
    return (
      <DataRange
        label={text("label", "Data Label", "Data Range")}
        labelMin={text("min label", "Min", "Data Range")}
        optionsMin={object(
          "options (min)",
          [{ value: "0", label: "0" }],
          "Data Range",
        )}
        labelMax={text("max label", "Max", "Data Range")}
        optionsMax={object(
          "options (max)",
          [{ value: "0", label: "0" }],
          "Data Range",
        )}
        isRequired={boolean("required", false, "Data Range")}
        helpText={text("help text", "Help text goes here...", "Data Range")}
        error={
          boolean("error", false, "Data Range") &&
          text("error text", "Error message...", "Data Range")
        }
        disabled={boolean("disabled", false, "Data Range")}
      />
    );
  })
  .add("States", () => {
    return (
      <Form title="States" columns="1">
        <Section title="Input Range (default)">
          <DataRange
            label="Input Range"
            labelMin="Min"
            labelMax="Max"
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <DataRange
            label="Input Range (error)"
            labelMin="Min"
            labelMax="Max"
            helpText="Hang in there, buddy, I'm here to help!"
            error="Out of range!"
          />
          <DataRange
            label="Input Range (disabled)"
            labelMin="Min"
            labelMax="Max"
            helpText="Hang in there, buddy, I'm here to help!"
            disabled
          />
        </Section>
        <Section title="Select Range">
          <DataRange
            label="Select Range"
            labelMin="Min"
            optionsMin={options}
            labelMax="Max"
            optionsMax={options}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <DataRange
            label="Select Range"
            labelMin="Min"
            select={{ options: selectorOptions }}
            optionsMin={options}
            labelMax="Max"
            optionsMax={options}
            helpText="This help text has been passed through a prop!"
          />
          <DataRange
            label="Select Range (error)"
            labelMin="Min"
            optionsMin={options}
            labelMax="Max"
            optionsMax={options}
            helpText="Hang in there, buddy, I'm here to help!"
            error="Out of range!"
          />
          <DataRange
            label="Select Range (disabled)"
            labelMin="Min"
            optionsMin={options}
            labelMax="Max"
            optionsMax={options}
            helpText="Hang in there, buddy, I'm here to help!"
            disabled
          />
        </Section>
      </Form>
    );
  })
  .add("Skeleton", () => {
    return <DataRange />;
  });
