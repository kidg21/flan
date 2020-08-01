/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import Flex from "layout/Flex";

function Inline({
  children,
  spacingX,
  spacingY,
  contentAlign,
  contentJustify,
}) {
  let justifyContent;
  let alignItems;

  switch (contentJustify) {
    case "center":
      justifyContent = "center";
      break;
    case "right":
      justifyContent = "flex-end";
      break;
    case "left":
    default:
      justifyContent = "flex-start";
      break;
  }

  switch (contentAlign) {
    case "top":
      alignItems = "flex-start";
      break;
    case "bottom":
      alignItems = "flex-end";
      break;
    case "center":
    default:
      alignItems = "center";
      break;
  }

  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      { children.length > 0
        ? children.map((child) => {
          return (
            <div
              style={{ margin: `calc(${spacingY} / 2) ${spacingX} calc(${spacingY} / 2) 0` }}
            >
              {child}
            </div>
          );
        })
        : null }
    </Flex>
  );
}

Inline.propTypes = {
  children: PropTypes.node,
  spacingX: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  spacingY: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  contentJustify: PropTypes.oneOf(["left", "center", "right"]),
  contentAlign: PropTypes.oneOf(["top", "center", "bottom"]),
};

Inline.defaultProps = {
  children: null,
  spacingX: 0,
  spacingY: 0,
  contentJustify: "left",
  contentAlign: "center",
};

export default Inline;
