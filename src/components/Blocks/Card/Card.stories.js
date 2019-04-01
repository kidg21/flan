import React from "react";
import { storiesOf } from "@storybook/react";
import CardHeader from "./CardHeader"
import NavCard from "./NavCard";
import SelectCard from "./SelectCard";




storiesOf("Blocks|Card", module)
.add("Header", () => <CardHeader title="Card Header"/>)
.add("Select Card", () => <SelectCard title="Selection Card"/>)
.add("Nav Card", () => <NavCard title="Navigation Card" />);