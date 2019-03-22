import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelBody } from "../../layout/Panel/Panel";
import Form, { InputBlock } from "../../layout/Form/Form";
import Input from "./Input";

storiesOf("Atoms|Input", module).add("Input States", () => (
  <Panel>
    <PanelBody>
      <Form>
        <InputBlock>
          <Input
            label="Input ( Standard )"
            helpText="This help text has been passed through a prop!"
          />
          <Input
            label="Input ( Standard )"
            required={true}
            helpText="This help text has been passed through a prop!"
          />
          <Input label="Input ( Disabled )" disabled={true} />
          <Input
            label="Input ( Invalid )"
            required={true}
            error={true}
            errorText="This error text has been passed through a prop!"
          />
        </InputBlock>
      </Form>
    </PanelBody>
  </Panel>
));
