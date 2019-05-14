import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection } from "../Panel/Panel";
import Form, { Title, Section, SectionName, InputGroup } from "./Form";
import Checkbox from "../../atoms/Checkbox/Checkbox";

const cbox_1 = {
  id: "cbox_1",
  label: "First Checkbox"
};
const cbox_2 = {
  id: "cbox_2",
  label: "Second Checkbox"
};
const cbox_3 = {
  id: "cbox_3",
  label:
    "Little trees and bushes grow however makes them happy. Just let your mind wander and enjoy. This should make you happy. You don't have to spend all your time thinking about what you're doing, you just let it happen. Let's make a happy little mountain now. If I paint something, I don't want to have to explain what it is.  All you have to learn here is how to have fun. Now, we're going to fluff this cloud. Put it in, leave it alone. Trees get lonely too, so we'll give him a little friend."
};
const cbox_4 = {
  id: "cbox_4",
  label: "Fourth Checkbox"
};
const cbox_5 = {
  id: "cbox_5",
  label: "Fifth Checkbox"
};
const cbox_6 = {
  id: "cbox_6",
  label:
    "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.  Let's get crazy. When things happen - enjoy them. They're little gifts. Steve wants reflections, so let's give him reflections. All you need to paint is a few tools, a little instruction, and a vision in your mind. Everybody needs a friend. This is your world."
};

storiesOf("Layout|Form", module).add("Form Layout", () => (
  <Panel>
    <PanelSection body>
      <Form>
        <Title>Form Title</Title>
        <Section>
          <SectionName>Section Name</SectionName>
          <InputGroup>
            <Checkbox {...cbox_1} />
            <Checkbox {...cbox_2} />
          </InputGroup>
          <InputGroup oneColumn>
            <Checkbox {...cbox_3} />
          </InputGroup>
        </Section>
        <Section>
          <SectionName>Section Name</SectionName>
          <InputGroup>
            <Checkbox {...cbox_4} />
            <Checkbox {...cbox_5} />
          </InputGroup>
          <InputGroup oneColumn>
            <Checkbox {...cbox_6} />
          </InputGroup>
        </Section>
      </Form>
    </PanelSection>
  </Panel>
));
