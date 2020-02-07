/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";
import Card from "elements/Card";
import Bar from "blocks/Bar";
import Avatar from "atoms/Avatar";
import Icon from "atoms/Icon";
import Text, { Link, Title } from "base/Typography";

const StyledBanner = styled(Card)`
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.neutral80;
  }};
`;

const Close = styled(Icon)`
  color: inherit;
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
  const iconValue = icon || iconHash[type && type.toLowerCase()];
  if (iconValue) {
    bannerType = (
      <Avatar type={type} icon={iconValue} size="2x" fixedWidth />
    );
  }

  return (
    <StyledBanner borderColor={type} id={id} padding="4x">
      <Bar
        contentAlign={description || link ? "" : "center"}
        padding="none"
        leftWidth="max-content"
        left={bannerType}
        centerAlign="left"
        center={
          <Grid columns="1" gap="tiny">
            <Title text={title} />
            {description ? <Text size="2x" text={description} /> : null}
            {link ? (
              <Link href={href} onClick={onClick} text={link} />
            ) : null}
          </Grid>
        }
        rightWidth="max-content"
        right={(<Close icon="close" size="lg" onClick={onClose} />)}
      />
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
