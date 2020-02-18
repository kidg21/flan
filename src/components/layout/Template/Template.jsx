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
  height: 100%;
`;

const RegionLeft = styled(Flex)`
  position: ${(props) => {
    return props.leftPosition || "";
  }};
  flex: 0 1 auto;
  align-self: stretch;
  width: ${(props) => {
    return props.leftWidth || "";
  }};
  height: 100%;
  @media (min-width: ${viewport.medium}) {
    max-width: ${(props) => {
    return props.open ? "0" : "";
  }};
  }
  transform: ${(props) => {
    return props.open ? "translateX(-100%)" : "translateX(0%)";
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

const RegionMain = styled(Flex)`
  align-self: stretch;
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

const RegionRight = styled(Flex)`
  right: 0;
  flex: 0 1 auto;
  align-self: stretch;
  width: ${(props) => {
    return props.rightWidth || "";
  }};
  height: 100%;
  @media (min-width: ${viewport.medium}) {
    max-width: ${(props) => {
    return props.open ? "0" : "";
  }};
  }
  transform: ${(props) => {
    return props.open ? "translateX(100%)" : "translateX(0%)";
  }};
  /* For Dev purposes */
  border-left: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
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
  left,
  main,
  right,
  footer,
}) {
  const screenMedium = window.matchMedia(`(min-width: ${viewport.medium})`);
  const screenLarge = window.matchMedia(`(min-width: ${viewport.large})`);
  let leftPosition;
  let leftWidth;
  let leftIndex;
  let rightPosition;
  let rightWidth;
  let rightIndex;
  if (screenLarge.matches) {
    leftWidth = "20vw";
    rightWidth = "20vw";
  } else if (screenMedium.matches) {
    leftWidth = "20vw";
    rightWidth = "20vw";
  } else {
    leftPosition = "absolute";
    leftWidth = "100vw";
    leftIndex = "1";
    rightPosition = "absolute";
    rightWidth = "100vw";
    rightIndex = "1";
  }

  let seeLeftRegion = null;
  let leftOpen = left ? left.visible : false;
  let setLeftOpen = left ? left.toggle : null;
  let seeRightRegion = null;
  let rightOpen = right ? right.visible : false;
  let setRightOpen = right ? right.toggle : null;
  if (left) {
    if (!setLeftOpen) [leftOpen, setLeftOpen] = useState(left.visible);
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      seeLeftRegion = () => { setLeftOpen(!leftOpen); };
    } else {
      // On small screens, either the left or right region can be open, not both
      seeLeftRegion = () => { setLeftOpen(!leftOpen); setRightOpen(!right.visible); };
    }
  }
  if (right) {
    if (!setRightOpen) [rightOpen, setRightOpen] = useState(!right.visible);
    if (screenLarge.matches || screenMedium.matches) {
      // On larger screens, both left and right regions can be open at the same time
      seeRightRegion = () => { setRightOpen(!rightOpen); };
    } else {
      // On small screens, either the left or right region can be open, not both
      seeRightRegion = () => { setRightOpen(!rightOpen); setLeftOpen(!left.visible); };
    }
  }

  return (
    <TemplateWrapper>
      {header ? (
        <Header
          contentAlign="center"
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
          right={ header.right ? (
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
        {left ? (
          <RegionLeft
            position={leftPosition}
            width={leftWidth}
            zIndex={leftIndex}
            open={leftOpen}
          >
            {left.content}
          </RegionLeft>
        ) : null}
        <RegionMain>{main}</RegionMain>
        {right ? (
          <RegionRight
            position={rightPosition}
            width={rightWidth}
            zIndex={rightIndex}
            open={rightOpen}
          >
            {right.content}
          </RegionRight>
        ) : null}
      </Body>
      {footer.content ? (
        <Footer
          contentAlign="center"
          padding="2x"
          centerAlign="left"
          center={footer.content}
        />
      ) : null}
    </TemplateWrapper>
  );
}

Template.propTypes = {
  header: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node,
    right: PropTypes.node,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
  })),
  ]),
  left: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
  })),
  ]),
  main: PropTypes.node.isRequired,
  right: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
  })),
  ]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node.isRequired,
  })),
  ]),
};

Template.defaultProps = {
  header: {
    content: null,
    right: null,
    iconLeft: null,
    iconRight: null,
  },
  left: {
    content: null,
    visible: null,
    toggle: null,
  },
  right: {
    content: null,
    visible: null,
    toggle: null,
  },
  footer: {
    content: null,
  },
};


export default Template;
