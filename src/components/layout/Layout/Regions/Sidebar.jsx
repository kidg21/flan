/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import { screen } from "Variables";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";


const FlexWrapper = styled.div`
  border-right: 1px solid ${(props) => {
    return props.theme.palette.grey5;
  }};
  transition: all 0.25s ease-in-out;
  @media ${screen.small} {
    position: fixed;
    z-index: 500;
    height: 100%;
    width: 100%;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
  }
  @media ${screen.medium} {
    display: flex;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
  width: 100%;
  }

  @media ${screen.large} {
    display: flex;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
  width: 20%;
  }
  @media ${screen.xlarge} {
    display: flex;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
  width: 20%;
  }
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ leftContent }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;


function Sidebar({
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

Sidebar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  height: PropTypes.node,
  visible: PropTypes.bool,
  right: PropTypes.node,
  width: PropTypes.node,

};

Sidebar.defaultProps = {
  children: null,
  visible: null,
  id: null,
  right: null,
  height: null,
  width: null,

};


export default Sidebar;
