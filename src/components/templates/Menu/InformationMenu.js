import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import MainPanelHeader from "elements/MainPanelHeader";
import NavigationCardBar from "elements/NavigationCardBar";
import Panel, { PanelSection } from "layout/Panel";

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function InformationMenu() {
  return (
    <Panel>
      <PanelSection>
        <MainPanelHeader title="Information" />
      </PanelSection>
      <PanelSection>
        <NavigationCardBar title="FAQs" />
        <NavigationCardBar title="Documentation" />
        <NavigationCardBar title="Best Practices" />
        <NavigationCardBar title="New Updates" />
        <NavigationCardBar title="Support" />
        <NavigationCardBar title="Contact Us" />
      </PanelSection>
    </Panel>
  );
}

export default InformationMenu;
