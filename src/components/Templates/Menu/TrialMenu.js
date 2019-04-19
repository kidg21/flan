import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";
import Badge from "atoms/Badge";
import Panel, { PanelSection, PanelBody } from "../../layout/Panel/Panel";

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

const Menu = styled.ul`
  display: flex-inline;
`;

const Item = styled.li`
  list-style: none;
  padding: 30px;
  cursor: pointer;

  &:hover {
    background: #eef5e8;
  }
`;

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function TrialMenu() {
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
        <Menu>
          <Item>
            <Icon {...uploadProps} />{" "}
            <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
              Uploads
            </span>
          </Item>
          <Item>
            <Icon {...notificationProps} />{" "}
            <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
              Notifications
            </span>
          </Item>
          <Item>
            <Icon {...sharedContentProps} />{" "}
            <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
              Shared Content
            </span>
          </Item>
          <Item>
            <Icon {...informationProps} />{" "}
            <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
              Information
            </span>
          </Item>
          <Item>
            <Icon {...settingsProps} />{" "}
            <span style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
              Settings
            </span>
          </Item>
        </Menu>
      </PanelBody>
      <PanelSection>
        <div
          style={{
            padding: "20px",
            cursor: "pointer",
            justifyContent: "flex-start",
            alignItems: "baseline",
            display: "flex"
          }}
        >
          <Badge message="UN" />
          <span style={{ margin: 0, paddingLeft: "1.5em" }}>User Name</span>
        </div>
      </PanelSection>
    </Panel>
  );
}

export default TrialMenu;
