/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: ${(props) => {
    return props.visible ? "block" : "none";
  }};
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
<<<<<<< HEAD
  border: ${(props) => {
    return props.hasBorder ? "1px solid" : "";
  }};
  border-color: ${(props) => {
    return props.theme.palette.neutral40;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
=======
  background-color: ${(props) => {
    return props.hasBackground ? props.theme.background.default : "";
  }};
  border: 1px solid
    ${(props) => {
    return props.border || props.theme.palette.neutral40;
>>>>>>> develop
  }};
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
<<<<<<< HEAD
  hasBorder, children, className, visible, height, id, maxHeight, padding, width,
}, ref) => {
  const setPadding = padding ? paddingHash[padding.toLowerCase()] : "1em";
  return (
    <Wrapper setPadding={setPadding} height={height} width={width} visible={visible} className={className}>
      <BoxContainer id={id} height={height ? "100%" : ""} maxHeight={maxHeight} hasBorder={hasBorder} ref={ref}>
=======
  border, children, className, visible, hasBackground, height, id, maxHeight, padding, width,
}, ref) => {
  const setPadding = padding ? paddingHash[padding.toLowerCase()] : "1em";
  return (
    <Wrapper
      setPadding={setPadding}
      height={height}
      width={width}
      visible={visible}
      className={className}
    >
      <BoxContainer id={id} hasBackground={hasBackground} height={height ? "100%" : ""} maxHeight={maxHeight} border={border} ref={ref}>
>>>>>>> develop
        {children}
      </BoxContainer>
    </Wrapper>
  );
});

Container.propTypes = {
<<<<<<< HEAD
  hasBorder: PropTypes.bool,
  visible: PropTypes.bool,
=======
  border: PropTypes.string,
>>>>>>> develop
  children: PropTypes.node,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  maxHeight: PropTypes.string,
  padding: PropTypes.oneOf(["0", "2x", "3x"]),
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Container.defaultProps = {
  hasBorder: false,
  visible: true,
  children: null,
  className: null,
  hasBackground: false,
  height: null,
  id: null,
  maxHeight: null,
  padding: null,
  width: null,
};

export default Container;
