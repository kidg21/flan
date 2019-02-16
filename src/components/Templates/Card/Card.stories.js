import React from "react";
import { storiesOf } from "@storybook/react";
import LoginCard from "./LoginCard";
import Card from "./Card";

storiesOf('Components/Card', module)
    .add('Card', () => <Card></Card>)
  .add('Login Card', () => <LoginCard></LoginCard>);