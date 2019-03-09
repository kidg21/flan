import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import Command from "../Command/Command";

const StyledList = styled.section`
display: inline-block;
font-family: Muli;

`

const iconProps = {
    nameProp: ["fal", "times"],
    colorProp: "yellowgreen",
};

const labelProp = {
    contentProp: "grrrr"
};

const commandProps = {
    iconProps: iconProps,
    labelProp: labelProp
};



function IconList() {
    return (
        <div>
        <StyledList>
            <Command {...commandProps}/>
            <Command {...commandProps}/>
            <Command {...commandProps}/>
        </StyledList>
        </div>
    )
}


export default IconList;