import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors, shadows } from "Variables"
import Icon from "atoms/Icon"
import Badge from "atoms/Badge"

const StyledBanner = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${props =>
    props.inverse ? colors.grey_light_glass : colors.grey_dark_glass};
  color: ${props => (props.inverse ? "" : colors.white)};
  border: 2px solid;
  border-color: ${props => props.borderColor};
  border-width: ${props => (props.inverse ? "1px" : "")};
  border-left-width: ${props =>
    props.success || props.warning || props.error || props.info ? "6px" : ""};
  border-radius: ${props =>
    props.success || props.warning || props.error || props.info
      ? "5px"
      : "5px"};
  padding: 1em;
  width: 100%;
`

const BannerIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  cursor: default;
`

const BannerImage = styled.img`
  flex: none;
  width: 3em;
  margin-right: 1em;
  border: 1px solid;
  border-color: ${props => (props.inverse ? colors.grey_60 : colors.grey_40)};
`

const StatusBadge = styled(Badge)`
  margin-right: 1.25em;
  cursor: default;
`

const Message = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  flex: auto;
  align-self: center;
  padding-right: 0.5em;
`

const Notification = styled.h4`
  margin: 0;
`

const Description = styled.h5`
  margin: 0;
`

const NotificationLink = styled.h4`
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
`

const Close = styled.section`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

function Banner({
  id,
  title,
  description,
  type,
  icon,
  img,
  cta,
  info,
  success,
  warning,
  error,
  borderColor,
  inverse,
  onClick,
  onClose,
  style,
  ...props
}) {
  let bannerType
  let color
  switch (type) {
    case "media":
      bannerType = icon ? (
        <BannerIcon icon={icon} size="2x" />
      ) : img ? (
        <BannerImage src={img} inverse={inverse} />
      ) : null
      color = colors.grey_40
      break
    case "info":
      bannerType = <StatusBadge icon="info" anchor />
      color = colors.anchor
      break
    case "success":
      bannerType = <StatusBadge icon="check" success />
      color = colors.success
      break
    case "warning":
      bannerType = <StatusBadge icon="exclamation" warning />
      color = colors.warning
      break
    case "alert":
      bannerType = <StatusBadge icon="times" alert />
      color = colors.alert
      break
    default:
      color = colors.grey_40
  }
  return (
    <StyledBanner
      id={id}
      type={type}
      title={title}
      description={description}
      cta={cta}
      icon={icon}
      img={img}
      borderColor={color}
      inverse={inverse}
      style={style}
    >
      {bannerType}
      <Message>
        <Notification>{title}</Notification>
        {description ? <Description>{description}</Description> : null}
        {cta ? (
          <NotificationLink onClick={onClick}>{cta}</NotificationLink>
        ) : null}
      </Message>
      <Close onClick={onClose}>
        <Icon icon="times" />
      </Close>
    </StyledBanner>
  )
}

Banner.defaultProps = {
  title: "Notification Alert"
}

Banner.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["media", "info", "success", "warning", "alert"]),
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  img: PropTypes.string,
  inverse: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  style: PropTypes.string
}

export default Banner
