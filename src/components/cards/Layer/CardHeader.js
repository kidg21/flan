import React from "react"
import styled, { css } from "styled-components"
import propTypes from "prop-types"
import Container from "atoms/Container"
import Label from "atoms/Label"
import IconBlock from "blocks/IconBlock"
import Icon from "base/Icons"
import Switch from "atoms/Switch"

const HeaderSection = styled.div`
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  display: flex;
`

// const ViewLegend = styled.div`
// line-height: normal;
// cursor: pointer;
// display: flex;
// justify-content: flex-start;
// `

const LayerCard = styled.div`
  // border-bottom: 0.25px solid #EAEDED;
  padding: 0.8em 1em 0.8em;
`

function CardContainer({ title }) {
  return (
    <LayerCard>
      <HeaderSection>
        <Switch />
        <h4 style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
          {title}
        </h4>
        <IconBlock />
      </HeaderSection>
    </LayerCard>
  )
}

export default CardContainer
