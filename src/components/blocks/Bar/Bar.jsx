/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";

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
  "none": "0",
  "1x": "0.5em 1em",
  "2x": "1em 1.25em",
  "vertical": "0.5em 0em",
  "horizontal": "0em 0.5em",
  "top": "1.5em 1em 0.5em",
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
  return slot && slot.content ? slot.content : slot;
}

function Bar({
  id,
  contentAlign,
  left,
  center,
  right,
  padding,
  onClick,
  className,
  disabled,
}) {
  const slotPadding = getPadding(left, right, center);
  const barPadding = padding ? paddingHash[padding.toLowerCase()] : null;
  const alignContent = alignHash[contentAlign && contentAlign.toLowerCase()] || "flex-start";

  let leftAlign = {};
  if (left && left.align) leftAlign = slotAlignHash[left.align];

  let centerAlign = slotAlignHash.center;
  if (center && center.align) centerAlign = slotAlignHash[center.align];

  let rightAlign = slotAlignHash.right;
  if (right && right.align) rightAlign = slotAlignHash[right.align];

  const barLayout = (
    <BarLayout
      id={id}
      justifyContent={slotPadding.justify}
      barPadding={barPadding}
      alignContent={alignContent}
      onClick={onClick}
      // topPadding={topPadding}
      className={className}
    >
      {left ? (
        <Slot
          setFlex="1 0 25%"
          widthMin={left.width}
          widthMax={left.width}
          setPadding={slotPadding.left}
          {...leftAlign}
        >
          {getContent(left)}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          widthMin={center.width}
          widthMax={center.width}
          setPadding={slotPadding.center}
          {...centerAlign}
        >
          {getContent(center)}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          setFlex="1 0 25%"
          widthMin={right.width}
          widthMax={right.width}
          setPadding={slotPadding.right}
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
});

Bar.propTypes = {
  id: PropTypes.string,
  /** Sets the vertical alignment of all content
   * Default: 'top'
   */
  contentAlign: PropTypes.oneOf(["center", "bottom", "top"]),
  /** Used to define the content in the left 'slot' */
  left: PropTypes.oneOfType([PropTypes.node, SlotType]),
  /** Used to define the content in the center 'slot' */
  center: PropTypes.oneOfType([PropTypes.node, SlotType]),
  /** Used to define the content in the right 'slot' */
  right: PropTypes.oneOfType([PropTypes.node, SlotType]),
  /** Sets the padding of the Bar component */
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "top", "vertical", "horizontal"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Bar.defaultProps = {
  id: null,
  contentAlign: null,
  left: null,
  center: null,
  right: null,
  padding: null,
  onClick: null,
  className: null,
  disabled: null,
};

export default Bar;
