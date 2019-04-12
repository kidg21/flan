import React from "react";
import { storiesOf } from "@storybook/react";
import SelectCard from "./SelectCard";
// import PopCard from "./PopCard";
import NavCard from "./NavCard";
import PopCard from "./PopCard";
import LayerCard from "./LayerCard";
import AccordionCard from "./AccordionCard";

storiesOf("Blocks|Card", module)
  .add("Navigation Card", () => <NavCard title="Navigation Card" />)
  .add("Pop Card", () => (
    <PopCard
      title="Pop Out Alert"
      message="Something happened and this is the message about it. Hey how you doing? Good? That's nice. Okay Bye"
      action="Do it!"
    />
  ))
  .add("Layer Card", () => <LayerCard title="Layer Card" />)
  .add("Accordion Card", () => <AccordionCard title="Info Card" />);
