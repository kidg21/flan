import React from "react";
import { storiesOf } from "@storybook/react";
import LoginCard from "./LoginCard";
import Card from "./Card";

storiesOf("Templates/Cards", module)
  .add("Info Card", () => <Card />)
  .add("Login Card", () => <LoginCard />);
