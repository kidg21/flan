/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import Panel from "layout/Panel";
import { screen } from "Variables";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";


const FlexWrapper = styled.div`
  display: flex;
  right: ${(props) => {
        return props.right;
    }};

  height: ${(props) => {
        return props.height || "100%";
    }};
  transition: all 1s ease-in-out;
  border: .25px solid ${(props) => {
        return props.theme.palette.grey5;
    }};
  right: 0;
  @media ${screen.small} {
    transform: ${(props) => {
        return props.visible ? "translateX(0%)" : "translateX(-100%)";
    }};
    width: 300%;
  }

  @media ${screen.xlarge} {
    transform: ${(props) => {
        return props.visible ? "translateX(0%)" : "translateX(-100%)";
    }};
    width: 20%;
  }
  background-color: lightcyan;
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Rightbar Wrapper }";
      color: ${(props) => {
        return props.theme.text.primary;
    }};
    }
  }
`;


function Rightbar({
    children,
    right,
    visible,
    height,
    width,
    id,
}) {
    return (
        <FlexWrapper
            width={width}
            visible={visible}
            right={right}
            height={height}
            id={id}
        >
            {children}
        </FlexWrapper>
    );
}

Rightbar.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    height: PropTypes.node,
    visible: PropTypes.bool,
    right: PropTypes.node,
    width: PropTypes.node,

};

Rightbar.defaultProps = {
    children: null,
    visible: null,
    id: null,
    right: null,
    height: null,
    width: null,

};


export default Rightbar;
