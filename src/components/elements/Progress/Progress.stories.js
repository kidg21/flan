/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import ProgressBar, { Step } from "./Progress.jsx";

storiesOf("Elements|Progress", module)
    .addDecorator(Padding)
    .addDecorator(withInfo)
    .add("Flow", () => {
        return (
            <ProgressBar >
                <Step active text="Task" description="this is what you do" />
                <Step active text="Task" description="this is what you do" />
                <Step isSelected text="Task" description="this is what you do" />
                <Step text="Task" description="this is what you do" />
                <Step text="Task" description="this is what you do" />
            </ProgressBar>
        );
    });
