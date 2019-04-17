import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors } from "Variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// const stackedIcons = {
//   display: "flex",
//   alignItems: "center",
//   width: "min-content",
//   position: "absolute"
// }

const StyledIcon = styled(FontAwesomeIcon)`
  position: ${props => (props.stacked ? "absolute" : "")};
  display: ${props => (props.stacked ? "flex" : "")};
  justify-content: ${props => (props.stacked ? "center" : "")};
  align-items: ${props => (props.stacked ? "center" : "")};
  cursor: ${props => (props.anchor ? "pointer" : "")};
  color: ${props =>
    props.success
      ? colors.success
      : props.warning
      ? colors.warning
      : props.alert
      ? colors.alert
      : props.anchor
      ? colors.anchor
      : "inherit"};
`

function Icon({
  icon,
  nameProp,
  // color,
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
  style,
  mask,
  stacked,
  children,
  ...props
}) {
  return (
    <StyledIcon
      icon={icon}
      anchor={anchor}
      success={success}
      warning={warning}
      alert={alert}
      stacked={stacked}
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

Icon.defaultProps = {
  // fixedWidth: true,
  icon: ["fas", "circle"]
  // nameProp: ["fas", "circle"]
  // success: colors.success,
  // alert: colors.alert,
  // size: "5x",
  // inverse: true,
  // rotation: 90,
  // flip: "both",
  // spin: true,
  // pulse: true
  // border: true,
  // stacked: true
  // pull: "right"
  // mask: ["fas", "circle"]
}

Icon.propTypes = {
  icon: PropTypes.string,
  nameProp: PropTypes.array,
  // nameProp: icon,
  // color: PropTypes.string,
  colorProp: PropTypes.string,
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
  stacked: PropTypes.bool,
  border: PropTypes.bool,
  /** Options: 'left', 'right' */
  pull: PropTypes.string,
  // mask: PropTypes.array,
  anchor: PropTypes.string,
  success: PropTypes.string,
  warning: PropTypes.warning,
  alert: PropTypes.string,
  style: PropTypes.string
}

export default Icon
