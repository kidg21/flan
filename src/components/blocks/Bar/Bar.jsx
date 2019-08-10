import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignBar || ""};
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.75em;
`;

const Slot = styled.div`
  display: ${props => props.setDisplay || "flex"};
  flex: auto;
  flex-direction: column;
  /* justify-content: ${props => props.justifyContent || ""}; */
  align-items: ${props => props.alignItems || ""};
  text-align: ${props => props.textAlign || ""};
  padding: ${props => props.setPadding || ""};
  min-width: ${props => props.widthMin || ""};
  max-width: ${props => props.widthMax || ""};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    &:last-child {
      margin: 0;
    }
  }
`;

function Bar({
  id,
  setDisplay,
  barAlign,
  left,
  leftWidth,
  center,
  centerAlign,
  right,
  rightWidth,
  onClick,
  className,
}) {
  let alignBar;
  let alignItems;
  let textAlign;
  switch (barAlign) {
    case "center":
      alignBar = "center";
      break;
    case "bottom":
      alignBar = "flex-end";
      break;
    default:
      alignItems = "flex-start";
      break;
  }
  switch (centerAlign) {
    case "left":
      alignItems = "flex-start";
      textAlign = "left";
      break;
    case "right":
      alignItems = "flex-end";
      textAlign = "right";
      break;
    default:
      alignItems = "center";
      textAlign = "center";
      break;
  }
  return (
    <BarLayout
      id={id}
      alignBar={alignBar}
      onClick={onClick}
      className={className}
    >
      {left ? (
        <Slot
          setDisplay={setDisplay}
          widthMin={leftWidth}
          widthMax={leftWidth}
          setPadding="0 1em 0 0"
        >
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          setDisplay={setDisplay}
          alignItems={alignItems}
          textAlign={textAlign}
        >
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          setDisplay={setDisplay}
          widthMin={rightWidth}
          widthMax={rightWidth}
          alignItems="flex-end"
          textAlign="right"
          setPadding="0 0 0 1em"
        >
          {right}
        </Slot>
      ) : null}
    </BarLayout>
  );
}

Bar.propTypes = {
  id: PropTypes.string,
  /** Used to change the default display property
   * Default: 'flex'
   * Options: Any valid CSS value for the 'display' property
   */
  setDisplay: PropTypes.string,
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  barAlign: PropTypes.oneOf(["center", "bottom"]),
  /** Used to define the content in the left 'slot' */
  left: PropTypes.any,
  /** Used to override the default flex ratio of the left 'slot' by increasing the setting a 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  leftWidth: PropTypes.string,
  /** Used to define the content in the center 'slot' */
  center: PropTypes.any,
  /** Sets the horizontal alignment of 'center' content
   * Default: 'center'
   */
  centerAlign: PropTypes.oneOf(["left", "right"]),
  /** Used to define the content in the right 'slot' */
  right: PropTypes.any,
  /** Used to override the default flex ratio of the right 'slot' by increasing the setting a 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  rightWidth: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Bar;
