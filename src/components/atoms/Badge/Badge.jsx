import React from "react"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import PropTypes from "prop-types";
import Icon from "atoms/Icons"

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 20px;
  background: ${props =>
    props.blue
      ? '#7CB9DA'
      : props.green
      ? '#8EBA61'
      : props.orange
      ? '#F2A642'
      : props.red
      ? '#D05F5D'
      : props.grey
      ? '#605c57'
      : ""};
  color: white;
`

//Uses secondary colors to lighten graphics

const Message = styled.h1`
  margin: 0;
  font-size: 12px;
  display: flex;
  align-self: center;
  font-weight: bold;
`

function Badge({ message, color, ...props}) {
  return (
    <div>
    {props.blue ? (
      <BadgeContainer blue>
        <Message>{message}</Message>
      </BadgeContainer>
    ) : null}
    {props.green ? (
      <BadgeContainer green>
      <Message>{message}</Message>
      </BadgeContainer>
    ) : null}
    {props.orange ? (
      <BadgeContainer orange>
      <Message>{message}</Message>
      </BadgeContainer>
    ) : null}
    {props.red ? (
      <BadgeContainer red>
      <Message>{message}</Message>
      </BadgeContainer>
    ) : null}
    {props.grey ? (
      <BadgeContainer grey>
      <Message>{message}</Message>
      </BadgeContainer>
    ) : null}
  </div>
  )
}


Badge.defaultProps = {
  id: "",
  message: "message",
  blue: false,
  green: false,
  orange: false,
  red: false,
  grey: false
};

Badge.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string.isRequired,
  blue: PropTypes.bool,
  green: PropTypes.bool,
  orange: PropTypes.bool,
  red: PropTypes.bool,
  grey: PropTypes.bool
};


export { Badge as default }
