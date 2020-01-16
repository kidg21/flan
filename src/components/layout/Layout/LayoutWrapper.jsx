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
  width: 100%;
  height: ${(props) => {
    return props.height || "100%";
  }};
  @media ${screen.small} {
    z-index: 0;
  }
  transition: all 1s ease-in-out;
  border: .25px solid ${(props) => {
    return props.theme.palette.grey5;
  }};
  background-color: azure;
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Layout Wrapper }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;


function LayoutWrapper({
  children,
  height,
  width,
  id,
}) {
  return (
    <FlexWrapper
      width={width}
      height={height}
      id={id}
    >
      {children}
    </FlexWrapper>
  );
}

LayoutWrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  height: PropTypes.node,
  width: PropTypes.node,

};

LayoutWrapper.defaultProps = {
  children: null,
  id: null,
  height: null,
  width: null,

};


export default LayoutWrapper;
