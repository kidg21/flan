import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import { colors } from "Variables";
import { PlaceholderText } from "../../_helpers/Placeholders";
import Panel, { PanelSection } from "layout/Panel";
import Card, { CardList } from "layout/Card";

const OuterWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: ${colors.grey_light};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Outer Wrapper }";
    }
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex: auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
  transform: ${props => (props.leftOnscreen ? "translate3d(30%, 0, 0)" : "")};
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Inner Wrapper }";
    }
  }
`;

const LeftWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  transform: translate3d(-100%, 0, 0);
  transition: all 0.3s ease-in-out;
  width: 30%;
  background-color: ${colors.white};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      /* color: white; */
      content: "{ Left Wrapper }";
    }
  }
`;

const CenterWrapper = styled.section`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  flex: auto;
  width: ${props => (props.rightOnscreen ? "60%" : "90%")};
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Main Wrapper }";
    }
  }
`;

const PanelWrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: visible;
  filter: drop-shadow(0 0 1px #4b4844);
  drop-shadow(0 0 1rem rgba(75, 72, 68, 0.5));
  transition: all 0.3s ease-in-out;
`;

const CenterWrapperTop = styled.section`
  ${PanelWrapper};
  height: 10%;
  z-index: 1;
  transform: ${props => (props.topOnscreen ? "" : "translate3d(0, -100%, 0)")};
  filter: ${props =>
    props.topOnscreen
      ? "drop-shadow(0 0 1px black) drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5))"
      : "none"};
  background-color: ${colors.white};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      color: white;
      content: "{ Main Wrapper - Top }";
    }
  }
`;

const CenterWrapperMiddle = styled.section`
  ${PanelWrapper};
  top: ${props => (props.topOnscreen ? "10%" : "0")};
  bottom: ${props => (props.bottomOnscreen ? "40%" : "0")};
  background-color: ${colors.grey_20};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      color: white;
      content: "{ Main Wrapper - Middle }";
    }
  }
`;

const CenterWrapperBottom = styled.section`
  ${PanelWrapper};
  height: 40%;
  bottom: 0;
  z-index: 1;
  transform: ${props => (props.bottomOnscreen ? "" : "translate3d(0, 100%, 0)")};
  filter: ${props =>
    props.bottomOnscreen
      ? "drop-shadow(0 0 1px black) drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5))"
      : "none"};
  background-color: ${colors.white};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      color: white;
      content: "{ Main Wrapper - Bottom }";
    }
  }
`;

const RightWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  left: 60%;
  right: 0;
  width: 30%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  transform: ${props => (props.rightOnscreen ? "" : "translate3d(100%, 0, 0)")};
  filter: ${props =>
    props.rightOnscreen
      ? "drop-shadow(0 0 1px black) drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5))"
      : "none"};
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Right Wrapper }";
    }
  }
`;

const BarWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  top: 0;
  right: 0;
  width: 10%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: visible;
  filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.75));
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Bar }";
      color: ${colors.white};
    }
  }
