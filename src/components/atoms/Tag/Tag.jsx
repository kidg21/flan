/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Text from "base/Typography";

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
  border: ${(props) => {
    return `2px solid ${props.theme.text.inverse}`;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMax;
  }};
`;

function Tag({
  brand, icon, id, label, variant,
}) {
  let badgeColor;
  let badgeTextColor;
  let badgePadding;
  let labelType;
  let iconType;

  if (icon) {
    iconType = <Icon icon={icon} size="xl" variant={variant} />;
    badgePadding = "0 0.25em";
  } else if (label) {
    labelType = <Text size="2x" weight="bold" text={label} />;
    badgeTextColor = "inverse";
    badgePadding = "0.25em .58em";
  } else {
    badgePadding = "0.35rem";
  }

  switch (variant) {
    case "info":
      badgeColor = "info80";
      break;
    case "success":
      badgeColor = "success80";
      break;
    case "warning":
      badgeColor = "warning80";
      break;
    case "alert":
      badgeColor = "alert80";
      break;
    default:
      badgeColor = "action80";
      break;
  }

  if (!variant) {
    if (brand === "research") {
      badgeColor = "research";
    } if (brand === "bi") {
      badgeColor = "bi";
    } if (brand === "jobs") {
      badgeColor = "jobs";
    } if (brand === "broker") {
      badgeColor = "broker";
    } if (brand === "brand1") {
      badgeColor = "brand1";
    } if (brand === "brand2") {
      badgeColor = "brand2";
    } if (brand === "brand3") {
      badgeColor = "brand3";
    } if (brand === "brand4") {
      badgeColor = "brand4";
    }
  }


  return (
    <TagContainer
      badgeColor={badgeColor}
      badgePadding={badgePadding}
      badgeTextColor={badgeTextColor}
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
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
};

Tag.defaultProps = {
  brand: null,
  icon: null,
  id: null,
  label: null,
  variant: null,
};

export default Tag;
