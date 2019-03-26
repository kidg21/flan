import React from "react";
import { storiesOf } from "@storybook/react";
import CardHeader from "./CardHeader"
import NavCard from "./NavCard";




storiesOf("Blocks|Card", module)
.add("Header", () => <CardHeader title="Card Header"/>)
.add("Nav Card", () => <NavCard title="Navigation Card" />);