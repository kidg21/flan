/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from "react";

const InteractiveContext = React.createContext(false);
const DisabledContext = React.createContext(false);
const DisableTransitionContext = React.createContext(false);

export { InteractiveContext, DisabledContext, DisableTransitionContext };
