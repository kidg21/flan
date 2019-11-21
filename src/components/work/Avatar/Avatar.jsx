/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Title from "base/Typography";

const AvatarText = styled(Title)`
  color: inherit;
  margin: 0px 0px 0em;
`;

const TagContainer = styled.div`
  justify-content: center;
  vertical-align: center;
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  background-color: ${(props) => {
    return (
      props.theme.palette[props.backgroundColor] ||
      props.theme.palette.primaryLight
    );
  }};
  color: ${(props) => {
    return props.theme.palette[props.color] || props.theme.palette.primaryDark;
  }};
  text-transform: uppercase;
  border-radius: 100%;
`;

function Avatar({
  id, label, icon, backgroundColor, color, style,
}) {
  let labelType;
  let iconType;
  if (icon) {
    iconType = <Icon icon={icon} size="lg" />;
  } else {
    labelType = <AvatarText weight="bold" size="lg" text={label} />;
  }

  return (
    <TagContainer
      id={id}
      label={label}
      icon={icon}
      backgroundColor={backgroundColor}
      color={color}
      style={style}
    >
      {iconType || labelType}
    </TagContainer>
  );
}

Avatar.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.node,
  backgroundColor: PropTypes.node,
  style: PropTypes.node,
};

Avatar.defaultProps = {
  label: null,
  id: null,
  icon: null,
  color: null,
  backgroundColor: null,
  style: null,
};

export { Avatar as default };
