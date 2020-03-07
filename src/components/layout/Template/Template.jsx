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
import Avatar from "atoms/Avatar";
import Icon from "atoms/Icon";

const TemplateWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Header = styled(Bar)`
  /* For Dev purposes */
  border-bottom: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
  }};
`;

const Footer = styled(Bar)`
  /* For Dev purposes */
  border-top: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
  }};
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
  position: ${(props) => {
    return props.position || "absolute";
  }};
  flex: none;
  transform: ${(props) => {
    return props.open ? "none" : `translate3d(-100%, 0, 0)`;
  }};
  width: ${(props) => {
    return props.leftWidth || "";
  }};
  height: 100%;
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
  position: absolute;
  left: ${(props) => {
    return props.mainLeft || "";
  }};
  flex: auto;
  flex-direction: column;
  height: 100%;
  width: ${(props) => {
    return props.mainWidth || "";
  }};
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

const RegionMain = styled(Flex)`
  flex: ${(props) => {
    return props.flexTop;
  }};
  align-self: stretch;
  height: 100%;
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
  bottom: 0;
  height: ${(props) => {
    return props.bottomHeight;
  }};
  @media (min-width: ${viewport.medium}) {
    max-height: ${(props) => {
    return props.open ? "" : "0";
  }};
  }
  transform: ${(props) => {
    return props.open ? "translateY(0%)" : "translateY(100%)";
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
  position: ${(props) => {
    return props.position || "absolute";
  }};
  flex: none;
  right: 0;
  transform: ${(props) => {
    return props.open ? "none" : `translate3d(100%, 0, 0)`;
  }};
  width: ${(props) => {
    return props.rightWidth || "";
  }};
  height: 100%;
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

  let flexTop;
  let leftEdge;
  let leftWidth;
  let mainLeft;
  let mainWidth;
  let rightEdge;
  let rightWidth;
  const bottomHeight = "50vh";
  let zIndex = null; // shared by all
  let position = null; // shared by all
  if (screenMedium.matches || screenLarge.matches) {
    leftWidth = "15%"; // these will most likely need different sizes
    rightWidth = "25%";
  } else {
    leftWidth = "100%";
    mainWidth = "100%";
    rightWidth = "100%";
    position = "absolute";
    zIndex = "1";
  }
  let seeLeftRegion = null;
  let leftOpen = left ? left.visible : false;
  let setLeftOpen = left ? left.toggle : null;

  let seeRightRegion = null;
  let rightOpen = right ? right.visible : false;
  let setRightOpen = right ? right.toggle : null;

  // let seeBottomRegion = null;
  const bottomOpen = bottom ? bottom.visible : false;
  // let setBottomOpen = bottom ? bottom.toggle : false;

  if (bottomOpen) {
    flexTop = "auto";
  } else {
    flexTop = "none";
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
        mainWidth = "100%";
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
        // setMainWidth(mainWidth = rightOpen ? "75%" : "100%");
      };
      if (rightOpen) {
        mainWidth = "75%";
        if (leftOpen) {
          mainWidth = "60%";
        }
      } else {
        mainWidth = "100%";
        if (leftOpen) {
          // mainWidth = "85%";
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
    <TemplateWrapper id={id} >
      {header ? (
        <Header
          id={header.id}
          contentAlign="center"
          /** TODO: Separate left/right width */
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
            <Icon
              size="lg"
              icon={header.iconRight || "settings"}
              onClick={seeRightRegion}
            />
          }
        />
      ) : null}
      <Body>
        {left.content ? (
          <RegionLeft
            id={left.id}
            position={position}
            left={leftEdge}
            width={leftWidth}
            zIndex={zIndex}
            open={leftOpen}
          >
            {left.content}
          </RegionLeft>
        ) : null}
        <WrapperMain left={mainLeft} width={mainWidth}>
          <RegionMain id={main.id} flexTop={flexTop}>
            {main.content}
          </RegionMain>
          {bottom ? (
            <RegionBottom
              height={bottomHeight}
              id={bottom.id}
              zIndex={zIndex}
              open={bottomOpen}
            >
              {bottom.content}
            </RegionBottom>) : null}
        </WrapperMain>
        {right ? (
          <RegionRight
            id={right.id}
            position={position}
            left={rightEdge}
            width={rightWidth}
            zIndex={zIndex}
            open={rightOpen}
          >
            {right.content}
          </RegionRight>
        ) : null}
      </Body>
      {footer.content ? (
        <Footer
          center={footer.content}
          centerAlign="left"
          contentAlign="center"
          id={footer.id}
          padding="2x"
        />
      ) : null}
    </TemplateWrapper>
  );
}

Template.propTypes = {
  id: PropTypes.string,
  header: PropTypes.shape({
    content: PropTypes.node,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    id: PropTypes.string,
    right: PropTypes.node,
    width: PropTypes.string,
  }),
  left: PropTypes.shape({
    content: PropTypes.node.isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
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
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
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
    iconLeft: null,
    iconRight: null,
    id: null,
    right: null,
    width: null,
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
