import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Text, { Title } from "base/Typography";

const StepItem = styled.li`
align-items: center;
align-self: center;
vertical-align: center;
font-family: Nunito;
justify-content: center;
padding-bottom: 0.5rem;
display: flex;
border-bottom: 2px solid ${(props) => { return props.success ? props.theme.palette.borderLight : props.isSelected ? props.theme.palette.action : props.theme.palette.borderLight; }};
align-items: baseline;
width: 100%;
color: ${(props) => { return props.success ? props.theme.text.secondary : props.isSelected ? props.theme.palette.action : props.theme.text.secondary; }};
&:before {
    content: counter(step);
    counter-increment: step;
    height: 1.5rem;
    display: flex;
    padding: 0.5em;
    align-items: center;
    vertical-align: bottom;
    justify-content: center;
    margin-right: 1rem;
    width: 1.5rem;
    color: ${(props) => { return props.success ? props.theme.palette.inverse : props.isSelected ? props.theme.palette.inverse : ""; }};
    background: ${(props) => { return props.success ? props.theme.palette.success : props.isSelected ? props.theme.palette.action : ""; }};
    border: 1px solid ${(props) => { return props.success ? props.theme.palette.success : props.isSelected ? props.theme.palette.action : props.theme.text.secondary; }};
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


function Step({
    id, success, text, description, isSelected,
}) {
    return (
        <StepItem id={id} success={success} isSelected={isSelected}>
            <ItemContainer>
                <Title text={text} />
                {description ? (<Text text={description} />
                ) : null}
            </ItemContainer>
        </StepItem >

    );
}


function ProgressBar({
    id, children,
}) {
    return (
        <Container id={id}>
            {children}
        </Container>
    );
}

Step.propTypes = {
    id: PropTypes.string,
    success: PropTypes.bool,
    description: PropTypes.string,
    text: PropTypes.string,
    isSelected: PropTypes.bool,
};

ProgressBar.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
};

Step.defaultProps = {
    id: null,
    success: false,
    description: null,
    text: null,
    isSelected: false,
};

ProgressBar.defaultProps = {
    id: null,
    children: null,
};

export { ProgressBar as default, Step };
