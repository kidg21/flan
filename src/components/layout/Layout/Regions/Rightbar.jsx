/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import { screen } from "Variables";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";


const FlexWrapper = styled.div`
  border-left: 1px solid ${(props) => {
    return props.theme.palette.grey5;
  }};
  transition: all 0.25s ease-in-out;
  right: 0;
  @media ${screen.small} {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 500;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(100%)";
  }};
  }
  @media ${screen.medium} {
    display: flex;
    width: 100%;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(100%)";
  }};
  }
  @media ${screen.large} {
    display: flex;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(100%)";
  }};
  width: 20%;
}
  @media ${screen.xlarge} {
    display: flex;
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(100%)";
  }};
    width: 20%;
  }
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ rightcontent }";
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
