import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { I18nContextProvider } from "../../../locales/index";

import TrialApp from "./TrialFilled";

storiesOf("Templates|Language", module).add("Layer Panel", () => (
  <I18nContextProvider>
    <TrialApp />
  </I18nContextProvider>
));
