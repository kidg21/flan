/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Padding } from "helpers/Display";
import NewProgressBar, { NewStep } from "./NewProgress.jsx";

storiesOf("Elements|Progress", module)
    .addDecorator(Padding)
    .addDecorator(withInfo)
    .add("Flow", () => {
        return (
            <NewProgressBar >
                <NewStep active text="Task" description="this is what you do" />
                <NewStep active text="Task" description="this is what you do" />
                <NewStep isSelected text="Task" description="this is what you do" />
                <NewStep text="Task" description="this is what you do" />
                <NewStep text="Task" description="this is what you do" />
            </NewProgressBar>
        );
    });
