/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { viewport } from "Variables";
import LightBoxIcon from "images/LightBoxIconLogo.png";
import Flex from "layout/Flex";
import Bar from "blocks/Bar";
import IconBlock from "blocks/IconBlock";
import Avatar from "atoms/Avatar";
import Icon from "atoms/Icon";

const WrapperOuter = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Header = styled(Flex)`
  flex: none;
  /* For Dev purposes */
  border-bottom: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
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
  /* For Dev purposes */
  border-top: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
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
  background: purple;
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
  /* For Dev purposes */
  border-right: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
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
  background: green;
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
      background: goldenrod;
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
  &:empty {
    &:before {
      ${PlaceholderText};
      background: blue;
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
  /* For Dev purposes */
  border-left: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
  }};
  filter: ${(props) => {
    return props.theme.shadows.shadow1 || "";
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
  const screenMedium = window.matchMedia(`(min-width: ${viewport.medium})`);
  const screenLarge = window.matchMedia(`(min-width: ${viewport.large})`);

  let leftWidth;
  let mainLeft;
  let mainWidth;
  let rightWidth;
  let centerBottom;
  let bottomHeight;
  let zIndex = null; // shared by all
  let position = null; // shared by all
  if (screenMedium.matches || screenLarge.matches) {
    leftWidth = "15%";
    rightWidth = "25%";
    mainWidth = "100%";
    bottomHeight = "40%";
  } else {
    leftWidth = "100%";
    mainWidth = "100%";
    rightWidth = "100%";
    bottomHeight = "100%";
    position = "absolute";
    zIndex = "1";
  }
  let seeLeftRegion = null;
  let leftOpen = left ? left.visible : false;
  let setLeftOpen = left ? left.toggle : null;

  let seeRightRegion = null;
  let rightOpen = right ? right.visible : false;
  let setRightOpen = right ? right.toggle : null;

  let seeBottomRegion = null;
  let bottomOpen = bottom ? bottom.visible : false;
  let setBottomOpen = bottom ? bottom.toggle : null;

  if (bottom) {
    if (!setBottomOpen) [bottomOpen, setBottomOpen] = useState(bottom.visible);
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      seeBottomRegion = () => {
        setBottomOpen(!bottomOpen);
      };
      if (bottomOpen) {
        centerBottom = "40%";
      } else {
        centerBottom = "0";
      }
    } else {
      // On small screens, either the left or right region can be open, not both
      seeBottomRegion = () => {
        setBottomOpen(!bottomOpen);
      };
    }
  }
  if (left) {
    if (!setLeftOpen) [leftOpen, setLeftOpen] = useState(left.visible);
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      seeLeftRegion = () => {
        setLeftOpen(!leftOpen);
      };
      if (leftOpen) {
        mainLeft = "15%";
        mainWidth = "85%";
        if (rightOpen) {
          mainWidth = "60%";
        }
      } else {
        mainLeft = "0";
      }
    } else {
      // On small screens, either the left or right region can be open, not both
      seeLeftRegion = () => {
        setLeftOpen(!leftOpen);
        if (rightOpen) {
          setRightOpen(!rightOpen);
        }
      };
    }
  }
  if (right) {
    if (!setRightOpen) [rightOpen, setRightOpen] = useState(right.visible);
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      seeRightRegion = () => {
        setRightOpen(!rightOpen);
      };
      if (rightOpen) {
        mainWidth = "75%";
        if (leftOpen) {
          mainWidth = "60%";
        }
      }
    } else {
      // On small screens, either the left or right region can be open, not both
      seeRightRegion = () => {
        setRightOpen(!rightOpen);
        if (leftOpen) {
          setLeftOpen(!leftOpen);
        }
      };
    }
  }

  return (
    <WrapperOuter id={id} >
      {/* {header ? (
        <Header
          id={header.id}
          contentAlign="center"
          rightWidth={header.width}
          padding="2x"
          left={
            header.iconLeft ? (
              <Icon
                size="lg"
                icon={header.iconLeft}
                onClick={seeLeftRegion}
              />
            ) : (
                <Avatar
                  onClick={seeLeftRegion}
                  image
                  src={LightBoxIcon}
                  alt="logo"
                />
              )
          }
          center={header.content}
          right={header.right ? (
            <Fragment>
              {header.right}
            </Fragment>
          ) :
            <IconBlock>
              <Icon
                size="lg"
                icon="down"
                onClick={seeBottomRegion}
              />
              <Icon
                size="lg"
                icon={header.iconRight || "settings"}
                onClick={seeRightRegion}
              />
            </IconBlock>
          }
        />
      ) : null} */}
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
            position={position}
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
            position={position}
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
      {/* {footer.content ? (
        <Footer
          center={footer.content}
          centerAlign="left"
          contentAlign="center"
          id={footer.id}
          padding="2x"
        />
      ) : null} */}
    </WrapperOuter>
  );
}

Template.propTypes = {
  id: PropTypes.string,
  header: PropTypes.shape({
    content: PropTypes.node,
    // iconLeft: PropTypes.string,
    // iconRight: PropTypes.string,
    id: PropTypes.string,
    // right: PropTypes.node,
    // width: PropTypes.string,
  }),
  left: PropTypes.shape({
    content: PropTypes.node.isRequired,
    // iconLeft: PropTypes.string,
    // iconRight: PropTypes.string,
    id: PropTypes.string,
    toggle: PropTypes.func,
    visible: PropTypes.string,
  }),
  // main: PropTypes.node.isRequired,
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
    // iconLeft: PropTypes.string,
    // iconRight: PropTypes.string,
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
    // iconLeft: null,
    // iconRight: null,
    id: null,
    // right: null,
    // width: null,
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
