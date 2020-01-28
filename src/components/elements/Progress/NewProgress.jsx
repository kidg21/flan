import React, { Fragment } from "react";
import styled from "styled-components";
import Icon from "atoms/Icon";
import PropTypes from "prop-types";
import Avatar from "atoms/Avatar";
import Title, { Description } from "base/Typography";


const StepItem = styled.li`
align-items: center;
align-self: center;
vertical-align: center;
justify-content: center;
padding-bottom: 0.5rem;
display: flex;
border-bottom: 2px solid ${(props) => { return props.active ? props.theme.palette.grey4 : props.isSelected ? props.theme.palette.primary : props.theme.palette.grey4; }};
align-items: baseline;
width: 100%;
color: ${(props) => { return props.active ? props.theme.text.secondary : props.isSelected ? props.theme.palette.primary : props.theme.text.secondary; }};
&:before {
    content: counter(step);
    counter-increment: step;
    height: 1.5rem;
    display: flex;
    align-items: center;
    vertical-align: bottom;
    justify-content: center;
    margin-right: 1rem;
    width: 1.5rem;
    border: 1px solid ${(props) => { return props.active ? props.theme.text.secondary : props.isSelected ? props.theme.palette.primary : props.theme.text.secondary; }};
    border-radius: 50%;
    font-weight: 600;
}

`;


const Container = styled.ul`
display: flex;
list-style: none;
counter-reset: step;
align-items: flex-start;
width: 100%;
justify-content: space-between;
z-index: 1;

    `;


const ItemContainer = styled.div`
display: flex;
justify-content: ${(props) => { return props.line ? "space-between" : ""; }};
flex-direction: column;
width: ${(props) => { return props.line ? "100%" : ""; }};

`;


function NewStep({
    id, active, text, description, isSelected,
}) {
    return (
        <StepItem active={active} isSelected={isSelected}>
            <ItemContainer>
                <Title text={text} />
                {description ? (<Description text={description} />
                ) : null}
            </ItemContainer>
        </StepItem >

    );
}


function NewProgressBar({
    id, children,
}) {
    return (
        <Container>
            {children}
        </Container>
    );
}

NewStep.propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool,
    text: PropTypes.string,
    isSelected: PropTypes.bool,
};

NewProgressBar.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
};

NewStep.defaultProps = {
    id: null,
    active: false,
    text: null,
    isSelected: false,
};

NewProgressBar.defaultProps = {
    id: null,
    children: null,
};

export { NewProgressBar as default, NewStep };
