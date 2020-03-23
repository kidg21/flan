/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import GlobalStyles from "GlobalStyles";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DMPTheme, screen } from "Variables";
import { PlaceholderText } from "helpers";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Card from "elements/Card";

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
    return props.action && typeof props.animationDuration === "number" ? `${props.animationDuration}s` : null;
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
  /* Prototype Content - displays when empty */
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
  background-color: ${(props) => {
    return (
      props.theme.background.modal
    );
  }};
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  animation-name: ${(props) => {
    if (!props.action) return null;
    return props.action === "open" ? fadeIn : fadeOut;
  }};
  animation-duration: ${(props) => { return props.action && typeof props.animationDuration === "number" ? `${props.animationDuration}s` : null; }};
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
  align,
  animationDuration,
  ariaDescribedby,
  ariaLabelledby,
  children,
  id,
  media,
  isModal,
  onClick,
  onClose,
  text,
  visible,
}) {
  let modalContent;
  let justifyContent;
  const pointerEvents = isModal ? "auto" : "none";

  if (text && !media) {
    modalContent = (
      <ContentWrapper onClick={onClick}>
        <Card description={text} shadow="2x" />
      </ContentWrapper>
    );
    /** TODO: Structure this similar to the Card 'media' prop using 'mimeType' */
  } else if (media) {
    justifyContent = "center";
    modalContent = (
      <Fragment>
        <Image src={media} onClick={onClick} />
        <Close onClick={onClose}>
          <Icon icon="close" type="inverse" size="lg" fixedWidth />
        </Close>
      </Fragment>
    );
  } else {
    justifyContent = "center";
    modalContent = (<ContentWrapper>{children}</ContentWrapper>);
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
    }, (Math.max((animationDuration || 0), (animationDuration || 0)) - 0.1) * 1000);
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
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={DMPTheme}>
        <ModalContainer
          action={action}
          align={align}
          animationDuration={animationDuration}
          aria-describedby={ariaDescribedby}
          aria-labelledby={ariaLabelledby}
          id={id}
          isModal={isModal}
          justifyContent={justifyContent}
          pointerEvents={pointerEvents}
          visible={visible || state.visible}
        >
          {isModal ? <ModalBG
            action={action}
            animationDuration={animationDuration}
            onClick={onClose}
          /> : null}
          {modalContent}
        </ModalContainer>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default Modal;

Modal.propTypes = {
  align: PropTypes.oneOf(["top", "center", "bottom"]),
  animationDuration: PropTypes.number,
  ariaDescribedby: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  media: PropTypes.string,
  isModal: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  text: PropTypes.string,
  visible: PropTypes.bool,
};

Modal.defaultProps = {
  align: "center",
  animationDuration: 0.6,
  ariaDescribedby: null,
  ariaLabelledby: null,
  children: null,
  id: null,
  media: null,
  isModal: true,
  onClick: null,
  onClose: null,
  text: null,
  visible: false,
};
