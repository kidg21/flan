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
  width: fit-content;
  align-items: center;
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
    return props.theme.borders.radiusMax;
  }};
`;

function Tag({
  brand, className, hasBackground, icon, id, label, variant,
}) {
  let badgeColor;
  let badgeTextColor;
  let badgePadding;
  let labelType;
  let iconType;

  if (icon) {
    iconType = <Icon icon={icon} size="xl" variant={hasBackground ? "inverse" : variant} />;
    badgePadding = "0 0.25em";
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
      badgePadding={badgePadding}
      badgeTextColor={badgeTextColor}
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
