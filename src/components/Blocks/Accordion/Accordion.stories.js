import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "blocks/Accordion";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Container from "atoms/Container";

storiesOf("Blocks|Accordion", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Documentation", () => <Accordion />)
  .add("Accordion", () =>
    React.createElement(() => {
      const [activeAccordion, setActiveAccordion] = useState("");
      return (
        <div>
          <Accordion
            header={
              <Container>
                <h4>This is my accordion header example!</h4>
              </Container>
            }
            visibility={activeAccordion === "accordion1"}
            onClick={() => {
              setActiveAccordion("accordion1");
            }}
          >
            <Container>
              <h3>This is the body of my accordion being visible</h3>
            </Container>
          </Accordion>
          <Accordion
            header={
              <Container>
                <h4>This is my accordion header example!</h4>
              </Container>
            }
            visibility={activeAccordion === "accordion2"}
            onClick={() => {
              setActiveAccordion("accordion2");
            }}
            children={
              <Container>
                <h3>This is the body of my accordion being visible</h3>
              </Container>
            }
          />
        </div>
      );
    })
  );
