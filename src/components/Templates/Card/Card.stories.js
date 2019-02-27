import React from "react";
import { storiesOf } from "@storybook/react";
import LoginCard from "./LoginCard";

storiesOf("Templates|Cards", module)
  .add("Login Card", () => <LoginCard />);
