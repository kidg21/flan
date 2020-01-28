/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import NewProgressBar, { NewStep } from "./NewProgress.jsx";
import BlockProgressBar, { BlockStep } from "./BlockProgress.jsx";
import ProgressBar, { Step } from "./ProgressBar.jsx";

storiesOf("Elements|Progress", module)
    .addDecorator(Padding)
    .addDecorator(withInfo)
    .add("Flow", () => {
        return (
            <NewProgressBar >
                <NewStep active text="Draw" description="this is what you do" />
                <NewStep active text="Report" />
                <NewStep isSelected text="user" description="this is what you do" />
                <NewStep text="user" description="this is what you do" />
                <NewStep text="user" />

            </NewProgressBar>
        );
    })
    .add("Block", () => {
        return (
            <BlockProgressBar >
                <BlockStep  text="Draw" description="this is what you do" />
                <BlockStep isSelected text="Action" description="this is what you do" />
                <BlockStep text="Action" description="this is what you do" />
            </BlockProgressBar>
        );
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

