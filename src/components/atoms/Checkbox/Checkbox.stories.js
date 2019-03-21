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
import Checkbox from "./Checkbox";

const cbox_1 = {
  id: "cbox_1",
  label: "Box 1"
};
const cbox_2 = {
  id: "cbox_2",
  label: "Box 2"
};
const cbox_3 = {
  id: "cbox_3",
  label: "Box 3"
};
const cbox_4 = {
  id: "cbox_4",
  label: "Box 4"
};
const cbox_long = {
  id: "cbox_long",
  label:
    "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself."
};

storiesOf("Atoms|Checkbox", module)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Standard Checkbox", () => <Checkbox {...cbox_1} />)
  .add("Check Block (Responsive)", () => (
    <InputBlock>
      <InputBlockLabel label="Check Block (Responsive)" />
      <InputGroup>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
        <Checkbox {...cbox_long} />
      </InputGroup>
    </InputBlock>
  ))
  .add("Check Block (2 columns)", () => (
    <InputBlock>
      <InputBlockLabel label="Check Block (2 columns)" />
      <InputGroup_2_Colunn>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </InputGroup_2_Colunn>
    </InputBlock>
  ))
  .add("Check Block (3 columns)", () => (
    <InputBlock>
      <InputBlockLabel label="Check Block (3 columns)" />
      <InputGroup_3_Colunn>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </InputGroup_3_Colunn>
    </InputBlock>
  ))
  .add("Check Block (mixed columns)", () => (
    <InputBlock>
      <InputBlockLabel label="Check Block (mixed columns)" />
      <InputGroup_3_Colunn>
        <Checkbox {...cbox_1} />
        <Checkbox {...cbox_2} />
        <Checkbox {...cbox_3} />
        <Checkbox {...cbox_4} />
      </InputGroup_3_Colunn>
      <InputGroup_1_Colunn>
        <Checkbox {...cbox_long} />
      </InputGroup_1_Colunn>
    </InputBlock>
  ));
