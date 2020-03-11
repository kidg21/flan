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
function Template({
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

  let leftOpen = left ? left.visible : false;
  let setLeftOpen = left ? left.toggle : null;

  let rightOpen = right ? right.visible : false;
  let setRightOpen = right ? right.toggle : null;

  let bottomOpen = bottom ? bottom.visible : false;
  let setBottomOpen = bottom ? bottom.toggle : null;

  if (left) {
    if (!setLeftOpen) [leftOpen, setLeftOpen] = useState(!left.visible);
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
    if (!setRightOpen) [rightOpen, setRightOpen] = useState(!right.visible);
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
    if (!setBottomOpen) [bottomOpen, setBottomOpen] = useState(bottom.visible);
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
      {header.content ? (
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
      {footer.content ? (
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

Template.propTypes = {
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

Template.defaultProps = {
  id: null,
  header: {
    content: null,
    id: null,
  },
  left: {
    content: null,
    id: null,
    toggle: null,
    visible: null,
  },
  main: {
    content: null,
    id: null,
  },
  bottom: {
    content: null,
    id: null,
    toggle: null,
    visible: null,
  },
  right: {
    content: null,
    id: null,
    toggle: null,
    visible: null,
  },
  footer: {
    content: null,
    id: null,
  },
};

export default Template;
