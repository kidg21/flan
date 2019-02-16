import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";

storiesOf('Components/Banner', module)
  .add('Default', () => <Banner></Banner>);