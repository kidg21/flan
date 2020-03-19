/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Icon from "atoms/Icon";
import Text from "base/Typography";
import Grid from "layout/Grid";

const Swatch = styled.button`
  width: ${(props) => {
    return props.width;
  }};
  height: ${(props) => {
    return props.height;
  }};
  justify-content: center;
  display: flex;
  vertical-align: center;
  align-items: center;
  color: ${(props) => {
    return props.theme.palette.inverse;
  }};
  border: 0px solid ${(props) => {
    return props.theme.palette.inverse;
  }};
  cursor: pointer;
  border-radius: ${(props) => {
    return props.borderRadius;
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.color];
  }};
  &:hover { 
    ${Darken};
  };
  &:focus {
    outline: none;
  }
`;

function ColorSwatch({
  color, isSelected, onClick, square,
}) {
  let borderRadius;
  const width = "1.5rem";
  const height = "1.5rem";

  if (square) {
    borderRadius = "4px";
  } else {
    borderRadius = "100%";
  }

  return (
    <React.Fragment>
      {isSelected ? (
        <Swatch
          borderRadius={borderRadius}
          color={color}
          height={height}
          onClick={onClick}
          width={width}
        >
          <Icon icon="check" />
        </Swatch>
      ) : (
          <Swatch
            borderRadius={borderRadius}
            color={color}
            height={height}
            onClick={onClick}
            width={width}
          />
        )}
    </React.Fragment>
  );
}

ColorSwatch.propTypes = {
  color: PropTypes.node,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  square: PropTypes.bool,
};
ColorSwatch.defaultProps = {
  color: null,
  isSelected: false,
  onClick: null,
  square: false,
};

function Picker({ children, columns, text }) {
  return (
    <React.Fragment>
      {text ? <Text text={text} /> : null}
      <Grid columns={columns} >
        {children}
      </Grid>
    </React.Fragment>
  );
}

Picker.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.string,
  text: PropTypes.string,
};
Picker.defaultProps = {
  children: null,
  columns: null,
  text: null,
};

export { Picker as default, ColorSwatch };
