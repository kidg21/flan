import React from "react";
import { storiesOf } from "@storybook/react";
import {
  InputBlock,
  InputBlockLabel,
  InputGroup,
  InputGroup_1_Colunn,
  InputGroup_2_Colunn,
  InputGroup_3_Colunn
} from "../../layout/Form/Form";
import Radio from "./Radio";

const radio_1 = {
  id: "radio-1",
  name: "radio-group",
  value: "1",
  label: "Radio 1",
  checked: true
};
const radio_2 = {
  id: "radio-2",
  name: "radio-group",
  value: "2",
  label: "Radio 2"
};
const radio_3 = {
  id: "radio-3",
  name: "radio-group",
  value: "3",
  label: "Radio 3"
};
const radio_4 = {
  id: "radio-4",
  name: "radio-group",
  value: "4",
  label: "Radio 4"
};
const radio_long = {
  id: "radio-5",
  name: "radio-group",
  value: "5",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself."
};

storiesOf("Atoms|Radio", module)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Standard Radio", () => <Radio label="Radio 1" id="radio-1" name="radio-group" value="1" checked={true} />)
  .add("Radio Block (Responsive)", () => (
    <InputBlock>
      <InputBlockLabel label="Radio Block (Responsive)" />
      <InputGroup>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
        <Radio {...radio_long} />
      </InputGroup>
    </InputBlock>
  ))
  .add("Radio Block (2 columns)", () => (
    <InputBlock>
      <InputBlockLabel label="Radio Block (2 columns)" />
      <InputGroup_2_Colunn>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
      </InputGroup_2_Colunn>
    </InputBlock>
  ))
  .add("Radio Block (3 columns)", () => (
    <InputBlock>
      <InputBlockLabel label="Radio Block (3 columns)" />
      <InputGroup_3_Colunn>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
      </InputGroup_3_Colunn>
    </InputBlock>
  ))
  .add("Radio Block (mixed columns)", () => (
    <InputBlock>
      <InputBlockLabel label="Radio Block (mixed columns)" />
      <InputGroup_3_Colunn>
        <Radio {...radio_1} />
        <Radio {...radio_2} />
        <Radio {...radio_3} />
        <Radio {...radio_4} />
      </InputGroup_3_Colunn>
      <InputGroup_1_Colunn>
        <Radio {...radio_long} />
      </InputGroup_1_Colunn>
    </InputBlock>
  ));
