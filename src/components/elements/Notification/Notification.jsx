/* eslint-disable linebreak-style */
import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Card from "elements/Card";

/** TODO: Move keyframe animations into their own variable/component files */
/* const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale3D(.9, .9, .9);
  }

  to {
    transform: scale3D(1, 1, 1);
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale3D(1, 1, 1);
  }

  to {
    transform: scale3D(.6, .6, .6);
  }
`; */

const moveUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-2rem);
    opacity: 0;
  }
`;

const moveDown = keyframes`
  from {
    transform: translateY(-2rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContentWrapper = styled(Card)`
  /* Needed for passing properties to children (animation, etc.) */
`;

const NotificationContainer = styled.div`
  position: absolute;
  display: ${(props) => { return (props.visible ? "flex" : "none"); }};
  z-index: 1005;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-height: 100vh;
  align-items: center;
  justify-content: ${(props) => { return props.justifyContent || ""; }};
  @media ${screen.medium} {
    align-items: ${(props) => { return props.alignItems || ""; }};
  }
  @media ${screen.large} {
    align-items: ${(props) => { return props.alignItems || ""; }};
  }
  flex-direction: column;
  padding: 0.5rem;
  overflow: hidden;
  pointer-events: none;
  ${ContentWrapper} {
    animation-name: ${(props) => { return (props.position ? moveDown : moveUp); }};
    animation-duration: 0.6s;
    transform-origin: top;
    pointer-events: initial;
    width: 100%;
    @media ${screen.medium} {
      width: auto;
      max-width: 50vw;
    }
    @media ${screen.large} {
      width: auto;
      max-width: 40vw;
    }
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      white-space: pre;
      ${PlaceholderText}
      content: "{ Notification }";
    }
  }
`;

function Notification({
  align,
  ariaDescribedBy,
  ariaLabelledBy,
  children,
  id,
  onClick,
  position,
  visible,
}) {
  let justifyContent;
  let alignItems;
  switch (align) {
    case "topLeft":
      justifyContent = "flex-start";
      alignItems = "flex-start";
      break;
    case "topCenter":
      justifyContent = "flex-start";
      break;
    case "topRight":
      justifyContent = "flex-start";
      alignItems = "flex-end";
      break;
    case "bottomLeft":
      justifyContent = "flex-end";
      alignItems = "flex-start";
      break;
    case "bottomCenter":
      justifyContent = "flex-end";
      break;
    case "bottomRight":
      justifyContent = "flex-end";
      alignItems = "flex-end";
      break;
    default:
      break;
  }
  return (
    <NotificationContainer
      align={align}
      alignItems={alignItems}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      id={id}
      justifyContent={justifyContent}
      onClick={onClick}
      position={position}
      visible={visible}
    >
      <ContentWrapper shadow="2x">{children}</ContentWrapper>
    </NotificationContainer>
  );
}

export default Notification;

Notification.propTypes = {
  align: PropTypes.oneOf([
    "topLeft",
    "topCenter",
    "topRight",
    "bottomLeft",
    "bottomCenter",
    "bottomRight",
  ]),
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.oneOf(["moveUp", "moveDown"]),
  visible: PropTypes.bool,
};

Notification.defaultProps = {
  align: null,
  ariaDescribedBy: null,
  ariaLabelledBy: null,
  children: null,
  id: null,
  onClick: null,
  position: null,
  visible: false,
};
