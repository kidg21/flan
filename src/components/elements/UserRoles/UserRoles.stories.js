import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import List, { ListItem } from "blocks/List";
import Card, { Piece } from "layout/Card";
import UserRoles, { UserEntry } from "./UserRoles";
import Button from "atoms/Button";

// import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
// import NavigationCardBar from "elements/CardBars/NavigationCardBar";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Elements|User Roles", module).add("Default", () => (
  <UserRoles>
    <UserEntry user="Bob" />
    <UserEntry user="Bob 1" />
    <UserEntry user="Bob 2" />
    <UserEntry user="Bob 3" />
    <UserEntry user="Bob 4" />
    <UserEntry user="Bob 5" />
  </UserRoles>
));
