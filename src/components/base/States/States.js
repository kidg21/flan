/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from "react";

const InteractiveContext = React.createContext(false);
const DisabledContext = React.createContext(false);
const DisableTransitionContext = React.createContext(false);
const PaddingContext = React.createContext(0);
const PointerEventsContext = React.createContext("");

export {
  InteractiveContext,
  DisabledContext,
  DisableTransitionContext,
  PaddingContext,
  PointerEventsContext,
};
