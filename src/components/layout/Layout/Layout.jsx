/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers//Skeleton";
import { screen } from "Variables";
import Flex from "layout/Flex";

const WrapperOuter = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Header = styled(Flex)`
  flex: none;
  box-shadow: ${(props) => {
    return props.hasShadow ? props.theme.shadows.outlineShadow : "";
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
    return props.theme.shadows.outlineShadow;
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
    return props.open ? props.theme.shadows.outlineShadow : "";
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
    return props.open ? props.theme.shadows.outlineShadow : "";
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
    return props.open ? props.theme.shadows.outlineShadow : "";
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
  bottom,
  footer,
  header,
  id,
  left,
  main,
  right,
}) {
  // const screenSmall = window.matchMedia(screen.small);
  const screenMedium = window.matchMedia(screen.medium);
  const screenLarge = window.matchMedia(screen.large);

  let leftWidth;
  let mainLeft;
  let mainWidth = "100%";
  let rightWidth;
  let bottomHeight;
  let zIndex = null; // shared by all
  if (screenMedium.matches || screenLarge.matches) {
    leftWidth = "10rem";
    rightWidth = "24rem";
    bottomHeight = "20rem";
    zIndex = "1";
  } else {
    leftWidth = "100%";
    rightWidth = "100%";
    bottomHeight = "30rem";
    zIndex = "1";
  }

  // const [openOrder, setOpenOrder] = useState([]);
  // let newOpenOrder = openOrder;

  let leftOpen = false;
  if (left) {
    // default open if left section is specified but visible is not
    leftOpen = typeof left.visible === "boolean" ? left.visible : true;

    /* if (leftOpen) {
      if (newOpenOrder.indexOf("left") < 0) {
        if (newOpenOrder === openOrder) newOpenOrder = newOpenOrder.slice(0);
        newOpenOrder.unshift("left");
      }
    } else if (newOpenOrder.indexOf("left") >= 0) {
      newOpenOrder = newOpenOrder.filter((value) => {
        return value !== "left";
      });
    } */
  }

  let rightOpen = false;
  if (right) {
    // default open if right section is specified but visible is not
    rightOpen = typeof right.visible === "boolean" ? right.visible : true;

    /* if (rightOpen) {
      if (newOpenOrder.indexOf("right") < 0) {
        if (newOpenOrder === openOrder) newOpenOrder = newOpenOrder.slice(0);
        newOpenOrder.unshift("right");
      }
    } else if (newOpenOrder.indexOf("right") >= 0) {
      newOpenOrder = newOpenOrder.filter((value) => {
        return value !== "right";
      });
    } */
  }

  let bottomOpen = false;
  if (bottom) {
    // default open if bottom section is specified but visible is not
    bottomOpen = typeof bottom.visible === "boolean" ? bottom.visible : true;

    /* if (bottomOpen) {
      if (newOpenOrder.indexOf("bottom") < 0) {
        if (newOpenOrder === openOrder) newOpenOrder = newOpenOrder.slice(0);
        newOpenOrder.unshift("bottom");
      }
    } else if (newOpenOrder.indexOf("bottom") >= 0) {
      newOpenOrder = newOpenOrder.filter((value) => {
        return value !== "bottom";
      });
    } */
  }

  /* if (newOpenOrder !== openOrder) {
    setOpenOrder(newOpenOrder);
    return null;
  } */

  if (left) {
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      if (leftOpen) {
        mainLeft = `${leftWidth}`;
        mainWidth = `calc(${mainWidth} - ${leftWidth})`;
        if (rightOpen) {
          mainWidth = `calc(${mainWidth} - ${rightWidth})`;
        }
      } else {
        mainLeft = "0";
      }
    }
    /* else if (leftOpen && openOrder[0] !== "left") {
      // On small screens, either the left or right region can be open, but not both.
      // If the right region was previously open, it's state is restored when the left region is closed.
      leftOpen = false;
    } */
  }

  if (right) {
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      if (rightOpen && !leftOpen) mainWidth = `calc(${mainWidth} - ${rightWidth})`;
    }/* else if (rightOpen && openOrder[0] !== "right") {
      // On small screens, either the left or right region can be open, but not both.
      // If the left region was previously open, it's state is restored when the right region is closed.
      rightOpen = false;
    } */
  }

  /* if (bottom) {
    // large/Medium screens
    if (screenLarge.matches || screenMedium.matches) {
      if (bottomOpen) {
        centerBottom = "40%";
      }
      // Small screens (default)
    } else if (bottomOpen && openOrder[0] === "bottom") {
      centerBottom = "60%";
    }
  } */

  return (
    <WrapperOuter id={id}>
      {header ? (
        <Header
          hasShadow={typeof header.hasShadow === "boolean" ? header.hasShadow : true}
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
          <RegionCenter bottom={bottomOpen ? bottomHeight : "0"} id={main.id}>
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
            </RegionBottom>
          ) : null}
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
  bottom: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
    visible: PropTypes.bool,
  }),
  footer: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
  }),
  header: PropTypes.shape({
    content: PropTypes.node,
    hasShadow: PropTypes.bool,
    id: PropTypes.string,
  }),
  id: PropTypes.string,
  left: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
    visible: PropTypes.bool,
  }),
  main: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
  }),
  right: PropTypes.shape({
    content: PropTypes.node.isRequired,
    id: PropTypes.string,
    visible: PropTypes.bool,
  }),
};

Layout.defaultProps = {
  bottom: null,
  footer: null,
  header: null,
  id: null,
  left: null,
  main: { content: null },
  right: null,
};

export default Layout;
