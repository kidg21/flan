/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Form, { FormSection } from "layout/Form";
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
            id="default"
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
            id="options"
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
    },
  )
  .add("Knobs", () => {
    return (
      <DataRange
        id="knobs"
        label={text("input label", "Data Label", "Data Range")}
        isRequired={boolean("required", false, "Data Range")}
        min={{
          label: text("min label", "Min", "Data Range"),
          options: boolean("select (min)", false, "Data Range") && options,
        }}
        select={{
          label: text("operator label", "Operator", "Data Range"),
          options: boolean("operator", false, "Data Range") && selectorOptions,
        }}
        max={{
          label: text("max label", "Max", "Data Range"),
          options: boolean("select (max)", false, "Data Range") && options,
        }}
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
        <FormSection title="Input Range (default)">
          <DataRange
            id="input"
            label="Input Range"
            min={{
              label: "Min",
            }}
            max={{
              label: "Max",
            }}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <DataRange
            id="inputError"
            label="Input Range (error)"
            min={{
              label: "Min",
            }}
            max={{
              label: "Max",
            }}
            helpText="Hang in there, buddy, I'm here to help!"
            error
          />
          <DataRange
            id="inputError"
            label="Input Range (error)"
            labelMin="Min"
            labelMax="Max"
            helpText="Hang in there, buddy, I'm here to help!"
            error="Out of range!"
          />
          <DataRange
            id="inputError"
            label="Input Range (error)"
            labelMin="Min"
            labelMax="Max"
            helpText="Hang in there, buddy, I'm here to help!"
            warning="Warning text"
          />
          <DataRange
            id="inputDisabled"
            label="Input Range (disabled)"
            min={{
              label: "Min",
            }}
            max={{
              label: "Max",
            }}
            helpText="Hang in there, buddy, I'm here to help!"
            disabled
          />
        </FormSection>
        <FormSection title="Select Range">
          <DataRange
            id="select"
            label="Select Range"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
            helpText="Hang in there, buddy, I'm here to help!"
          />
          <DataRange
            id="selectOperation"
            label="Select Range"
            min={{
              label: "Min",
              options: options,
            }}
            select={{ options: selectorOptions }}
            max={{
              label: "Max",
              options: options,
            }}
            helpText="This help text has been passed through a prop!"
          />
          <DataRange
            id="selectError"
            label="Select Range (error)"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
            helpText="Hang in there, buddy, I'm here to help!"
            error="Out of range!"
          />
          <DataRange
            id="selectDisabled"
            label="Select Range (disabled)"
            min={{
              label: "Min",
              options: options,
            }}
            max={{
              label: "Max",
              options: options,
            }}
            helpText="Hang in there, buddy, I'm here to help!"
            disabled
          />
        </FormSection>
      </Form>
    );
  })
  .add("Skeleton", () => {
    return <DataRange id="skeleton" />;
  });
