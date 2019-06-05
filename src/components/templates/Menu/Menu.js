import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import MainPanelHeader from "elements/MainPanelHeader";
import NavigationCardBar from "elements/NavigationCardBar";
import Panel, { PanelSection } from "layout/Panel";

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function Menu() {
  return (
    <Panel>
      <PanelSection>
        <MainPanelHeader title="LandVision" />
      </PanelSection>
      <PanelSection>
        <NavigationCardBar title={<Command label="Uploads" />} />
        <NavigationCardBar title={<Command name="notifications" />} />
        <NavigationCardBar title={<Command label="Shared Content" />} />
        <NavigationCardBar title={<Command label="Information" />} />
        <NavigationCardBar title={<Command name="settings" />} />
        <NavigationCardBar title={<Command name="profile" />} />
      </PanelSection>
    </Panel>
  );
}

export default Menu;
