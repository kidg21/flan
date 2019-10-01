import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "atoms/Icon";
import Title, { Description, Link } from "base/Typography";

const StyledBanner = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  background-color: ${props =>
    props.theme.background.default};
  color: ${props => (props.theme.palette[props.inverse] ? "" : props.theme.text.primary)};
  border: 1px solid;
  border-color: ${props => props.theme.palette[props.borderColor] || props.theme.palette.grey5 };
  border-radius: 5px;
  padding: 1em;
  width: 100%;
`;

const StatusBadge = styled.div`
  background-color: ${props => props.theme.palette[props.badgeBG] || ""};
  color: ${props => (props.theme.palette[props.badgeBG] ? props.theme.palette.white : "")};
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
          <Icon icon={icon} size="2x" fixedWidth/>
        </StatusBadge>
      ) : img ? (
        <BannerImage src={img} />
      ) : null;
      break;
    case "info":
      color = "info";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="info" fixedWidth type="inverse"/>
        </StatusBadge>
      );
      break;
    case "success":
      color = "success";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="check" fixedWidth type="inverse"/>
        </StatusBadge>
      );
      break;
    case "warning":
      color = "warning";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="alert" fixedWidth type="inverse"/>
        </StatusBadge>
      );
      break;
    case "alert":
      color = "alert";
      badgeBG = color;
      bannerType = (
        <StatusBadge badgeBG={badgeBG}>
          <Icon icon="close" fixedWidth type="inverse"/>
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
      <Close >
        <Icon icon="close" onClick={onClose}/>
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
