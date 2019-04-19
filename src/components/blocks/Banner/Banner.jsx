import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AlertBadge from "atoms/Badge/AlertBadge"

const StyledBanner = styled.div`
  background: rgba(0, 0, 0, 0.75);
  color: white;
  width: 30%;
  padding: 0.25em 0.6em 0.8em 0.8em;
  border-radius: 5px;
  justify-content: space-between;
  display: flex;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

// const Container = styled.div`
// display: flex;
// line-height: normal;
// justify-content: flex-end;
// padding-right: .7em;
// padding-top: .5em;
// `

///On top text

const Message = styled.div`
  justify-content: left;
  align-self: center;
  display: inline;
`

const TopText = styled.div``

const BottomText = styled.div``

const Commands = styled.div`
  display: inline;
  text-align: right;
`

const Notification = styled.h4`
  margin: 0;
  display: flex;
  font-size: 12px;
  font-weight: normal;
  padding-right: 10px;
`

const NotificationLink = styled.a`
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: border-bottom 0.25s ease-in;

  &:hover {
    border-bottom: 1px solid white;
  }
`

function Banner({ title, ...props }) {
  return (
    <StyledBanner>
      <Message>
        <TopText>
          <Notification>{title}</Notification>
        </TopText>
        <BottomText>
          <NotificationLink>Learn More</NotificationLink>
        </BottomText>
      </Message>
      <Commands>
        <div>
          <FontAwesomeIcon icon={["fal", "times"]} color={"white"} />
        </div>
        <div>
        {props.error ? <AlertBadge error/> : null}
        {props.info ? <AlertBadge info/> : null}
        {props.success ? <AlertBadge success/> : null}
        {props.warning ? <AlertBadge warning/> : null}
        </div>
      </Commands>
    </StyledBanner>
  )
}


Banner.defaultProps = {
  title: "Notification Alert",
  error: false,
  warning: false,
  info: false,
  success: false
};

Banner.propTypes = {
  title: PropTypes.string,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool
};


export default Banner
