import React from "react";
import ReactDOM from 'react-dom';
import { storiesOf } from "@storybook/react";
import Order from "./Order";






storiesOf("Atoms|Order", module)
.add("Order", () => (<Order/>));
