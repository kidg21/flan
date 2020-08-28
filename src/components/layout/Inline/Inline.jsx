/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "layout/Flex";

const InlineWrapper = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  overflow: visible;
  z-index: inherit;
`;

const InlineItem = styled.div`
  &:not(:last-of-type) {
    margin: ${(props) => {
    return props.inlineMargin || "";
  }};
    padding: ${(props) => {
    return props.inlinePadding || "0 0.5rem 0 0";
  }};
  }
`;

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
  const inlineMargin = `${spacingHalfY} ${spacingX} ${spacingHalfY} 0`;
  let inlinePadding;

  return (
    <InlineWrapper
      alignItems={alignItems}
      id={id}
      justifyContent={justifyContent}
    >
      {children.length > 0
        ? children.map((child, index) => {
          const itemKey = index;
          return (
            <InlineItem
              key={child ? `${itemKey}-wrapper` : null}
              inlineMargin={child ? inlineMargin : ""}
              inlinePadding={child ? inlinePadding : "0"}
            >
              {child}
            </InlineItem>
          );
        })
        : null}
    </InlineWrapper>
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
