/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";
import Card from "layout/Card";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Title, { Description, Link } from "base/Typography";

const StyledBanner = styled(Card)`
  border: 2px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.grey4;
  }};
  border-radius: 5px;
`;

const StatusBadge = styled.div`
  background-color: ${(props) => {
    return props.theme.palette[props.badgeBG] || props.theme.palette.grey;
  }};
  color: ${(props) => {
    return props.theme.palette.white;
  }};
  padding: ${(props) => {
    return props.badgeBG ? ".5em" : "";
  }};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 2.5em;
  height: 2.5em;
`;

const Message = styled(Grid)`
  align-self: center;
  padding-right: 1.5em;
`;

const Close = styled(Icon)`
  position: absolute;
  top: 0.75em;
  right: 0.75em;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

function Banner({
  description, href, icon, id, link, onClick, onClose, title, type,
}) {
  let bannerType;
  let color;
  let badgeBG = color;
  switch (type) {
    case "info":
      color = "info";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="info" size="lg" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    case "success":
      color = "success";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="check" size="lg" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    case "warning":
      color = "warning";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="alert" size="lg" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    case "alert":
      color = "alert";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="close" size="lg" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    default:
      break;
  }
  if (icon) {
    bannerType = (
      <StatusBadge badgeBG={badgeBG}>
        {type ? (
          <Icon icon={icon} size="lg" fixedWidth />
        ) : (
          <Icon icon={icon} size="lg" fixedWidth type={type} />
        )}
      </StatusBadge>
    );
  }
  return (
    <StyledBanner borderColor={color} id={id} type={type} padding="4x">
      <Bar
        contentAlign={description || link ? "" : "center"}
        padding="none"
        left={bannerType}
        leftWidth="3em"
        centerAlign="left"
        center={
          <Message columns="1" gap="tiny">
            <Title text={title} />
            {description ? <Description text={description} /> : null}
            {link ? (
              <Link href={href} onClick={onClick}>
                {link}
              </Link>
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
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["media", "info", "success", "warning", "alert"]),
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

export { Banner as default };
