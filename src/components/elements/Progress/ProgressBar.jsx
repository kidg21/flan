import React, { Fragment } from "react";
import styled from "styled-components";
import Icon from "atoms/Icon";
import PropTypes from "prop-types";
import Avatar from "atoms/Avatar";
import Title from "base/Typography";


const StepItem = styled.li`
float: left;
text-align: center;
width: 100%;
content:' ';
height: 0.5rem;
background: ${(props) => { return props.active ? props.theme.palette.primary : ""; }};
display: block;

&:active {
    &:last-child {
    border-radius: 0 3rem 3rem 0;
}
}


`;


const Container = styled.ul`
display: flex;
border-radius: 2rem;
height: 0.65rem;
list-style: none;
counter-reset: step;
align-items: flex-end;
width: 100%;
justify-content: space-between;
border: 1px solid ${(props) => { return props.theme.palette.grey2; }};
z-index: 1;
${StepItem}:first-child {
    border-radius: 3rem 0 0 3rem;
    }};
  }
  

  ${StepItem}:last-child {
    border-radius: 0 3rem 3rem 0;
    }};
  }
    `;


function Step({
    id, active,
}) {
    return (
        <StepItem active={active} />
    );
}


function ProgressBar({
    id, children,
}) {
    return (
        <Container>
            {children}
        </Container>
    );
}

Step.propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool,
};

ProgressBar.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
};

Step.defaultProps = {
    id: null,
    active: false,
};

ProgressBar.defaultProps = {
    id: null,
    children: null,
};

export { ProgressBar as default, Step };
