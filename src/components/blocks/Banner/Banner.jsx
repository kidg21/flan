/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "atoms/Image";
import Icon from "atoms/Icon";
import Title, { Description, Link } from "base/Typography";

const StyledBanner = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  border: 1px solid;
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || props.theme.palette.grey5;
  }};
  border-radius: 5px;
  padding: 1em;
  width: 100%;
`;

const StatusBadge = styled.div`
  background-color: ${(props) => {
    return props.theme.palette[props.badgeBG] || "";
  }};
  color: ${(props) => {
    return props.theme.palette[props.badgeBG] ? props.theme.palette.white : "";
  }};
  padding: ${(props) => {
    return props.badgeBG ? ".5em" : "";
  }};
  margin-right: 1em;
  border-radius: 100%;
  cursor: default;
`;

const BannerImage = styled(Image)`
  flex: none;
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
  description, href, icon, id, img, link, onClick, onClose, style, title, type,
}) {
  let bannerType;
  let color;
  let badgeBG = color;
  switch (type) {
    case "media":
      if (icon) {
        bannerType = (
          <StatusBadge>
            <Icon icon={icon} size="2x" fixedWidth />
          </StatusBadge>
        );
      } else if (img) {
        bannerType = (
          <BannerImage src={img} width="3em" />
        );
      }
      break;
    case "info":
      color = "info";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="info" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    case "success":
      color = "success";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="check" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    case "warning":
      color = "warning";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="alert" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    case "alert":
      color = "alert";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="close" fixedWidth type="inverse" />
        </StatusBadge>
      );
      break;
    default:
      break;
  }
  return (
    <StyledBanner
      borderColor={color}
      description={description}
      icon={icon}
      id={id}
      img={img}
      link={link}
      style={style}
      title={title}
      type={type}
    >
      {bannerType}
      <Message>
        <Title text={title} />
        {description ? <Description text={description} /> : null}
        {link ? <Link href={href} onClick={onClick}>{link}</Link> : null}
      </Message>
      <Close>
        <Icon icon="close" onClick={onClose} />
      </Close>
    </StyledBanner>
  );
}

Banner.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["media", "info", "success", "warning", "alert"]),
};

Banner.defaultProps = {
  description: null,
  href: null,
  icon: null,
  id: null,
  img: null,
  link: null,
  onClick: null,
  onClose: null,
  style: null,
  type: null,
};

export default Banner;
