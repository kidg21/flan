/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { DisabledContext, PointerEventsContext } from "States";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import { Label } from "base/Typography";
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
  border: ${(props) => {
    // darken opacity of border to show for lighter colors (esp. white)
    return props.hasBorder ? `1px solid rgba(0,0,0,0.3)` : `0px solid ${props.theme.palette.inverse}`;
  }};
  cursor: pointer;
  pointer-events: ${(props) => {
    return props.mouseEvents;
  }};
  border-radius: ${(props) => {
    return props.borderRadius;
  }};
  background-color: ${(props) => {
    return props.theme.swatches[props.color] || "";
  }};
  &:hover {
    ${Darken};
  };
  &:focus {
    outline: none;
  }
`;

const ImageContainer = styled.a`
  display: grid;
  grid-gap: 0.75rem;
  justify-items: center;
  cursor: pointer;
  pointer-events: ${(props) => {
    return props.disabled ? "none" : props.mouseEvents;
  }};
   ${(props) => {
    return props.disabled
      && css`
      cursor: ${() => { return props.disabled ? "not-allowed" : "pointer"; }};
      user-select: none;
      opacity: 0.5;
     `;
  }}
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
        outline: ${() => { return `2px solid ${props.theme.palette.success60}`; }};
     `;
  }}
  }
`;

const IconSelected = styled(Icon)`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(props) => {
    return props.theme.palette.success80;
  }};
  stroke: ${(props) => {
    return props.theme.palette.success20;
  }};
  stroke-width: 20;
`;

function ColorSwatch({
  color, hasBorder, isSelected, onClick, square,
}) {
  const pointerEvents = useContext(PointerEventsContext);

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
      hasBorder={hasBorder}
      borderRadius={borderRadius}
      color={color}
      height={height}
      mouseEvents={pointerEvents}
      onClick={onClick}
      width={width}
    >
      {isSelected ? <Icon icon="check" /> : null}
    </Swatch>
  );
}

ColorSwatch.propTypes = {
  /** color name, see theme.swatches */
  color: PropTypes.string,
  /** to outline swatch, making lighter color easier to see */
  hasBorder: PropTypes.bool,
  /** selected swatch */
  isSelected: PropTypes.bool,
  /** onClick callback function */
  onClick: PropTypes.func,
  /** square shaped swatch */
  square: PropTypes.bool,
};
ColorSwatch.defaultProps = {
  color: null,
  hasBorder: false,
  isSelected: false,
  onClick: null,
  square: false,
};

function ImageSwatch({
  alt, disabled, isSelected, label, onClick, src, width,
}) {
  const isAncestorDisabled = useContext(DisabledContext);
  const pointerEvents = useContext(PointerEventsContext);
  const isDisabled = typeof disabled === "boolean" ? disabled : isAncestorDisabled;

  return (
    <ImageContainer
      disabled={isDisabled}
      mouseEvents={pointerEvents}
      onClick={onClick}
    >
      <ImageWrapper
        isSelected={isSelected}
      >
        {isSelected ? (
          <IconSelected
            icon="check"
            size="4xl"
          />
        ) : null}
        <Image
          src={src}
          alt={alt}
          width={width}
        />
      </ImageWrapper>
      {label ? (
        <Label text={label} />
      ) : null}
    </ImageContainer>
  );
}

ImageSwatch.propTypes = {
  alt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
ImageSwatch.defaultProps = {
  disabled: false,
  isSelected: false,
  label: null,
  onClick: null,
  src: "",
  width: null,
};

function Picker({
  children, className, columns, id, label,
}) {
  const uId = useId(id);
  return (
    <InputContainer
      className={className}
      columns="1"
      id={uId}
    >
      {label ? (
        <Label text={label} />
      ) : null}
      <Grid columns={columns}>
        {children}
      </Grid>
    </InputContainer>
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
