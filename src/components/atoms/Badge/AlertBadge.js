import React from "react"
import styled, { css } from "styled-components"
import Icon from "atoms/Icon"
import PropTypes from "prop-types"
import { colors, shadows } from "Variables"

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 2em;
  padding-top: 7px;
  height: 2em;
  border-radius: 20px;
  background-color: ${props =>
    props.info
      ? colors.anchor
      : props.warning
      ? colors.warning
      : props.error
      ? colors.alert
      : props.success
      ? colors.success
      : ""};
  color: black;
`

const successProps = {
  nameProp: ["fas", "check"],
  colorProp: "white"
}

const warningProps = {
  nameProp: ["fas", "exclamation"],
  colorProp: "white"
}

const errorProps = {
  nameProp: ["fas", "times"],
  colorProp: "white"
}

const infoProps = {
  nameProp: ["far", "info"],
  colorProp: "white"
}

function AlertBadge(props) {
  return (
    <div>
      {props.error ? (
        <BadgeContainer error>
          {" "}
          <Icon {...errorProps} />{" "}
        </BadgeContainer>
      ) : null}
      {props.info ? (
        <BadgeContainer info>
          {" "}
          <Icon {...infoProps} />{" "}
        </BadgeContainer>
      ) : null}
      {props.success ? (
        <BadgeContainer success>
          {" "}
          <Icon {...successProps} />{" "}
        </BadgeContainer>
      ) : null}
      {props.warning ? (
        <BadgeContainer warning>
          {" "}
          <Icon {...warningProps} />{" "}
        </BadgeContainer>
      ) : null}
    </div>
  )
}

export default AlertBadge
