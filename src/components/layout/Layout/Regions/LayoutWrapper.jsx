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
  height: 100%;
  width: 100%;
  @media ${screen.small} {
    z-index: 0;
  }
  transition: all 1s ease-in-out;
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
  width,

  id,
}) {
  return (
    <FlexWrapper
      width={width}
      id={id}
    >
      {children}
    </FlexWrapper>
  );
}

LayoutWrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  width: PropTypes.node,

};

LayoutWrapper.defaultProps = {
  children: null,
  id: null,
  width: null,

};


export default LayoutWrapper;
