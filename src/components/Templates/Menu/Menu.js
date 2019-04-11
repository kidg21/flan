import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "base/Icons";
import Badge from "atoms/Badge";
import Panel, {
  PanelSection,
  PanelBody,
  PanelFooter
} from "../../layout/Panel/Panel";

const notificationProps = {
  nameProp: ["far", "bell"],
  colorProp: "dimgray"
};

const sharedContentProps = {
  nameProp: ["far", "share-alt"],
  colorProp: "dimgray"
};

const informationProps = {
  nameProp: ["far", "info"],
  colorProp: "dimgray"
};

const uploadProps = {
  nameProp: ["far", "arrow-from-bottom"],
  colorProp: "dimgray"
};

const settingsProps = {
  nameProp: ["far", "cog"],
  colorProp: "dimgray"
};

const signOutProps = {
  nameProp: ["far", "sign-out"],
  colorProp: "dimgray"
};

const MenuSection = styled.div`
  overflow: hidden;
  //   border-bottom: 0.25px solid #eaeded;
  padding: 2em 1em 2em;
  cursor: pointer;
  justify-content: flex-start;
  display: flex;

  &:hover {
    color: ${colors.success};
  }
`;

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
        <h1>LandVision</h1>
      </PanelSection>
      <PanelBody
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <MenuSection>
          <Icon {...uploadProps} /> <span>Uploads</span>
        </MenuSection>
        <MenuSection>
          <Icon {...notificationProps} /> <span>Notifications</span>
        </MenuSection>
        <MenuSection>
          <Icon {...sharedContentProps} /> <span>Shared Content</span>
        </MenuSection>
        <MenuSection>
          <Icon {...informationProps} /> <span>Information</span>
        </MenuSection>
        <MenuSection>
          <Icon {...settingsProps} /> <span>Settings</span>
        </MenuSection>
      </PanelBody>
      <PanelSection>
        <MenuSection>
          <Badge message="UN" />
          <span>User Name</span>
        </MenuSection>
      </PanelSection>
    </Panel>
  );
}

export default MainMenu;
