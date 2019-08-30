/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Radio, { RadioGroup } from "atoms/Radio";
import RadioNotes from "./Radio.md";

const radio1 = {
  id: "radio-1",
  name: "radio-group",
  value: "1",
  label: "Radio 1",
};
const radio2 = {
  id: "radio-2",
  name: "radio-group",
  value: "2",
  label: "Radio 2",
};
const radio3 = {
  id: "radio-3",
  name: "radio-group",
  value: "3",
  label: "Radio 3",
};
const radio4 = {
  id: "radio-4",
  name: "radio-group",
  value: "4",
  label: "Radio 4",
};
const radioLong = {
  id: "radio-5",
  name: "radio-group",
  value: "5",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
};

storiesOf("Atoms|Radio", module)
  .addParameters({
    info: {
      text: "Radio info goes here...",
    },
    notes: {
      markdown: RadioNotes,
    },
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Radio {...radio1} />;
    }),
  )
  .add("Skeleton", () => {
    return <Radio />;
  })
  .add("Knobs", () => {
    return (
      <RadioGroup
        columns={options(
          "columns",
          {
            "wrap ( default )": "default",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
          },
          "default",
          { display: "radio" },
          "Radio Group",
        )}
      >
        <Radio
          {...radio1}
          type={options(
            "radio 1 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Radio 1",
          )}
          disabled={boolean("1-disabled", false, "Radio 1")}
        />
        <Radio
          {...radio2}
          type={options(
            "radio 2 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Radio 2",
          )}
          disabled={boolean("2-disabled", false, "Radio 2")}
        />
        <Radio
          {...radio3}
          type={options(
            "radio 3 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Radio 3",
          )}
          disabled={boolean("3-disabled", false, "Radio 3")}
        />
        <Radio
          {...radio4}
          type={options(
            "radio 4 (state)",
            {
              default: "default",
              error: "error",
            },
            "default",
            { display: "inline-radio" },
            "Radio 4",
          )}
          disabled={boolean("4-disabled", false, "Radio 4")}
        />
      </RadioGroup>
    );
  })
  .add("Radio (States)", () => {
    return (
      <RadioGroup>
        <Radio id="default" value="default" label="Default" name="states" />
        <Radio id="selected" value="selected" label="Selected" name="states" checked />
        <Radio id="error" value="error" label="Error" name="states" type="error" />
        <Radio id="disabled" value="disabled" label="Disabled" name="states" disabled />
      </RadioGroup>
    );
  })
  .add("Radio Group (Responsive)", () => {
    return (
      <RadioGroup>
        <Radio {...radio1} />
        <Radio {...radio2} />
        <Radio {...radio3} />
        <Radio {...radio4} />
        <Radio {...radioLong} />
      </RadioGroup>
    );
  })
  .add("Radio Group (2 columns)", () => {
    return (
      <RadioGroup columns="2">
        <Radio {...radio1} />
        <Radio {...radio2} />
        <Radio {...radio3} />
        <Radio {...radio4} />
        <Radio {...radioLong} />
      </RadioGroup>
    );
  })
  .add("Radio Group (3 columns)", () => {
    return (
      <RadioGroup columns="3">
        <Radio {...radio1} />
        <Radio {...radio2} />
        <Radio {...radio3} />
        <Radio {...radio4} />
      </RadioGroup>
    );
  })
  .add("Radio Group (mixed columns)", () => {
    return (
      <>
        <RadioGroup columns="2">
          <Radio {...radio1} />
          <Radio {...radio2} />
          <Radio {...radio3} />
          <Radio {...radio4} />
        </RadioGroup>
        <RadioGroup>
          <Radio {...radioLong} />
        </RadioGroup>
      </>
    );
  });
