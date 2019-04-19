import React from "react"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 20px;
  background: ${colors.anchor};
  color: white;
`

const Message = styled.h1`
  margin: 0;
  font-size: 12px;
  display: flex;
  align-self: center;
  font-weight: bold;
`
const successProps = {
  nameProp: ["fas", "check"],
  colorProp: colors.white
}

// const warningProps = {
//   nameProp: ["fas", "exclamation"],
//   colorProp: colors.white
// }

// const errorProps = {
//   nameProp: ["fas", "times"],
//   colorProp: colors.white
// }

// const infoProps = {
//   nameProp: ["fas", "info"],
//   colorProp: colors.white
// }

function Badge({ message }) {
  return (
    <BadgeContainer>
      <Message>{message}</Message>
    </BadgeContainer>
  )
}

function IconBadge() {
  return (
    <BadgeContainer>
      <Icon {...successProps} />
    </BadgeContainer>
  )
}

export { Badge as default, IconBadge }
