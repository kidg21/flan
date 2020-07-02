/* eslint-disable linebreak-style */
import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import GlobalStyles from "GlobalStyles";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DMPTheme, screen } from "Variables";
import { PlaceholderText, getGuid } from "helpers";
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: auto;
  max-height: 100%;
  border: 1px solid hsl(0, 100%, 100%);
`;

const ModalContainer = styled.div`
  position: fixed;
  display: ${(props) => { return (props.visible || props.action === "open" ? "flex" : "none"); }};
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

const animationId = "animation";

function Modal({
  align,
  animationDuration,
  ariaDescribedBy,
  ariaLabelledBy,
  children,
  id,
  media,
  hasBackdrop,
  onAnimationStart,
  onAnimationEnd,
  onClick,
  onClose,
  text,
  visible,
}) {
  let modalContent;
  let justifyContent;
  const pointerEvents = hasBackdrop ? "auto" : "none";
  const uId = useMemo(() => { return id || getGuid(); }, [id]);

  if (text && !media) {
    modalContent = (
      <ContentWrapper id={animationId} onClick={onClick}>
        <Card description={text} shadow="2x" />
      </ContentWrapper>
    );
    /** TODO: Structure this similar to the Card 'media' prop using 'mimeType' */
  } else if (media) {
    justifyContent = "center";
    modalContent = (
      <Fragment>
        <Image id={animationId} src={media} onClick={onClick} />
        <Close onClick={onClose}>
          <Icon icon="close" variant="inverse" size="lg" fixedWidth />
        </Close>
      </Fragment>
    );
  } else {
    justifyContent = "center";
    modalContent = (<ContentWrapper id={animationId}>{children}</ContentWrapper>);
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
  // internal state to know when content is fully visible or fully hidden
  // animation takes time!
  const [state, setState] = useState({
    action: visible ? "open" : "close",
    visible: visible,
  });

  useEffect(() => {
    if (!animationDuration) {
      setState({ visible });
    } else if (state.visible !== visible) {
      // init animation
      setState((oldState) => {
        return {
          ...oldState,
          action: visible ? "open" : "close",
        };
      });
    }
  }, [state.visible, visible]);

  // use to be notified when content is fully visible or fully hidden
  const endAnimation = useCallback((e) => {
    // if hasBackdrop, the ModalBG animation bubbles up
    // causing 2 onAnimationEnd events to fire
    // id matches the ContentWrapper or Image which is animationId
    if (e.target.id === animationId) {
      // animation completed, update internal visible state
      setState((oldState) => {
        return {
          ...oldState,
          visible,
        };
      });
      if (onAnimationEnd) onAnimationEnd(e);
    }
  }, [onAnimationEnd, visible]);

  const startAnimation = useCallback((e) => {
    // if hasBackdrop, the ModalBG animation bubbles up
    // causing 2 onAnimationEnd events to fire
    // id matches the ContentWrapper or Image which is animationId
    if (e.target.id === animationId) {
      if (onAnimationStart) onAnimationStart(e);
    }
  }, [onAnimationStart]);

  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={DMPTheme}>
        <ModalContainer
          action={state.action}
          align={align}
          animationDuration={animationDuration}
          aria-describedby={ariaDescribedBy}
          aria-labelledby={ariaLabelledBy}
          id={uId}
          hasBackdrop={hasBackdrop}
          justifyContent={justifyContent}
          pointerEvents={pointerEvents}
          visible={state.visible}
          onAnimationStart={startAnimation}
          onAnimationEnd={endAnimation}
        >
          {hasBackdrop ? (
            <ModalBG
              id={`modal-bg-${uId}`}
              action={state.action}
              animationDuration={animationDuration}
              onClick={onClose}
            />
          ) : null}
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
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  media: PropTypes.string,
  hasBackdrop: PropTypes.bool,
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  text: PropTypes.string,
  visible: PropTypes.bool,
};

Modal.defaultProps = {
  align: "center",
  animationDuration: 0.6,
  ariaDescribedBy: null,
  ariaLabelledBy: null,
  children: null,
  id: "",
  media: null,
  hasBackdrop: true,
  onAnimationStart: null,
  onAnimationEnd: null,
  onClick: null,
  onClose: null,
  text: null,
  visible: false,
};
