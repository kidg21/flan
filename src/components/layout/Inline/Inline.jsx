/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import Flex from "layout/Flex";

const justiftyHash = {
  center: "center",
  right: "flex-end",
  left: "flex-start",
};

const alignHash = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

function Inline({
  children,
  spacingX,
  spacingY,
  contentAlign,
  contentJustify,
}) {
  const justifyContent = justiftyHash[contentJustify && contentJustify.toLowerCase()] || "flex-start";
  const alignItems = alignHash[contentAlign && contentAlign.toLowerCase()] || "center";
  const spacingHalfY = spacingY ? `calc(${spacingY} / 2)` : "0";

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
              key={child.key ? `${child.key}-wrapper` : null}
              style={{ margin: `${spacingHalfY} ${spacingX} ${spacingHalfY} 0`, paddingLeft: "1rem" }}
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
  spacingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spacingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
