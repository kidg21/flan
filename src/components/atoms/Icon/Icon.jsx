import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors, shadows } from "Variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledIcon = styled(FontAwesomeIcon)`
  display: ${props => (props.stacked ? "flex" : "")};
  justify-content: ${props => (props.stacked ? "center" : "")};
  align-items: ${props => (props.stacked ? "center" : "")};
  border: ${props => (props.border ? "2px solid" : "")};
  border-color: ${props => (props.border ? colors.grey_20 : "")};
  border-radius: ${props => (props.border ? "5px" : "")};
  cursor: pointer;
  grid-area: icon;
  /* cursor: ${props => (props.anchor ? "pointer" : "")}; */
  color: ${props =>
    props.success
      ? colors.success
      : props.warning
      ? colors.warning
      : props.alert
      ? colors.alert
      : props.anchor
      ? colors.anchor
      : props.inverse
      ? colors.white
      : "inherit"};
`

function Icon({
  id,
  icon,
  size,
  fixedWidth,
  inverse,
  rotation,
  flip,
  spin,
  pulse,
  border,
  pull,
  anchor,
  success,
  warning,
  alert,
  mask,
  // stacked,
  children,
  style,
  className
}) {
  return (
    <StyledIcon
      id={id}
      icon={icon}
      anchor={anchor}
      success={success}
      warning={warning}
      alert={alert}
      // stacked={stacked}
      size={size}
      fixedWidth={fixedWidth}
      inverse={inverse}
      rotation={rotation}
      flip={flip}
      spin={spin}
      pulse={pulse}
      border={border}
      pull={pull}
      style={style}
    >
      {children}
    </StyledIcon>
  )
}

Icon.propTypes = {
  id: PropTypes.string,
  /** Icons can come in multiple weight types.  The default weight is 'fas' (solid)
   * To use the weight type, simply enter the name of the icon as the prop value. (ex. icon='coffee')
   * If you want to use an icon of a different weight type, enter the prop value as an arroy of ["weight", "name"]. (ex. icon=["fal", "plus-circle"] uses the 'light' version of the icon instead of the default 'solid' version)
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Icons inherit the 'font-size' of the parent container and are relatively sized.
   * Options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'
   */
  size: PropTypes.string,
  /** Used to set one or more icons to the same fixed width.
   * Good for vertically aligning a series of icons
   */
  fixedWidth: PropTypes.bool,
  /** Turns icon 'white'. Good for use on colored backgrounds */
  inverse: PropTypes.bool,
  /** Options: '90', '180', '270' */
  rotation: PropTypes.number,
  /** Options: 'horizontal', 'vertical', 'both' */
  flip: PropTypes.string,
  /** Smooth rotation */
  spin: PropTypes.bool,
  /** Rotation with eight (8) steps */
  pulse: PropTypes.bool,
  // stacked: PropTypes.bool,
  /** Options: 'left', 'right' */
  pull: PropTypes.string,
  border: PropTypes.bool,
  // mask: PropTypes.array,
  anchor: PropTypes.string,
  success: PropTypes.string,
  warning: PropTypes.string,
  alert: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string
}

export default Icon
