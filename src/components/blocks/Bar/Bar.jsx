/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

const LinkedWrapper = styled.a`
flex: auto;
`;

const Slot = styled.div`
  display: flex;
  flex: ${(props) => {
    return props.setFlex || "auto";
  }};
  flex-direction: column;
  align-items: ${(props) => {
    return props.alignItems || "";
  }};
  text-align: ${(props) => {
    return props.textAlign || "";
  }};
  padding: ${(props) => {
    return props.setPadding || "";
  }};
  min-width: ${(props) => {
    return props.widthMin || "";
  }};
  max-width: ${(props) => {
    return props.widthMax || "";
  }};
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

const BarLayout = styled.div`
  display: flex;
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  flex-direction: row;
  align-items: ${(props) => {
    return props.alignContent || "";
  }};
  flex-wrap: nowrap;
  justify-content: ${(props) => {
    return props.justifyContent || "space-between";
  }};
  padding: ${(props) => {
    return props.barPadding || "";
  }};
  ${Slot} {
    &:only-child {
      padding: 0;
    }
  }
`;

function getPadding(left, right, center) {
  const padding = {
    left: null,
    right: null,
    center: null,
    justify: null,
  };

  padding.left = "0 0.5em 0 0";
  padding.right = "0 0 0 0.5em";
  if (left) {
    if (!right) padding.center = "0 0 0 0.5em";
    else padding.center = "0 0.5em 0 0.5em";
  } else if (right) {
    padding.center = "0 0.5em 0 0";
    padding.justify = center ? "space-between" : "flex-end";
  }

  return padding;
}

const paddingHash = {
  "0": "0",
  "2x": "1em 1.25em",
  "3x": "1.5em 1.5em",
};

const alignHash = {
  center: "center",
  bottom: "flex-end",
  top: "flex-start",
};

const slotAlignHash = {
  left: {
    alignItems: "flex-start",
    textAlign: "left",
  },
  right: {
    alignItems: "flex-end",
    textAlign: "right",
  },
  center: {
    alignItems: "center",
    textAlign: "center",
  },
};

function getContent(slot) {
  const content = slot && slot.content ? slot.content : slot;
  if (slot && slot.onClick) return <LinkedWrapper onClick={slot.onClick}>{content}</LinkedWrapper>;
  return content;
}

function Bar({
  center,
  className,
  contentAlign,
  disabled,
  id,
  left,
  onClick,
  padding,
  right,
}) {
  const slotPadding = getPadding(left, right, center);
  const barPadding = padding ? paddingHash[padding.toLowerCase()] : "0.5em 1em";
  const alignContent = alignHash[contentAlign && contentAlign.toLowerCase()] || "flex-start";

  let leftAlign = {};
  if (left && left.align) leftAlign = slotAlignHash[left.align];

  let centerAlign = slotAlignHash.center;
  if (center && center.align) centerAlign = slotAlignHash[center.align];

  let rightAlign = slotAlignHash.right;
  if (right && right.align) rightAlign = slotAlignHash[right.align];

  const barLayout = (
    <BarLayout
      alignContent={alignContent}
      barPadding={barPadding}
      className={className}
      id={id}
      justifyContent={slotPadding.justify}
      onClick={onClick}
    >
      {left ? (
        <Slot
          setFlex="1 0 25%"
          setPadding={slotPadding.left}
          widthMax={left.width}
          widthMin={left.width}
          {...leftAlign}
        >
          {getContent(left)}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          setPadding={slotPadding.center}
          widthMax={center.width}
          widthMin={center.width}
          {...centerAlign}
        >
          {getContent(center)}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          setFlex="1 0 25%"
          setPadding={slotPadding.right}
          widthMax={right.width}
          widthMin={right.width}
          {...rightAlign}
        >
          {getContent(right)}
        </Slot>
      ) : null}
    </BarLayout>
  );

  return typeof disabled === "boolean" ? (
    <DisabledContext.Provider value={disabled}>
      {barLayout}
    </DisabledContext.Provider>
  ) : (
      barLayout
    );
}

const SlotType = PropTypes.shape({
  /** Used to define the content in the slot */
  content: PropTypes.node,
  /** Used to override the default flex ratio of the slot by increasing the setting of 'min-width' and 'max-width'.
   * Value should be in percentage (%)
   */
  width: PropTypes.string,
  /** Sets the horizontal alignment of the slot content */
  align: PropTypes.oneOf(["left", "right", "center"]),
  onClick: PropTypes.func,
});

Bar.propTypes = {
  /** Used to define the content in the center 'slot' */
  center: PropTypes.oneOfType([PropTypes.node, SlotType]),
  className: PropTypes.string,
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  contentAlign: PropTypes.oneOf(["center", "bottom", "top"]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  /** Used to define the content in the left 'slot' */
  left: PropTypes.oneOfType([PropTypes.node, SlotType]),
  onClick: PropTypes.func,
  /** Sets the padding of the Bar component */
  padding: PropTypes.oneOf(["0", "1x", "2x", "3x"]),
  /** Used to define the content in the right 'slot' */
  right: PropTypes.oneOfType([PropTypes.node, SlotType]),
};

Bar.defaultProps = {
  center: null,
  className: null,
  contentAlign: null,
  disabled: null,
  id: null,
  left: null,
  onClick: null,
  padding: null,
  right: null,
};

export default Bar;
