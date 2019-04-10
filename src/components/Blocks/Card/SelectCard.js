import React from "react"
import styled, { css } from "styled-components"
import propTypes from "prop-types"
import Container from "atoms/Container"
import Label from "atoms/Label"
import IconBlock from "blocks/IconBlock"
import Icon from "base/Icons"
import Checkbox from "atoms/Checkbox"

const HeaderSection = styled.div`
  overflow: hidden;
  border-bottom: 0.25px solid #eaeded;
  padding: 0.8em 1em 0.8em;
  cursor: pointer;
  justify-content: space-between;
  display: flex;
`

const SelectBox = {
  id: "cbox_1",
  label: "Selection Card"
}

function SelectCard() {
  return (
    <HeaderSection>
      <Checkbox {...SelectBox} />
    </HeaderSection>
  )
}

export default SelectCard
