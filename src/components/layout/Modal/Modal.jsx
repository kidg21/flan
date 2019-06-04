import React, { Fragment } from "react";
import styled, { css, keyframes } from "styled-components";
import { fonts, colors, shadows, screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders";
import Icon from "atoms/Icon";
import Mapbox from "layout/Map";

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
`;

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

const ContentWrapper = styled.span`
  /* Needed for passing properties to children (animation, etc.) */
`;

const Image = styled.img`
  width: auto;
  max-height: 100%;
  border: 1px solid hsl(0, 100%, 100%);
`;

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
  padding: 0.5rem;
  background-blend-mode: multiply;
  pointer-events: ${props => (props.hideBG ? "none" : "")};
  overflow: hidden;
  ${ContentWrapper}, ${Image} {
    animation-name: ${props => (props.move ? moveDown : moveUp)};
    animation-duration: 0.6s;
    transform-origin: top;
    pointer-events: initial;
    @media ${screen.medium} {
      max-width: 50vw;
    }
    @media ${screen.large} {
      max-width: 40vw;
    }
  }
  ${Image} {
    max-width: 98vw;
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
  background-color: hsla(34, 5%, 12%, 0.8);
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

const Text = styled.h5`
  color: ${colors.white};
  margin: 0;
  padding: 1rem 0;
`;

function Modal({
  id,
  type,
  visible,
  onClose,
  text,
  image,
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
  let modalType;
  let justifyContent;
  switch (type) {
    case "text":
      modalType = (
        <Fragment>
          <ModalBG onClick={onClose} opacity={opacity} />
          <ContentWrapper>
            <Text>{text}</Text>
          </ContentWrapper>
        </Fragment>
      );
      break;
    case "map":
      modalType = (
        <Fragment>
          <Mapbox />
          <Close onClick={onClose}>
            <Icon icon="times" size="lg" fixedWidth />
          </Close>
        </Fragment>
      );
      break;
    case "image":
      modalType = ((justifyContent = "center"),
      (
        <Fragment>
          <ModalBG onClick={onClose} opacity={opacity} />
          <Image src={image} />
          <Close onClick={onClose}>
            <Icon icon="times" size="lg" inverse fixedWidth />
          </Close>
        </Fragment>
      ));
      break;
    case "status":
      modalType = (
        <Fragment>
          <ContentWrapper>{children}</ContentWrapper>
        </Fragment>
      );
      break;
    default:
      modalType = ((justifyContent = "center"),
      (
        <Fragment>
          <ModalBG onClick={onClose} opacity={opacity} />
          <ContentWrapper>{children}</ContentWrapper>
        </Fragment>
      ));
      break;
  }
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
      image={image}
      visible={visible}
      scale={scale}
      move={move}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      justifyContent={justifyContent}
      hideBG={hideBG}
      hideClose={hideClose}
      children={children}
    >
      {modalType}
    </ModalContainer>
  );
}

export default Modal;
