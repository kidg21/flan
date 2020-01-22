/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import ProgressBar, { Step } from "./ProgressBar.jsx";

storiesOf("Elements|Progress", module)
    .addDecorator(Padding)
    .addDecorator(withInfo)
    .add("Flow", () => {
        return (<ProgressBar >
            <Step active icon="draw" text="draw" />
            <Step active icon="report" text="report" />
            <Step active icon="user" text="user" />
            <Step icon="user" text="user" />
            <Step icon="user" text="user" />
            <Step icon="user" text="user" />
            <Step icon="user" text="user" />
        </ProgressBar>);
    })
    .add("Simple", () => {
        return (<ProgressBar >
            <Step active />
            <Step active />
            <Step active />
            <Step />
            <Step />
            <Step />
            <Step />
        </ProgressBar>);
    });

