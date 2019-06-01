import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors, shadows } from "Variables";
import Icon from "atoms/Icon";

const StyledBanner = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  background-color: ${props =>
    props.inverse ? colors.grey_light_glass : colors.grey_dark_glass};
  color: ${props => (props.inverse ? "" : colors.white)};
  border: 2px solid;
  border-color: ${props => props.borderColor || ""};
  border-width: ${props => (props.inverse ? "1px" : "")};
  border-radius: 5px;
  padding: 1em;
  width: 100%;
`;

const StatusBadge = styled.div`
  background-color: ${props => props.badgeBG || ""};
  color: ${props => (props.badgeBG ? colors.white : "")};
  padding: ${props => (props.badgeBG ? ".5em" : "")};
  margin-right: 1em;
  border-radius: 100%;
  cursor: default;
`;

const BannerIcon = styled(FontAwesomeIcon)`
  cursor: default;
`;

const BannerImage = styled.img`
  flex: none;
  width: 3em;
  margin-right: 1em;
  border: 1px solid;
  border-color: ${props => (props.inverse ? colors.grey_60 : colors.grey_40)};
`;

const Message = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  flex: auto;
  margin-right: 1.5em;
  align-self: center;
`;

const Title = styled.h4`
  margin: 0;
`;

const Description = styled.h5`
  margin: 0;
`;

const Link = styled.h4`
  color: inherit;
  width: max-content;
  margin: 0;
  padding-top: 0.5em;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Close = styled.section`
  position: absolute;
  top: 1em;
  right: 1em;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

function Banner({
  id,
  title,
  description,
  type,
  icon,
  img,
  link,
  inverse,
  onClick,
  onClose,
  style
}) {
  let bannerType;
  let color = colors.grey_40;
  let badgeBG = color;
  switch (type) {
    case "media":
      bannerType = icon ? (
        <StatusBadge>
          <BannerIcon icon={icon} size="2x" fixedWidth />
        </StatusBadge>
      ) : img ? (
        <BannerImage src={img} inverse={inverse} />
      ) : null;
      break;
    case "info":
      color = colors.anchor;
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <BannerIcon icon="info" fixedWidth anchor />
        </StatusBadge>
      );
      break;
    case "success":
      color = colors.success;
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <BannerIcon icon="check" fixedWidth success />
        </StatusBadge>
      );
      break;
    case "warning":
      color = colors.warning;
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <BannerIcon icon="exclamation" fixedWidth warning />
        </StatusBadge>
      );
      break;
    case "alert":
      color = colors.alert;
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <BannerIcon icon="times" fixedWidth alert />
        </StatusBadge>
      );
      break;
    default:
      break;
  }
  return (
    <StyledBanner
      id={id}
      type={type}
      title={title}
      description={description}
      link={link}
      icon={icon}
      img={img}
      borderColor={color}
      inverse={inverse}
      style={style}
    >
      {bannerType}
      <Message>
        <Title>{title}</Title>
        {description ? <Description>{description}</Description> : null}
        {link ? <Link onClick={onClick}>{link}</Link> : null}
      </Message>
      <Close onClick={onClose}>
        <Icon icon="times" />
      </Close>
    </StyledBanner>
  );
}

Banner.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["media", "info", "success", "warning", "alert"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  img: PropTypes.string,
  inverse: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  style: PropTypes.string
};

export default Banner;
