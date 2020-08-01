/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import { Label } from "base/Typography";

const TagContainer = styled.div`
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
    return props.badgePadding || "0.2em .5em";
  }};
  line-height: normal;
  border-radius: ${(props) => {
    return props.borderRadius || props.theme.borders.radiusMax;
  }};
`;

const TagIconContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  ${(props) => {
    if (props.iconSeparator === "radial") {
      return `
        border: 1px solid ${props.theme.text[props.badgeTextColor]};
        border-radius: 50%;
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
  cursor: ${(props) => { return props.onClick ? "pointer" : "default"; }}
`;

function Tag({
  brand, className, hasBackground, icon, iconPosition, iconSeparator, id, label, variant, onClick, onClickIcon,
}) {
  let badgeColor;
  let badgeHeight;
  let badgePadding;
  let badgeTextColor;
  let badgeWidth;
  let borderRadius;
  let iconType;
  let labelType;

  if (icon && label) {
    iconType = <Icon icon={icon} size="xs" variant={hasBackground ? "inverse" : variant} />;
    labelType = <Label text={label} cursor={onClick ? "pointer" : "default"} />;
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
    iconType = <Icon icon={icon} size="sm" variant={hasBackground ? "inverse" : variant} />;
    badgeWidth = "1.5em";
    badgeHeight = "1.5em";
    badgePadding = ".75em";
    borderRadius = "50%";
  } else if (label) {
    labelType = <Label text={label} cursor={onClick ? "pointer" : "default"} />;

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
    if (iconPosition === "right") {
      inner = (
        <React.Fragment>
          { labelType }
          <TagIconContainer
            iconPosition={iconPosition}
            iconSeparator={iconSeparator}
            badgeTextColor={badgeTextColor}
            onClick={onClickIcon}
          >
            { iconType }
          </TagIconContainer>
        </React.Fragment>
      );
    } else {
      inner = (
        <React.Fragment>
          <TagIconContainer
            iconPosition={iconPosition}
            iconSeparator={iconSeparator}
            badgeTextColor={badgeTextColor}
            onClick={onClickIcon}
          >
            { iconType }
          </TagIconContainer>
          { labelType }
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
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  onClickIcon: PropTypes.func,
};

Tag.defaultProps = {
  brand: null,
  className: null,
  hasBackground: true,
  icon: null,
  iconPosition: "left",
  iconSeparator: "radial",
  id: null,
  label: null,
  variant: null,
  onClick: null,
  onClickIcon: null,
};

export default Tag;
