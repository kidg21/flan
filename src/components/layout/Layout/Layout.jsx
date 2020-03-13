/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { screen } from "Variables";
import Flex from "layout/Flex";

const WrapperOuter = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Header = styled(Flex)`
  flex: none;
  box-shadow: ${(props) => {
    return props.theme.shadows.outerShadow;
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Header }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const Footer = styled(Flex)`
  flex: none;
  box-shadow: ${(props) => {
    return props.theme.shadows.outerShadow;
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Footer }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const Body = styled(Flex)`
  flex-direction: row;
  align-content: stretch;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const RegionLeft = styled(Flex)`
  flex: none;
  position: ${(props) => {
    return props.position || "absolute";
  }};
  width: ${(props) => {
    return props.leftWidth || "";
  }};
  height: 100%;
  transform: ${(props) => {
    return props.open ? "none" : `translate3d(-100%, 0, 0)`;
  }};
  box-shadow: ${(props) => {
    return props.open ? props.theme.shadows.outerShadow : "";
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Left }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const WrapperMain = styled(Flex)`
  flex: auto;
  flex-direction: column;
  align-content: stretch;
  align-items: flex-start;
  position: absolute;
  left: ${(props) => {
    return props.mainLeft || "";
  }};
  width: ${(props) => {
    return props.mainWidth || "";
  }};
  height: 100%;
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Main }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const RegionCenter = styled(Flex)`
  flex: none;
  align-self: stretch;
  position: ${(props) => {
    return props.position || "absolute";
  }};
  top: 0;
  bottom: ${(props) => {
    return props.centerBottom || "";
  }};
  width: 100%;
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Main }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const RegionBottom = styled(Flex)`
  flex: none;
  align-self: stretch;
  position: ${(props) => {
    return props.position || "absolute";
  }};
  bottom: 0;
  width: 100%;
  height: ${(props) => {
    return props.bottomHeight || "";
  }};
  transform: ${(props) => {
    return props.open ? "none" : "translate3d(0, 100%, 0)";
  }};
  box-shadow: ${(props) => {
    return props.open ? props.theme.shadows.outerShadow : "";
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Bottom }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const RegionRight = styled(Flex)`
  flex: none;
  position: ${(props) => {
    return props.position || "absolute";
  }};
  right: 0;
  width: ${(props) => {
    return props.rightWidth || "";
  }};
  height: 100%;
  transform: ${(props) => {
    return props.open ? "none" : `translate3d(100%, 0, 0)`;
  }};
  box-shadow: ${(props) => {
    return props.open ? props.theme.shadows.outerShadow : "";
  }};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Right }";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;
