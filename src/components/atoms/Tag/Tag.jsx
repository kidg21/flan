/* eslint-disable security/detect-object-injection */
/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PointerEventsContext } from "States";
import Icon from "atoms/Icon";
import { Label } from "base/Typography";

const TagContainer = styled.span`
  justify-content: center;
  display: flex;
  align-items: center;
  width: ${(props) => {
    return props.badgeWidth || "fit-content";
  }};
  height: ${(props) => {
    return props.badgeHeight || "";
  }};
  background-color: ${(props) => {
    return props.theme.palette[props.badgeColor];
  }};
  color: ${(props) => {
    return props.theme.text[props.badgeTextColor];
  }};
  text-align: center;
  padding: ${(props) => {
    return props.badgePadding || "0.2em 0.5em";
  }};
  line-height: normal;
  border-radius: ${(props) => {
    return props.borderRadius || "3px";
  }};
  transition: all 0.25s ease;
  cursor: ${(props) => { return props.onClick ? "pointer" : "inherit"; }}
  pointer-events: ${(props) => {
    return props.mouseEvents;
  }};
`;

const TagIconContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  ${(props) => {
    if (props.iconSeparator === "radial") {
      return `
        background-color: ${props.theme.background.modal};
        border-radius: 3px;
        height: 1.2em;
        width: 1.2em;
        margin-${props.iconPosition === "right" ? "right" : "left"}: 0.2em;
        margin-${props.iconPosition === "right" ? "left" : "right"}: 0.4em;
      `;
    }
    if (props.iconSeparator === "none") {
      return `
        padding-${props.iconPosition === "right" ? "left" : "right"}: 0.4em;
      `;
    }
    return `
      padding-${props.iconPosition === "right" ? "left" : "right"}: 0.5em;
      margin-${props.iconPosition === "right" ? "left" : "right"}: 0.4em;
      border-${props.iconPosition === "right" ? "left" : "right"}: 1px solid ${props.theme.text[props.badgeTextColor]};
    `;
  }}
  cursor: ${(props) => { return props.onClick ? "pointer" : "inherit"; }}
`;

const badgeSizes = {
  xs: {
    width: "1.25em",
    height: "1.25em",
  },
  sm: {
    width: "1.5em",
    height: "1.5em",
  },
  m: {
    width: "1.8em",
    height: "1.8em",
  },
  lg: {
    width: "2em",
    height: "2em",
  },
};

function Tag({
  brand,
  className,
  hasBackground,
  icon,
  iconPosition,
  iconSeparator,
  iconSize,
  id,
  label,
  onClick,
  onClickIcon,
  size,
  variant,
}) {
  let badgeColor;
  let badgeHeight;
  let badgePadding;
  let badgeTextColor;
  let badgeWidth;
  let borderRadius;
  let iconType;
  let labelType;

  const pointerEvents = useContext(PointerEventsContext);
  if (icon && label) {
    iconType = <Icon icon={icon} size="xs" variant={hasBackground ? "inverse" : variant} />;
    labelType = <Label text={label} size={size} cursor={onClick ? "pointer" : "inherit"} />;
    badgeHeight = "1.5em";
    if (iconSeparator === "radial") {
      if (iconPosition === "right") {
        badgePadding = "0.2em 0 0.2em 0.75em";
      } else {
        badgePadding = "0.2em 0.75em 0.2em 0";
      }
    } else {
      badgePadding = "0.2em .75em";
    }
    if (hasBackground) {
      badgeTextColor = "inverse";
    } else if (variant) {
      badgeTextColor = variant.toLowerCase() === "info" ? "link" : variant.toLowerCase();
    } else {
      badgeTextColor = "primary";
    }
  } else if (icon) {
    iconType = <Icon icon={icon} size={iconSize} variant={hasBackground ? "inverse" : variant} />;
    const badgeSize = badgeSizes[iconSize] || { width: "1.5em", height: "1.5em" };
    badgeWidth = badgeSize.width;
    badgeHeight = badgeSize.height;
    badgePadding = ".75em";
    borderRadius = "50%";
  } else if (label) {
    labelType = <Label text={label} size={size} cursor={onClick ? "pointer" : "default"} />;

    if (hasBackground) {
      badgeTextColor = "inverse";
    } else if (variant) {
      badgeTextColor = variant.toLowerCase() === "info" ? "link" : variant.toLowerCase();
    } else {
      badgeTextColor = "primary";
    }

    badgePadding = "0.2em .5em";
  } else {
    badgePadding = "0.35rem";
  }

  if (hasBackground) {
    if (brand && !variant) badgeColor = brand.toLowerCase();
    else badgeColor = `${variant ? variant.toLowerCase() : "action"}80`;
  } else {
    badgeColor = "inverse";
  }

  let inner = iconType || labelType;

  if (icon && label) {
    iconType = (
      <TagIconContainer
        iconPosition={iconPosition}
        iconSeparator={iconSeparator}
        badgeTextColor={badgeTextColor}
        onClick={(e) => {
          if (typeof onClickIcon === "function") {
            onClickIcon(e);
            e.stopPropagation();
          }
        }}
      >
        {iconType}
      </TagIconContainer>
    );
    if (iconPosition === "right") {
      inner = (
        <React.Fragment>
          {labelType}
          {iconType}
        </React.Fragment>
      );
    } else {
      inner = (
        <React.Fragment>
          {iconType}
          {labelType}
        </React.Fragment>
      );
    }
  }

  return (
    <TagContainer
      badgeColor={badgeColor}
      badgeHeight={badgeHeight}
      badgePadding={badgePadding}
      badgeTextColor={badgeTextColor}
      badgeWidth={badgeWidth}
      borderRadius={borderRadius}
      className={className}
      icon={icon}
      id={id}
      label={label}
      onClick={onClick}
      mouseEvents={pointerEvents}
    >
      {inner}
    </TagContainer>
  );
}

Tag.propTypes = {
  brand: PropTypes.string,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  iconSeparator: PropTypes.oneOf(["bar", "radial", "none"]),
  iconSize: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onClickIcon: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
};

Tag.defaultProps = {
  brand: null,
  className: null,
  hasBackground: true,
  icon: null,
  iconPosition: "right",
  iconSeparator: "radial",
  iconSize: "sm",
  id: null,
  label: null,
  onClick: null,
  onClickIcon: null,
  size: "",
  variant: null,
};

export default Tag;
