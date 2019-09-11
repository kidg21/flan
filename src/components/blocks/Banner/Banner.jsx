import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "atoms/Icon";
import Title, { Description } from "base/Typography";

const StyledBanner = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  background-color: ${props =>
    props.theme.background.default};
  color: ${props => (props.theme.text.primary)};
  border: 1px solid;
  border-color: ${props => props.theme[props.borderColor] || props.theme.accents.black };
  border-radius: 5px;
  padding: 1em;
  width: 100%;
`;

const StatusBadge = styled.div`
  background-color: ${props => props.theme[props.badgeBG] || ""};
  color: ${props => (props.badgeBG ? props.theme.text.inverse : "")};
  padding: ${props => (props.badgeBG ? ".5em" : "")};
  margin-right: 1em;
  border-radius: 100%;
  cursor: default;
`;

const BannerImage = styled.img`
  flex: none;
  width: 3em;
  margin-right: 1em;
`;

const Message = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  flex: auto;
  margin-right: 1.5em;
  align-self: center;
  > * {
    margin-bottom: 0;
  }
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
  onClick,
  onClose,
  style,
}) {
  let bannerType;
  let color;
  let badgeBG = color;
  switch (type) {
    case "media":
      bannerType = icon ? (
        <StatusBadge>
          <Icon icon={icon} size="2x" fixedWidth />
        </StatusBadge>
      ) : img ? (
        <BannerImage src={img} />
      ) : null;
      break;
    case "info":
      color = "status.info";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="info" fixedWidth anchor />
        </StatusBadge>
      );
      break;
    case "success":
      color = "status.success";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="check" fixedWidth success />
        </StatusBadge>
      );
      break;
    case "warning":
      color = "status.warning";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="alert" fixedWidth warning />
        </StatusBadge>
      );
      break;
    case "alert":
      color = "status.alert";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="close" fixedWidth alert />
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
      style={style}
    >
      {bannerType}
      <Message>
        <Title text={title} />
        {description ? <Description text={description} /> : null}
        {link ? <Link onClick={onClick}>{link}</Link> : null}
      </Message>
      <Close onClick={onClose}>
        <Icon icon="close" />
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
  style: PropTypes.string,
};

export default Banner;
