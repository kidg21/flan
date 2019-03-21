import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBadge from "../../atoms/Badge/AlertBadge";

const StyledBanner = styled.div`
  background: rgba(0, 0, 0, 0.75);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 1em;
  border-radius: 5px;
  width: 25%;
`

const Notification = styled.h4`
margin: 0;
font-family: system-ui;
font-size: 14px;
font-weight: normal;
`

const NotificationLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  margin-left: 10px;
  color: white;
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`


function Banner({title}) {
    return (
        <StyledBanner>
          <Notification>{title}</Notification>
          <IconBadge/>
          <FontAwesomeIcon icon={["fal", "times"]} color={"white"} />
        </StyledBanner>
    )
  };

  export default Banner;
