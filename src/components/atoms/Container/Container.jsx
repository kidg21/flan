/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: block;
  padding: ${(props) => {
    return props.setPadding || "";
  }};
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
`;

const BoxContainer = styled.div`
  overflow-y: auto;
  overflow-x: auto;
  max-height: ${(props) => {
    return props.maxHeight || "";
  }};
  padding: 0;
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
  border: 1px solid
    ${(props) => {
    return props.border || props.theme.palette.neutral40;
  }};
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track:horizontal {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
}
  ::-webkit-scrollbar-thumb:horizontal{
    background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
  border-radius: 20px;
}
`;

const paddingHash = {
  "0": "0",
  "2x": "2em",
  "3x": "3em",
};

const Container = React.forwardRef(({
  id, height, width, maxHeight, padding, border, children,
}, ref) => {
  const setPadding = padding ? paddingHash[padding.toLowerCase()] : "1em";
  return (
    <Wrapper setPadding={setPadding} height={height} width={width}>
      <BoxContainer id={id} height={height ? "100%" : ""} maxHeight={maxHeight} border={border} ref={ref}>
        {children}
      </BoxContainer>
    </Wrapper>
  );
});

Container.propTypes = {
  border: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  maxHeight: PropTypes.string,
  padding: PropTypes.oneOf(["0", "2x", "3x"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Container.defaultProps = {
  border: null,
  children: null,
  height: null,
  id: null,
  maxHeight: null,
  padding: null,
  width: null,
};

export default Container;
