import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";
import Badge from "atoms/Badge";
import Panel, { PanelSection, PanelBody } from "../../layout/Panel/Panel";

const ItemList = styled.ul`
  display: flex-inline;
`;

const Item = styled.li`
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
`;

const IconContainer = styled.div`
  width: 20px;
`;

const ItemName = styled.span`
  margin: 0;
  flex: auto;
  padding-left: 1.5em;
  color: ${colors.grey_80};
`;

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function Menu() {
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
        <ItemList>
          <Item>
            <IconContainer>
              <Icon
                style={{ marginLeft: "2px" }}
                icon={["far", "arrow-from-bottom"]}
                size="lg"
              />{" "}
            </IconContainer>
            <ItemName>Uploads</ItemName>
          </Item>
          <Item>
            <Icon icon={["far", "bell"]} size="lg" />{" "}
            <ItemName>Notifications</ItemName>
          </Item>
          <Item>
            <Icon icon={["far", "share-alt"]} size="lg" />{" "}
            <ItemName>Shared Content</ItemName>
          </Item>
          <Item>
            <Icon
              style={{ marginLeft: "4px" }}
              icon={["far", "info"]}
              size="lg"
            />{" "}
            <ItemName>Information</ItemName>
          </Item>
          <Item>
            <Icon icon={["far", "cog"]} size="lg" />{" "}
            <ItemName>Settings</ItemName>
          </Item>
          <Item>
            <Icon
              style={{ marginLeft: "2px" }}
              icon={["far", "user"]}
              size="lg"
            />{" "}
            <ItemName>Account</ItemName>
          </Item>
        </ItemList>
      </PanelBody>
    </Panel>
  );
}

export default Menu;
