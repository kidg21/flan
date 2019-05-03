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
    props.inverse ? colors.grey_dark : colors.grey_light};
  color: ${props => (props.inverse ? colors.white : "")};
  border: 1px solid;
  border-color: ${props =>
    props.success
      ? colors.success
      : props.warning
      ? colors.warning
      : props.error
      ? colors.alert
      : props.info
      ? colors.anchor
      : props.inverse
      ? colors.black
      : colors.grey_40};
  border-left-width: ${props =>
    props.success || props.warning || props.error || props.info ? "6px" : ""};
  border-radius: ${props =>
    props.success || props.warning || props.error || props.info
      ? "0 5px 5px 0"
      : "5px"};
  padding: 1em;
  width: 100%;
  filter: ${props => (props.isFloating ? shadows.cardShadow : "")};
`

const BannerIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  cursor: default;
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
  transition: all 0.15s ease-in;
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
  icon,
  cta,
  info,
  success,
  warning,
  error,
  inverse,
  isFloating,
  style,
  ...props
}) {
  return (
    <StyledBanner
      id={id}
      title={title}
      description={description}
      icon={icon}
      cta={cta}
      info={info}
      success={success}
      warning={warning}
      error={error}
      inverse={inverse}
      isFloating={isFloating}
      style={style}
    >
      {icon ? <BannerIcon icon={icon} size="2x" /> : null}
      {info ? <StatusBadge icon="info" anchor /> : null}
      {success ? <StatusBadge icon="check" success /> : null}
      {warning ? <StatusBadge icon="exclamation" warning /> : null}
      {error ? <StatusBadge icon="times" alert /> : null}
      <Message>
        <Notification>{title}</Notification>
        {description ? <Description>{description}</Description> : null}
        {cta ? <NotificationLink>{cta}</NotificationLink> : null}
      </Message>
      <Close>
        <Icon icon="times" />
      </Close>
    </StyledBanner>
  )
}

Banner.defaultProps = {
  id: "",
  title: "Notification Alert",
  description: "",
  icon: "",
  cta: "",
  info: false,
  success: false,
  warning: false,
  error: false,
  inverse: false,
  isFloating: false
}

Banner.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  cta: PropTypes.string,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  inverse: PropTypes.bool,
  isFloating: PropTypes.bool,
  style: PropTypes.string
}

export default Banner
