import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types";
import { colors, fonts, fontSize, shadows } from "Variables"

const Line = styled.hr`
  height: 0;
  border-top: 0.25px solid ${colors.grey_20};
  font-size: 0;
`

function Divider() {
  return <Line />
}

export default Divider
