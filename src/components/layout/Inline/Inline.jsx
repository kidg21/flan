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
  contentAlign,
  contentJustify,
  id,
  spacingX,
  spacingY,
}) {
  const justifyContent = justiftyHash[contentJustify && contentJustify.toLowerCase()] || "flex-start";
  const alignItems = alignHash[contentAlign && contentAlign.toLowerCase()] || "center";
  const spacingHalfY = spacingY ? `calc(${spacingY} / 2)` : "0";

  return (
    <Flex
      alignItems={alignItems}
      flexDirection="row"
      flexWrap="wrap"
      id={id}
      justifyContent={justifyContent}
    >
      {children.length > 0
        ? children.map((child, index) => {
          return child ? (
            <div
              key={child.key || index}
              style={{ margin: `${spacingHalfY} ${spacingX} ${spacingHalfY} 0` }}
            >
              {child}
            </div>
          ) : null;
        })
        : null}
    </Flex>
  );
}

Inline.propTypes = {
  children: PropTypes.node,
  contentAlign: PropTypes.oneOf(["top", "center", "bottom"]),
  contentJustify: PropTypes.oneOf(["left", "center", "right"]),
  id: PropTypes.string,
  spacingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spacingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Inline.defaultProps = {
  children: null,
  contentAlign: "center",
  contentJustify: "left",
  id: null,
  spacingX: 0,
  spacingY: 0,
};

export default Inline;
