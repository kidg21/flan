/* eslint-disable linebreak-style */
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import { Label } from "base/Typography";
import Card from "elements/Card";
import Grid from "layout/Grid";
import { useId } from "utils/hooks";

const InputContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text.secondary;
  }};
  width: 100%;
  padding: 1rem;
`;

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
    return props.theme.swatches[props.color];
  }};
  &:hover {
    ${Darken};
  };
  &:focus {
    outline: none;
  }
`;

const baseInputStyles = css`
  border: 10px solid green;
  border-radius: 4px;
  outline: none;
  padding: 0.5em;
`;

const ImageContainer = styled.a`
  display: grid;
  grid-gap: 0.75rem;
  justify-items: center;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
   ${(props) => {
    return props.isSelected
      && css`
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        outline: ${() => {
          return `2px solid ${props.theme.background.selected
            }`;
        }};
     `;
  }}
  }
  &:after {
   ${(props) => {
    return props.imageLabel || null;
  }}
  }
`;

const SelectedIcon = styled(Icon)`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(props) => {
    return props.theme.text.selected;
  }};
`;

function ImageSwatch({
  isSelected, label, onClick, src, width,
}) {
  return (
    <ImageContainer
      onClick={onClick}
    >
      <ImageWrapper
        isSelected={isSelected}
      >
        {isSelected ? (
          <SelectedIcon
            icon="check"
            size="4xl"
          // variant="success"
          />
        ) : null}
        <Image
          src={src}
          width={width}
        />
      </ImageWrapper>
      {label ? (
        <Label weight="bold" text={label} />
      ) : null}
    </ImageContainer>
  );
}

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
    <Swatch
      borderRadius={borderRadius}
      color={color}
      height={height}
      onClick={onClick}
      width={width}
    >
      {isSelected ? <Icon icon="check" /> : null}
    </Swatch>
  );
}

ColorSwatch.propTypes = {
  color: PropTypes.string,
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

function Picker({
  children, className, columns, id, isSelected, label,
}) {
  const uId = useId(id);
  return (
    // <Card>
    <InputContainer
      className={className}
      columns="1"
      id={uId}
    >
      {label ? (
        <Label weight="bold" text={label} />
      ) : null}
      <Grid columns={columns}>
        {children}
      </Grid>
    </InputContainer>
    // </Card>
  );
}

Picker.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};
Picker.defaultProps = {
  children: null,
  className: null,
  columns: null,
  id: null,
  label: null,
};

export { Picker as default, ColorSwatch, ImageSwatch };