function Layout({
  header,
  id,
  left,
  main,
  bottom,
  right,
  footer,
}) {
  const screenSmall = window.matchMedia(screen.small);
  const screenMedium = window.matchMedia(screen.medium);
  const screenLarge = window.matchMedia(screen.large);

  let leftWidth;
  let mainLeft;
  let mainWidth;
  let rightWidth;
  let centerBottom;
  let bottomHeight;
  let zIndex = null; // shared by all
  if (screenMedium.matches || screenLarge.matches) {
    leftWidth = "15%";
    mainWidth = "100%";
    rightWidth = "25%";
    bottomHeight = "40%";
    zIndex = "1";
  } else {
    leftWidth = "100%";
    mainWidth = "100%";
    rightWidth = "100%";
    bottomHeight = "60%";
    zIndex = "1";
  }

  let leftOpen = false;
  let setLeftOpen = null;
  if (left) {
    // default open if left section is specified but visible is not
    leftOpen = typeof left.visible === "boolean" ? left.visible : true;
    setLeftOpen = left.toggle;
  }

  let rightOpen = false;
  let setRightOpen = null;
  if (right) {
    // default open if right section is specified but visible is not
    rightOpen = typeof right.visible === "boolean" ? right.visible : true;
    setRightOpen = right.toggle;
  }

  let bottomOpen = false;
  let setBottomOpen = null;
  if (bottom) {
    // default open if bottom section is specified but visible is not
    bottomOpen = typeof bottom.visible === "boolean" ? bottom.visible : true;
    setBottomOpen = bottom.toggle;
  }

  if (left) {
    if (!setLeftOpen) [leftOpen, setLeftOpen] = useState(leftOpen);
    // On larger screens, both left and right regions can be open at the same time
    if (screenLarge.matches || screenMedium.matches) {
      if (leftOpen) {
        mainLeft = "15%";
        mainWidth = "85%";
        if (rightOpen) {
          mainWidth = "60%";
        }
      } else {
        mainLeft = "0";
      }
    }
    // On small screens, either the left or right region can be open, but not both.
    // If the right region was previously open, it's state is restored when the left region is closed.
    if (screenSmall.matches) {
      // if (leftOpen) {
      //   rightOpen = false;
      // }
    }
  }

  if (right) {
    if (!setRightOpen) [rightOpen, setRightOpen] = useState(rightOpen);
    // On larger screens, both left and right regions can be open at the same time
    // if (screenLarge.matches || screenMedium.matches) {
    if (rightOpen) {
      mainWidth = "75%";
      if (leftOpen) {
        mainWidth = "60%";
      }
    }
    // }
    // On small screens, either the left or right region can be open, but not both.
    // If the left region was previously open, it's state is restored when the right region is closed.
    if (screenSmall.matches) {
      // if (rightOpen) {
      //   leftOpen = false;
      // }
    }
  }

  if (bottom) {
    if (!setBottomOpen) [bottomOpen, setBottomOpen] = useState(bottomOpen);
    // large/Medium screens
    if (screenLarge.matches || screenMedium.matches) {
      if (bottomOpen) {
        centerBottom = "40%";
      } else {
        centerBottom = "0";
      }
      // Small screens (default)
    } else if (bottomOpen) {
      centerBottom = "60%";
    } else {
      centerBottom = "0";
    }
  }

  return (
    <WrapperOuter id={id} >
      {header ? (
        <Header
          id={header.id}
          zIndex={zIndex}
        >
          {header.content}
        </Header>
      ) : null}
      <Body>
        {left ? (
          <RegionLeft
            id={left.id}
            open={leftOpen}
            width={leftWidth}
            zIndex={zIndex}
          >
            {left.content}
          </RegionLeft>
        ) : null}
        <WrapperMain height={bottomHeight} left={mainLeft} width={mainWidth}>
          <RegionCenter bottom={centerBottom} id={main.id}>
            {main.content}
          </RegionCenter>
          {bottom ? (
            <RegionBottom
              height={bottomHeight}
              id={bottom.id}
              open={bottomOpen}
              zIndex={zIndex}
            >
              {bottom.content}
            </RegionBottom>) : null}
        </WrapperMain>
        {right ? (
          <RegionRight
            id={right.id}
            open={rightOpen}
            width={rightWidth}
            zIndex={zIndex}
          >
            {right.content}
          </RegionRight>
        ) : null}
      </Body>
      {footer ? (
        <Footer
          id={footer.id}
          zIndex={zIndex}
        >
          {footer.content}
        </Footer>
      ) : null}
    </WrapperOuter>
  );
}

Layout.propTypes = {
  id: PropTypes.string,
  header: PropTypes.shape({
    content: PropTypes.node,
    id: PropTypes.string,
  }),
  left: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
    toggle: PropTypes.func,
    visible: PropTypes.string,
  }),
  main: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
  }),
  bottom: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
    toggle: PropTypes.func,
    visible: PropTypes.string,
  }),
  right: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
    toggle: PropTypes.func,
    visible: PropTypes.string,
  }),
  footer: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
  }),
};

Layout.defaultProps = {
  id: null,
  header: null,
  left: null,
  main: { content: null },
  bottom: null,
  right: null,
  footer: null,
};

export default Layout;
