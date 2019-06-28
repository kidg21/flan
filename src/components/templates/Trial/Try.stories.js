import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import AppLayout from "./AppLayout";
import PanelHeader from "elements/PanelHeader/PanelHeader";
import CardAccordion from "elements/CardAccordion";
import MapLegend from "blocks/MapLegend";
// import CardBar from "elements/CardBar/CardBar";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|Layout", module).add("Mobile Layout", () => <AppLayout />);
