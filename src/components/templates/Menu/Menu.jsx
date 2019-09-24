import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import NavigationCardBar from "elements/CardBars/NavigationCardBar";
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
        <NavigationCardBar title={<Command command="notifications" />} />
        <NavigationCardBar title={<Command label="Shared Content" />} />
        <NavigationCardBar title={<Command label="Information" />} />
        <NavigationCardBar title={<Command command="settings" />} />
        <NavigationCardBar title={<Command command="profile" />} />
      </PanelSection>
    </Panel>
  );
}

export { Menu as default };
