import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

// Colors
storiesOf("Elements|Icon", module)
.add("Icons", () => <Icon className='fa fa-ellipsis-v'> </Icon>);