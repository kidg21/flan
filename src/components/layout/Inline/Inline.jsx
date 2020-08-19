/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "layout/Flex";

const InlineWrapper = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 0; /* improves vertical alignment of inline Icons */
  overflow: visible;
  z-index: inherit;
`;

const InlineItem = styled.div`
  margin: ${(props) => {
    return props.inlineMargin || "";
  }};
  &:not(:last-of-type) {
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
  spacingX,
  spacingY,
  contentAlign,
  contentJustify,
}) {
  const justifyContent = justiftyHash[contentJustify && contentJustify.toLowerCase()] || "flex-start";
  const alignItems = alignHash[contentAlign && contentAlign.toLowerCase()] || "center";
  const spacingHalfY = spacingY ? `calc(${spacingY} / 2)` : "0";
  const inlineMargin = `${spacingHalfY} ${spacingX} ${spacingHalfY} 0`;
  let inlinePadding;

  return (
    <InlineWrapper
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children.length > 0
        ? children.map((child) => {
          return (
            <InlineItem
              key={child.key ? `${child.key}-wrapper` : null}
              inlineMargin={inlineMargin}
              inlinePadding={inlinePadding}
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
