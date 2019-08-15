import React, { Fragment } from "react";
import styled, { css, keyframes } from "styled-components";
import { fonts, colors, shadows, screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Mapbox from "layout/Map";
import { Description } from "base/Typography";

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
  pointer-events: ${props => props.pointerEvents || ""};
  overflow: hidden;
  ${ContentWrapper}, ${Image} {
    animation-name: ${props => (props.position ? moveDown : moveUp)};
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

function Modal({
  id,
  type,
  align,
  visible,
  onClick,
  onClose,
  position,
  scale,
  opacity,
  text,
  image,
  ariaLabelledby,
  ariaDescribedby,
  children,
  style,
}) {
  let modalType;
  let justifyContent;
  let pointerEvents;
  switch (type) {
    case "text":
      modalType = (
        <Fragment>
          <ModalBG onClick={onClose} opacity={opacity} />
          <ContentWrapper>
            <Description text={text} type="inverse" />
          </ContentWrapper>
        </Fragment>
      );
      break;
    case "map":
      modalType = (
        <Fragment>
          <Mapbox />
          <Close onClick={onClose}>
            <Icon icon="close" type="inverse" size="lg" fixedWidth />
          </Close>
        </Fragment>
      );
      break;
    case "image":
      justifyContent = "center";
      modalType = (
        <Fragment>
          <ModalBG onClick={onClose} opacity={opacity} />
          <Image src={image} />
          <Close onClick={onClose}>
            <Icon icon="close" type="inverse" size="lg" inverse fixedWidth />
          </Close>
        </Fragment>
      );
      break;
    default:
      justifyContent = "center";
      modalType = (
        <Fragment>
          <ModalBG onClick={onClose} opacity={opacity} />
          <ContentWrapper>{children}</ContentWrapper>
        </Fragment>
      );
      break;
  }
  switch (align) {
    case "top":
      justifyContent = "flex-start";
      break;
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
      align={align}
      visible={visible}
      image={image}
      position={position}
      scale={scale}
      opacity={opacity}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      justifyContent={justifyContent}
      pointerEvents={pointerEvents}
      onClick={onClick}
      children={children}
      style={style}
    >
      {modalType}
    </ModalContainer>
  );
}

export default Modal;

Modal.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["default", "text", "image"]),
  align: PropTypes.oneOf(["default to type", "top", "center", "bottom"]),
  visible: PropTypes.bool,
  image: PropTypes.string,
  position: PropTypes.oneOf(["moveUp", "moveDown"]),
  scale: PropTypes.oneOf(["scaleUp", "scaleDown"]),
  opacity: PropTypes.oneOf(["fadeIn", "fadeOut"]),
  onClick: PropTypes.func,
  "aria-labelledby": PropTypes.string,
  "aria-describedby": PropTypes.string,
  style: PropTypes.string,
};
