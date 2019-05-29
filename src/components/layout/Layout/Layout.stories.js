import React from "react";
import styled, { css, keyframes } from "styled-components";
import { fonts, colors, shadows } from "Variables";
import { storiesOf } from "@storybook/react";
import LayoutMain, {
  OuterWrapper,
  InnerWrapper,
  LeftWrapper,
  CenterWrapper,
  CenterWrapperTop,
  CenterWrapperMiddle,
  CenterWrapperBottom,
  RightWrapper,
  BarWrapper
} from "./Layout";
import Panel, { PanelSection } from "layout/Panel";
// import Card, { CardList } from "layout/Card"

const Layout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${colors.grey_light};
`;

const LeftPane = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: 60%;
  background-color: ${colors.grey_40};
`;

const RightPane = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  right: 0;
  width: 40%;
  height: 100%;
  overflow: hidden;
  filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
  background-color: ${colors.grey_20};
`;

storiesOf("Application|Layout/", module)
  .add("Layout - Main", () => <LayoutMain />)
  .add("Layout - 2 Pane", () => <LayoutMain />);