`;

const buttonStyle = {
  height: "5rem",
  width: "auto",
  margin: "10% 10% 0",
  lineHeight: "1.4",
  fontWeight: "bold",
};

function LayoutMain() {
  // Wrapper Left
  const [leftOnscreen, setLeftOnscreen] = useState(false);
  function toggleLeft() {
    setLeftOnscreen(!leftOnscreen); // Toggles the Left Wrapper
    rightOnscreen ? setRightOnscreen(true) : setRightOnscreen(false); // What if the Right Wrapper is onscreen?
  }
  // Wrapper Right
  const [rightOnscreen, setRightOnscreen] = useState(false);
  function toggleRight() {
    setRightOnscreen(!rightOnscreen); // Toggles the Right Wrapper
    leftOnscreen ? [setLeftOnscreen(false), setRightOnscreen(true)] : null; // What if the Left Wrapper is onscreen?
  }
  // Wrapper Top
  const [topOnscreen, setTopOnscreen] = useState(false);
  function toggleTop() {
    setTopOnscreen(!topOnscreen); // Toggles the Top Wrapper
  }
  // Wrapper Bottom
  const [bottomOnscreen, setBottomOnscreen] = useState(false);
  function toggleBottom() {
    setBottomOnscreen(!bottomOnscreen); // Toggles the Bottom Wrapper
  }
  return (
    <OuterWrapper>
      <InnerWrapper leftOnscreen={leftOnscreen}>
        <LeftWrapper />
        <CenterWrapper rightOnscreen={rightOnscreen}>
          <CenterWrapperTop topOnscreen={topOnscreen} />
          <CenterWrapperMiddle topOnscreen={topOnscreen} bottomOnscreen={bottomOnscreen}>
            {/* <Panel>
              <PanelSection />
            </Panel> */}
          </CenterWrapperMiddle>
          <CenterWrapperBottom bottomOnscreen={bottomOnscreen} />
        </CenterWrapper>
        <RightWrapper rightOnscreen={rightOnscreen}>
          {/* <Panel>
            <PanelSection />
          </Panel> */}
        </RightWrapper>
      </InnerWrapper>
      <BarWrapper>
        <button style={buttonStyle} onClick={toggleTop}>
          Toggle Top
        </button>
        <button style={buttonStyle} onClick={toggleLeft}>
          Toggle Left
        </button>
        <button style={buttonStyle} onClick={toggleRight}>
          Toggle Right
        </button>
        <button style={buttonStyle} onClick={toggleBottom}>
          Toggle Bottom
        </button>
      </BarWrapper>
    </OuterWrapper>
  );
}

const FlexWrapper = styled.div`
  position: ${props => props.setPosition || "absolute"};
  top: ${props => props.top || ""};
  left: ${props => props.left || ""};
  bottom: ${props => props.bottom || ""};
  right: ${props => props.right || ""};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: ${props => props.alignContent || ""};
  align-items: ${props => props.alignItems || ""};
  align-self: ${props => props.alignSelf || ""};
  flex: ${props => props.setFlex || "1 1 auto"};
  flex-basis: ${props => props.flexBasis || ""};
  order: 0;
  z-index: ${props => props.zIndex || "1"};
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  background-color: ${props => props.backgroundColor || "lightblue"};
  transform: ${props => props.displayState || ""};
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Layout Wrapper }";
    }
  }
`;

function Wrapper({
  id,
  children,
  width,
  // height,
  // top,
  // left,
  // bottom,
  right,
  // visible,
  setPosition,
  flexDirection,
  alignContent,
  alignItems,
  alignSelf,
  setFlex,
  flexBasis,
  maxWidth,
  backgroundColor,
  // leftOnscreen,
  // rightOnscreen,
  // displayState,
  // wrapperWidth,
  state,
  name,
}) {
  // let width;
  // let height;
  // let left;
  // let right;
  // let wrapperLeft;
  // let wrapperWidth;
  // let backgroundColor;
  let displayState;
  switch (name) {
    case "outerWrapper":
      setPosition = "relative";
      flexDirection = "row";
      backgroundColor = "black";
      break;
    case "innerWrapper":
      setPosition = "relative";
      flexDirection = "row";
      backgroundColor = "green";
      break;
    case "contentWrapper":
      setPosition = "relative";
      flexDirection = "row";
      backgroundColor = "yellow";
      break;
    case "leftWrapper":
      width = "30%";
      // displayState = "translate3d(-100%, 0, 0)";
      backgroundColor = "lightgrey";
      break;
    case "mainWrapper":
      width = "70%";
      backgroundColor = "violet";
      break;
    case "rightWrapper":
      width = "30%";
      right = "0";
      backgroundColor = "pink";
      break;
    case "toggleWrapper":
      setPosition = "relative";
      width = "100px";
      backgroundColor = "red";
      break;
    default:
      break;
  }
  switch (state) {
    case "offscreenLeft":
      displayState = "translate3d(-100%, 0, 0)";
      break;
    case "offscreenRight":
      displayState = "translate3d(100%, 0, 0)";
      break;
    case "offscreenTop":
      displayState = "translate3d(0, -100%, 0)";
      break;
    case "offscreenBottom":
      displayState = "translate3d(0, 100%, 0)";
      break;
    case "leftOpen":
      displayState = "translate3d(30%, 0, 0)";
      break;
    case "fullScreen":
      width = "100%";
      break;
    default:
      displayState = "translate3d(0, 0, 0)";
      break;
  }
  return (
    <FlexWrapper
      id={id}
      // visible={visible}
      width={width}
      // height={height}
      // top={top}
      // left={left}
      // bottom={bottom}
      right={right}
      setPosition={setPosition}
      flexDirection={flexDirection}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      setFlex={setFlex}
      flexBasis={flexBasis}
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
      displayState={displayState}
    >
      {children}
    </FlexWrapper>
  );
}

export {
  LayoutMain as default,
  OuterWrapper,
  InnerWrapper,
  LeftWrapper,
  CenterWrapper,
  CenterWrapperTop,
  CenterWrapperMiddle,
  CenterWrapperBottom,
  RightWrapper,
  BarWrapper,
  Wrapper,
};
