import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"
import Badge from "atoms/Badge"
import Panel, {
  PanelSection,
  PanelBody,
  PanelFooter
} from "../../layout/Panel/Panel"

const notificationProps = {
  nameProp: ["far", "bell"],
  colorProp: "dimgray"
}

const sharedContentProps = {
  nameProp: ["far", "share-alt"],
  colorProp: "dimgray"
}

const informationProps = {
  nameProp: ["far", "info"],
  colorProp: "dimgray"
}

const uploadProps = {
  nameProp: ["far", "arrow-from-bottom"],
  colorProp: "dimgray"
}

const settingsProps = {
  nameProp: ["far", "cog"],
  colorProp: "dimgray"
}

const signOutProps = {
  nameProp: ["far", "sign-out"],
  colorProp: "dimgray"
}

const MenuSection = styled.div`
  overflow: hidden;
  //   border-bottom: 0.25px solid #eaeded;
  padding: 2em 1em 2em;
  cursor: pointer;
  justify-content: flex-start;
  display: flex;

  &:hover {
    border-left: 3px solid ${colors.success};
    background: #eef5e8;
  }

  &:active {
    border-left: 3px solid ${colors.success};
  }
`

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function MainMenu() {
  return (
    <Panel>
      <PanelSection
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1.8em"
        }}
      >
        <h1 style={{ color: "black" }}>LV.</h1>
      </PanelSection>
      <PanelBody
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <MenuSection>
          <Icon {...uploadProps} />{" "}
          <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
            Uploads
          </span>
        </MenuSection>
        <MenuSection>
          <Icon {...notificationProps} />{" "}
          <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
            Notifications
          </span>
        </MenuSection>
        <MenuSection>
          <Icon {...sharedContentProps} />{" "}
          <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
            Shared Content
          </span>
        </MenuSection>
        <MenuSection>
          <Icon {...informationProps} />{" "}
          <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
            Information
          </span>
        </MenuSection>
        <MenuSection>
          <Icon {...settingsProps} />{" "}
          <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
            Settings
          </span>
        </MenuSection>
      </PanelBody>
      <PanelSection>
        <div
          style={{
            padding: "2em 1em 2em",
            cursor: "pointer",
            justifyContent: "flex-start",
            alignItems: "baseline",
            display: "flex"
          }}
        >
          <Badge message="UN" />
          <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
            User Name
          </span>
        </div>
      </PanelSection>
    </Panel>
  )
}

export default MainMenu
