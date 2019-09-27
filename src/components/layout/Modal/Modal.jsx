import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import { screen } from "Variables";
import { PlaceholderText } from "helpers";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import { Description } from "base/Typography";

/** TODO: Add these to an 'Animation' library...also, create 'Animation' library */
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

/** COMMENT: Not used but need to keep for above TODO */
// const scaleUp = keyframes`
//   from {
//     transform: scale3D(.9, .9, .9);
//   }

//   to {
//     transform: scale3D(1, 1, 1);
//   }
// `;

// const scaleDown = keyframes`
//   from {
//     transform: scale3D(1, 1, 1);
//   }

//   to {
//     transform: scale3D(.6, .6, .6);
//   }
// `;

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
  position: fixed;
  display: ${(props) => { return (props.visible ? "flex" : "none"); }};
  z-index: 1005;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-height: 100vh;
  align-items: center;
  justify-content: ${(props) => { return props.justifyContent || ""; }};
  flex-direction: column;
  padding: 0.5rem;
  background-blend-mode: multiply;
  pointer-events: ${(props) => { return props.pointerEvents || ""; }};
  overflow: hidden;
  ${ContentWrapper}, ${Image} {
    animation-name: ${(props) => {
      if (!props.action) return null;
      return props.action === "open" ? moveDown : moveUp;
    }};
    animation-duration: ${(props) => {
      return props.action && typeof props.slideDuration === "number" ? `${props.slideDuration}s` : null;
    }};
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
  animation-name: ${(props) => {
    if (!props.action) return null;
    return props.action === "open" ? fadeIn : fadeOut;
  }};
  animation-duration: ${(props) => { return props.action && typeof props.fadeDuration === "number" ? `${props.fadeDuration}s` : null; }};
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
  align,
  onClick,
  onClose,
  visible,
  slideDuration,
  fadeDuration,
  scale,
  text,
  image,
  ariaLabelledby,
  ariaDescribedby,
  children,
  style,
}) {
  let modalContent;
  let justifyContent;
  let pointerEvents;

  if (text) {
    modalContent = (
      <ContentWrapper onClick={onClick} style={style}>
        <Description text={text} type="inverse" />
      </ContentWrapper>
    );
  } else if (image) {
    justifyContent = "center";
    modalContent = (
      <Fragment>
        <Image src={image} onClick={onClick} style={style} />
        <Close onClick={onClose}>
          <Icon icon="close" type="inverse" size="lg" inverse fixedWidth />
        </Close>
      </Fragment>
    );
  } else {
    justifyContent = "center";
    modalContent = (<ContentWrapper style={style}>{children}</ContentWrapper>);
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

  // Hide container when fade is complete
  let action = null;
  const [state, setState] = useState({
    visible: false,
    animation: null,
  });

  function beginAnimation() {
    action = visible ? "open" : "close";
    state.animation = setTimeout(() => {
      setState({ visible });
    }, (Math.max((fadeDuration || 0), (slideDuration || 0)) - 0.1) * 1000);
  }

  if (state.visible !== visible) {
    if (!state.animation) {
      beginAnimation();
    }
  } else if (state.animation) {
    clearTimeout(state.animation);
    state.visible = !state.visible;
    beginAnimation();
  }

  return (
    <ModalContainer
      id={id}
      align={align}
      visible={visible || state.visible}
      action={action}
      slideDuration={slideDuration}
      scale={scale}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      justifyContent={justifyContent}
      pointerEvents={pointerEvents}
    >
      <ModalBG onClick={onClose} action={action} fadeDuration={fadeDuration} />
      {modalContent}
    </ModalContainer>
  );
}
export default Modal;

Modal.propTypes = {
  align: PropTypes.oneOf(["default to type", "top", "center", "bottom"]),
  ariaDescribedby: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  image: PropTypes.string,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  // onDisplayComplete: PropTypes.func,
  // action: PropTypes.oneOf(["open", "close"]),
  visible: PropTypes.bool,
  slideDuration: PropTypes.number,
  fadeDuration: PropTypes.number,
  scale: PropTypes.oneOf(["scaleUp", "scaleDown"]),
  style: PropTypes.object,
  text: PropTypes.string,
};

Modal.defaultProps = {
  align: null,
  ariaLabelledby: null,
  ariaDescribedby: null,
  children: null,
  id: null,
  image: null,
  onClose: null,
  onClick: null,
  visible: false,
  slideDuration: 0.6,
  fadeDuration: 0.6,
  scale: null,
  style: null,
  text: null,
};
