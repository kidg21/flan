import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import Item from "./ListItem";

const StyledList = styled.section`
display: inline-block;
font-family: Muli;

`

const defaultProps = {
    itemProps: {nameProp:"default item name"}
};


function SimpleList(props) {
    return (
        <div>
        <StyledList withBorder>
            <Item {...props.itemProps}/>
            <Item {...props.itemProps}/>
            <Item {...props.itemProps}/>
        </StyledList>
        </div>
    )
}

SimpleList.defaultProps = defaultProps;
export default SimpleList;