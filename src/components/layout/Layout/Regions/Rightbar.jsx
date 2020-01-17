/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import Panel from "layout/Panel";
import { screen } from "Variables";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";


const FlexWrapper = styled.div`
  position: fixed;
  z-index: 500;
  border: 1px  ${(props) => {
    return props.theme.palette.grey6;
  }};
  transition: all 1s ease-in-out;
  right: 0;
  height: 100%;
  @media ${screen.small} {
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
    width: 90%;
  }
  @media ${screen.medium} {
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
    width: 20%;
  }
  @media ${screen.large} {
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
  }};
  width: 20%;
}
  @media ${screen.xlarge} {
    transform: ${(props) => {
    return props.visible ? "translateX(0%)" : "translateX(-100%)";
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
