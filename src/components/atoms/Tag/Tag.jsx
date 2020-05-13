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
  text-transform: uppercase;
  padding: ${(props) => {
    return props.badgePadding || "";
  }};
  line-height: normal;
  border-radius: ${(props) => {
    return props.borderRadius || props.theme.borders.radiusMax;
  }};
`;

function Tag({
  brand, className, hasBackground, icon, id, label, variant,
}) {
  let badgeColor;
  let badgeHeight;
  let badgePadding;
  let badgeTextColor;
  let badgeWidth;
  let borderRadius;
  let iconType;
  let labelType;

  if (icon) {
    iconType = <Icon icon={icon} size="sm" variant={hasBackground ? "inverse" : variant} />;
    badgeWidth = "1.5em";
    badgeHeight = "1.5em";
    badgePadding = ".75em";
    borderRadius = "50%";
  } else if (label) {
    labelType = <Label size="xs" weight="bold" text={label} />;

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
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Tag.propTypes = {
  brand: PropTypes.string,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
};

Tag.defaultProps = {
  brand: null,
  className: null,
  hasBackground: true,
  icon: null,
  id: null,
  label: null,
  variant: null,
};

export default Tag;
