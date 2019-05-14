import React from "react";
import { storiesOf } from "@storybook/react";
import LoginCard from "./LoginCard";
import PopCard from "blocks/Card/PopCard";

storiesOf("Templates|Cards", module)
  .add("Login Card", () => <LoginCard />)
  .add("Pop out Card", () => (
    <PopCard
      title="Pop Out Alert"
      message="Something happened and this is the message about it. Hey how you doing? Good? That's nice. Okay Bye"
      action="Do it!"
    />
  ));
