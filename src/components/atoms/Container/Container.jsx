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
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  max-height: ${(props) => {
    return props.maxHeight || "";
  }};
  max-width: ${(props) => {
    return props.maxWidth || "";
  }};
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
  padding: ${(props) => {
    return props.padding || "";
  }};
  border: ${(props) => {
    return props.hasBorder ? "1px solid" : "";
  }};
  border-color: ${(props) => {
    return props.theme.palette.neutral40;
  }};
  border-radius: ${(props) => {
    return props.borderRadius || props.theme.borders.radiusMin;
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
    return props.theme.palette.neutral80;
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
    return props.theme.palette.neutral80;
  }};
  border-radius: 20px;
}
`;

const paddingHash = {
  "0": "0",
  "1x": "1rem",
  "2x": "2rem",
  "3x": "3rem",
};

const boxPaddingHash = {
  "0": "0",
  "1x": "0.5rem",
  "2x": "1rem",
  "3x": "1.5rem",
};

const Container = React.forwardRef(({
  borderRadius,
  boxPadding,
  children,
  className,
  hasBorder,
  height,
  id,
  maxHeight,
  maxWidth,
  onClick,
  padding,
  visible,
  width,
}, ref) => {
  const setPadding = padding ? paddingHash[padding.toLowerCase()] : "0";
  const borderPadding = boxPadding ? boxPaddingHash[boxPadding.toLowerCase()] : "0";
  return (
    <Wrapper
      className={className}
      height={height}
      setPadding={setPadding}
      visible={visible}
      width={width}
    >
      <BoxContainer
        borderRadius={borderRadius}
        hasBorder={hasBorder}
        height={height ? "100%" : ""}
        id={id}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        onClick={onClick}
        padding={borderPadding}
        ref={ref}
      >
        {children}
      </BoxContainer>
    </Wrapper>
  );
});

Container.propTypes = {
  borderRadius: PropTypes.string,
  boxPadding: PropTypes.oneOf(["0", "1x", "2x", "3x"]),
  children: PropTypes.node,
  className: PropTypes.string,
  hasBorder: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(["0", "1x", "2x", "3x"]),
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Container.defaultProps = {
  borderRadius: null,
  boxPadding: "0",
  children: null,
  className: null,
  hasBorder: false,
  height: null,
  id: null,
  maxHeight: null,
  maxWidth: null,
  onClick: undefined,
  padding: "0",
  visible: true,
  width: null,
};

export default Container;
