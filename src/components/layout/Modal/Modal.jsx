import React from "react";
import styled, { css, keyframes } from "styled-components";
import { fonts, colors, shadows, screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders";
import Icon from "atoms/Icon";

const fadeIn = keyframes`
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

const grow = keyframes`
  from {
    transform: scale3D(.9, .9, .9);
  }

  to {
    transform: scale3D(1, 1, 1);
  }
`;

const shrink = keyframes`
  from {
    transform: scale3D(1, 1, 1);
  }

  to {
    transform: scale3D(.6, .6, .6);
  }
`;

const up = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-2rem);
    opacity: 0;
  }
`;

const down = keyframes`
  from {
    transform: translateY(-2rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContentWrapper = styled.span``;

const ModalContainer = styled.div`
  position: absolute;
  display: ${props => (props.visible ? "flex" : "none")};
  z-index: 1005;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-height: 100vh;
  align-items: center;
  justify-content: ${props => props.justifyContent || ""};
  flex-direction: column;
  padding: 0.25rem;
  background-blend-mode: multiply;
  pointer-events: ${props => (props.hideBG ? "none" : "")};
  /* animation-name: ${props => (props.opacity ? fadeIn : fadeOut)}; */
  /* animation-duration: 0.6s; */
  ${ContentWrapper} {
    /* animation-name: ${props => (props.scale ? grow : shrink)}; */
    animation-name: ${props => (props.move ? down : up)};
    animation-duration: 0.6s;
    transform-origin: top;
    pointer-events: initial;
    @media ${screen.medium} {
      max-width: 50vw;
    }
    @media ${screen.large} {
      max-width: 30vw;
    }
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      white-space: pre;
      ${PlaceholderText}
      content: "{ Modal }";
    }
  }
`;

const ModalBG = styled.div`
  z-index: -1;
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  /* background-color: ${colors.black}; */
  /* background-color: hsla(${colors.black}, 0.333333); */
  background-color: hsla(34, 5%, 12%, 0.8);
  /* opacity: 0.8; */
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  animation-name: ${props => (props.opacity ? fadeIn : fadeOut)};
  animation-duration: 0.6s;
`;

const Close = styled.section`
  position: absolute;
  top: 1em;
  right: 1em;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

function Modal({
  id,
  type,
  visible,
  onClose,
  ariaLabelledby,
  ariaDescribedby,
  align,
  hideBG,
  hideClose,
  opacity,
  scale,
  move,
  children
}) {
  let justifyContent;
  switch (align) {
    case "center":
      justifyContent = "center";
      break;
    case "bottom":
      justifyContent = "flex-end";
      break;
    default:
      break;
  }
  return (
    <ModalContainer
      id={id}
      type={type}
      visible={visible}
      // opacity={opacity}
      scale={scale}
      move={move}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      justifyContent={justifyContent}
      hideBG={hideBG}
      hideClose={hideClose}
      children={children}
    >
      {hideBG ? null : <ModalBG onClick={onClose} opacity={opacity} />}
      <ContentWrapper>{children}</ContentWrapper>
      {hideBG || hideClose ? null : (
        <Close onClick={onClose}>
          <Icon icon="times" size="lg" inverse />
        </Close>
      )}
    </ModalContainer>
  );
}

export default Modal;
