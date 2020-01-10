/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";
import Card from "layout/Card";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Text, { Link } from "base/Typography";

const StyledBanner = styled(Card)`
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.grey3;
  }};
`;

const StatusBadge = styled.div`
  color: ${(props) => {
    return props.theme.palette[props.badgeColor] || props.theme.palette.grey;
  }};
`;

const Message = styled(Grid)`
  align-self: center;
  // padding-right: 1.5em;
`;

const Close = styled(Icon)`
  position: absolute;
  right: 0.75em;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const iconHash = {
  info: "info",
  success: "check",
  warning: "alert",
  alert: "close",
};

function Banner({
  description,
  href,
  icon,
  id,
  link,
  onClick,
  onClose,
  title,
  type,
}) {
  let bannerType;
  const badgeColor = type;
  const iconValue = icon || iconHash[type && type.toLowerCase()];
  if (iconValue) {
    bannerType = (
      <StatusBadge badgeColor={badgeColor}>
        <Icon icon={iconValue} size="2x" fixedWidth />
      </StatusBadge>
    );
  }

  return (
    <StyledBanner borderColor={type} id={id} padding="4x">
      <Bar
        contentAlign={description || link ? "" : "center"}
        padding="none"
        left={bannerType}
        leftWidth="3em"
        centerAlign="left"
        center={
          <Message columns="1" gap="small">
            <Text text={title} />
            {description ? <Text text={description} /> : null}
            {link ? (
              <Link href={href} onClick={onClick} text={link} />
            ) : null}
          </Message>
        }
      />
      <Close icon="close" size="lg" onClick={onClose} />
    </StyledBanner>
  );
}

Banner.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};

Banner.defaultProps = {
  description: null,
  href: null,
  icon: null,
  id: null,
  link: null,
  onClick: null,
  onClose: null,
  type: null,
};

export default Banner;
