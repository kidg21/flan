/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";


const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 0.25s ease-in-out;
  background: ${(props) => {
    return props.theme.background.app;
  }};
  width: ${(props) => {
    return props.weight || "100%";
  }};
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

  id,
}) {
  return (
    <FlexWrapper
      id={id}
    >
      {children}
    </FlexWrapper>
  );
}

LayoutWrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

LayoutWrapper.defaultProps = {
  children: null,
  id: null,

};


export default LayoutWrapper;
