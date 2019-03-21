import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "./Slider";
import styled, {css} from 'styled-components';


const Space = styled.div`
padding: 10px;
width: 50%;
`



storiesOf("Atoms|Slider", module)
.add("Slider", () => <Space>
    <Slider/>
    </Space>);