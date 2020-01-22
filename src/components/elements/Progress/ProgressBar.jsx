import React, { Fragment } from "react";
import styled from "styled-components";
import Icon from "atoms/Icon";
import PropTypes from "prop-types";
import Avatar from "atoms/Avatar";
import Title from "base/Typography";

const Container = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1;
    `;


const IconStep = styled.li`
    float: left;
    width: 10%;
    position: relative;
    margin-bottom: 15px;
    text-align: center;
    
    
    &:after{
        content: '';
        position: absolute;
        width:80%;
        height: 1px;
        background: ${(props) => { return props.theme.palette.grey4; }};
        top: 25px;
        left: -40%;
        z-index: -1;
      };
    
      &:first-child:after{
        content: none;
        }

        &.active {
            color: ${(props) => { return props.theme.palette.primary; }};
      
        }
      
    &.active:before {
            border-color: ${(props) => { return props.theme.palette.primary; }};
            color: ${(props) => { return props.theme.palette.white; }};
            background: ${(props) => { return props.theme.palette.primary; }};
        }
    &.active:after {
            background-color: ${(props) => { return props.theme.palette.primary; }};
        }

    `;

const Block = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const StepItem = styled.li`
float: left;
width: 10%;
position: relative;
text-align: center;

&:before{
  content:' ';
  width: 1rem;
  height: 1rem;
  background: ${(props) => { return props.theme.palette.grey4; }};
  border: 1px solid ${(props) => { return props.theme.palette.grey4; }};;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  color: ${(props) => { return props.theme.palette.secondary; }};
  };

  &:after{
    content: '';
    position: absolute;
    width:100%;
    height: 1px;
    background: ${(props) => { return props.theme.palette.grey4; }};
    top: 6px;
    left: -50%;
    z-index: -1;
  };

  &:first-child:after{
     content: none;
     }

    &.active {
            color: ${(props) => { return props.theme.palette.primary; }};
      
        }
      
    &.active:before {
            border-color: ${(props) => { return props.theme.palette.primary; }};
            color: ${(props) => { return props.theme.palette.white; }};
            background: ${(props) => { return props.theme.palette.primary; }};
        }
    &.active:after {
            background-color: ${(props) => { return props.theme.palette.primary; }};
        }

`;

const ProgressLine = styled.ul`
list-style: none;
counter-reset: step;
color: ${(props) => { return props.theme.palette.grey; }};
`;

function StepIcon({ icon, text, active }) {
    return (
        <Fragment >
            {active ? (
                <IconStep className="active"><Block><Avatar icon={icon} size="3x" type="info" /><Title text={text} /></Block></IconStep>
            ) : (
                    <IconStep ><Block><Avatar icon={icon} size="3x" /><Title text={text} /></Block></IconStep>
                )}
        </Fragment>
    );
}

function StepPlain({
    active,
}) {
    return (
        <Fragment >
            {active ? (
                <StepItem className="active" />
            ) : (
                    <StepItem />
                )}
        </Fragment>
    );
}


function Step({
    id, active, icon, text,
}) {
    let content;
    if (icon) {
        content = (
            <StepIcon icon={icon} text={text} active={active} />
        );
    } else {
        content = (
            <StepPlain active={active} />
        );
    }
    return (
        <Fragment id={id}>
            {content}
        </Fragment>
    );
}


function ProgressBar({
    id, children,
}) {
    return (
        <Container>
            <ProgressLine
                id={id}
            >
                {children}
            </ProgressLine>
        </Container>
    );
}

Step.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.node,
    text: PropTypes.node,
    active: PropTypes.bool,
};

ProgressBar.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
};

Step.defaultProps = {
    id: null,
    icon: null,
    text: null,
    active: false,
};

ProgressBar.defaultProps = {
    id: null,
    children: null,
};

export { ProgressBar as default, Step };
