import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import PanelHeader from "elements/PanelHeader";
import CardBar from "elements/CardBar";
import Panel, { PanelSection } from "layout/Panel";

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function InformationMenu() {
  return (
    <Panel>
      <PanelSection>
        <PanelHeader main="true" title="Information" />
      </PanelSection>
      <PanelSection>
        <CardBar navigation="true" title="FAQs" />
        <CardBar navigation="true" title="Documentation" />
        <CardBar navigation="true" title="Best Practices" />
        <CardBar navigation="true" title="New Updates" />
        <CardBar navigation="true" title="Support" />
        <CardBar navigation="true" title="Contact Us" />
      </PanelSection>
    </Panel>
  );
}

export default InformationMenu;
