import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import PanelHeader from "elements/PanelHeader";
import CardBar from "elements/CardBar";
import Panel, { PanelSection } from "layout/Panel";

///for dark option use gradient style={{ backgroundImage: "linear-gradient(#3B3B55, #051937)" }}

function Menu() {
  return (
    <Panel>
      <PanelSection>
        <PanelHeader main="true" title="LandVision" />
      </PanelSection>
      <PanelSection>
        <CardBar navigation="true" title={<Command label="Uploads" />} />
        <CardBar navigation="true" title={<Command name="notifications" />} />
        <CardBar navigation="true" title={<Command label="Shared Content" />} />
        <CardBar navigation="true" title={<Command label="Information" />} />
        <CardBar navigation="true" title={<Command name="settings" />} />
        <CardBar navigation="true" title={<Command name="profile" />} />
      </PanelSection>
    </Panel>
  );
}

export default Menu;
