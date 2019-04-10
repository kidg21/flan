import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconBadge from "atoms/Badge"

const StyledBanner = styled.div`
  background: rgba(0, 0, 0, 0.75);
  color: white;
  width: 30%;
  padding: 0.25em 0.6em 0.8em 0.8em;
  border-radius: 5px;
  justify-content: space-between;
  display: flex;

  @media (max-width: 700px) {
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

function Banner({ title }) {
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
          <IconBadge />
        </div>
      </Commands>
    </StyledBanner>
  )
}

export default Banner
