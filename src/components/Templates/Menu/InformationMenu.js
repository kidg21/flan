import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"
import Badge from "atoms/Badge"
import Panel, { PanelSection } from "../../layout/Panel/Panel"

const ItemList = styled.ul`
  display: flex-inline;
`

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  background: ${colors.white};
  padding: 30px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:active {
    font-weight: bold;
  }
`

const Header = styled.li`
  list-style: none;
  display: flex;
  background: ${colors.white};
  padding: 30px;
  cursor: pointer;

  &:hover {
    color: black;
    ${IconContainer} {
      color: ${colors.success};
    }
  }
`

const IconContainer = styled.div`
  width: 5px;
`

const ItemName = styled.span`
  margin: 0;
  flex: auto;
  padding-left: 1.5em;
  color: ${colors.grey_80};
`

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function InformationMenu() {
  return (
    <Panel>
      <PanelSection>
        <Header style={{ justifyContent: "start" }}>
          <IconContainer>
            <Icon icon={["far", "angle-left"]} size="lg" />
          </IconContainer>
          <ItemName style={{ fontWeight: "bold" }}>Information</ItemName>
        </Header>
      </PanelSection>
      <PanelSection
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ItemList>
          <Item>
            <ItemName>FAQs</ItemName>
            <Icon icon={["far", "angle-right"]} />
          </Item>
          <Item>
            <ItemName>Documentation</ItemName>
            <Icon icon={["far", "angle-right"]} />
          </Item>
          <Item>
            <ItemName>Best Practices</ItemName>
            <Icon icon={["far", "angle-right"]} />
          </Item>
          <Item>
            <ItemName>New Updates</ItemName>
            <Icon icon={["far", "angle-right"]} />
          </Item>
          <Item>
            <ItemName>Support</ItemName>
            <Icon icon={["far", "angle-right"]} />
          </Item>
          <Item>
            <ItemName>Contact Us</ItemName>
            <Icon icon={["far", "angle-right"]} />
          </Item>
        </ItemList>
      </PanelSection>
    </Panel>
  )
}

export default InformationMenu
