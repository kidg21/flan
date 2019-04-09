import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";

storiesOf("Blocks|Banner", module).add("Default", () => <Banner title={"This is a notification telling you stuff."} />);
