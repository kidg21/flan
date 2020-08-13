/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable security/detect-object-injection */
import React, {
  useRef, useState, useLayoutEffect, useMemo, useEffect,
} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  useId,
  useInterval,
  useOnClickOutside,
  useZIndex,
} from "utils/hooks";
import Portal from "utils/Portal";
import { formatPixelValue } from "utils/format";

const popperZIndex = 500;

const AnchorWrapper = styled.div`
  display: flex;
  flex: auto;
  width: ${(props) => {
    return props.isFlex ? "" : "max-content";
  }};
`;

const NonPortalWrapper = styled.div`
  display: ${(props) => {
    return props.isFlex ? "flex" : "";
  }};
  position: relative;
  width: ${(props) => {
    return props.isFlex ? "" : "max-content";
  }};
`;

const PopperWrapper = styled.div`
  position: ${(props) => {
    return props.usePortal ? "fixed" : "absolute";
  }};
  z-index: ${(props) => {
    return props.zIndex;
  }};
  top: ${(props) => {
    const top = props.usePortal ? formatPixelValue(props.top) : props.top;
    return top || "";
  }};
  left: ${(props) => {
    const left = props.usePortal ? formatPixelValue(props.left) : props.left;
    return left || "";
  }};
  transform: ${(props) => {
    return props.transform || "";
  }};
  width: max-content;
`;

const flipX = "translateX(-100%)";
const flipY = "translateY(-100%)";
const flipXY = "translate(-100%, -100%)";

const PortalPopper = ({
  anchor,
  anchorRef,
  children,
  closeOnClickAway,
  id,
  isFlex,
  onClose,
  position,
  visible,
  zIndex,
  isTracking,
  trackingInterval,
}) => {
  const defaultAnchorRef = useRef();
  const _anchorRef = anchorRef || defaultAnchorRef;
  const popperRef = useRef();
  const [anchorBounds, setAnchorBounds] = useState({});
  // need to pass in 2 refs, one for the anchor (button) element & one for pieces in the portal
  useOnClickOutside(onClose, (visible && closeOnClickAway), _anchorRef, popperRef);

  // initial location of the anchor to open the popper
  useLayoutEffect(() => {
    if (visible && _anchorRef && _anchorRef.current) {
      // measure/get position of the anchor element
      setAnchorBounds(_anchorRef.current.getBoundingClientRect().toJSON());
    }
  }, [_anchorRef, _anchorRef.current, visible]);

  // track location of the anchor to update the position of the popper
  // enable tracking when visible & isTracking param is true
  useInterval(() => {
    if (_anchorRef && _anchorRef.current) {
      // measure/get position of the anchor element
      const currAnchorBounds = _anchorRef.current.getBoundingClientRect().toJSON();
      // check to see if current & previous values are equal
      const currVals = Object.values(currAnchorBounds);
      const prevVals = Object.values(anchorBounds);
      let isEqual = false;
      if (currVals.length === prevVals.length) {
        isEqual = true;
        for (let i = 0; i < prevVals.length; i++) {
          if (prevVals[i] !== currVals[i]) {
            isEqual = false;
            break;
          }
        }
      }
      if (!isEqual) {
        // anchor moved, update popper location
        setAnchorBounds(currAnchorBounds);
      }
    }
  }, visible && isTracking, trackingInterval);

  const positionStyle = useMemo(() => {
    const resultStyle = {};
    // portal, position is based on anchorRef's position/measurements
    switch (position.toLowerCase()) {
      case "topleft":
        resultStyle.top = anchorBounds.top;
        resultStyle.left = anchorBounds.right;
        resultStyle.transform = flipXY;
        break;
      case "topright":
        resultStyle.top = anchorBounds.top;
        resultStyle.left = anchorBounds.left;
        resultStyle.transform = flipY;
        break;
      case "bottomleft":
        resultStyle.top = anchorBounds.bottom;
        resultStyle.left = anchorBounds.right;
        resultStyle.transform = flipX;
        break;
      case "bottomright":
      default:
        resultStyle.top = anchorBounds.bottom;
        resultStyle.left = anchorBounds.left;
        break;
    }
    return resultStyle;
  }, [anchorBounds, position]);

  const anchorElement = anchorRef ? anchor : (
    <AnchorWrapper ref={_anchorRef} isFlex={isFlex}>
      {anchor}
    </AnchorWrapper>
  );

  return (
    <React.Fragment>
      {anchorElement}
      {visible ? (
        <Portal id={`popper-portal-${id}`}>
          <PopperWrapper
            usePortal
            id={`popper-wrapper${id}`}
            zIndex={zIndex}
            {...positionStyle}
            ref={popperRef}
          >
            {children}
          </PopperWrapper>
        </Portal>
      ) : null}
    </React.Fragment>
  );
};

const absolutePositionStyle = {
  topleft: {
    top: "0",
    left: "100%",
    transform: flipXY,
  },
  topright: {
    top: "0",
    transform: flipY,
  },
  bottomleft: {
    top: "100%",
    left: "100%",
    transform: flipX,
  },
  bottomright: {
    top: "100%",
  },
};

const NonPortalPopper = ({
  anchor,
  children,
  closeOnClickAway,
  id,
  isFlex,
  position,
  visible,
  onClose,
  zIndex,
}) => {
  const popperRef = useRef();
  useOnClickOutside(onClose, (visible && closeOnClickAway), popperRef);
  const validPosition = absolutePositionStyle.hasOwnProperty(position.toLowerCase()) ? position : "bottomRight";
  const positionStyle = absolutePositionStyle[validPosition.toLowerCase()];
  return (
    <NonPortalWrapper id={id} isFlex={isFlex} ref={popperRef}>
      {anchor}
      {visible ? (
        <PopperWrapper
          id={`popper-wrapper${id}`}
          zIndex={zIndex}
          {...positionStyle}
        >
          {children}
        </PopperWrapper>
      ) : null}
    </NonPortalWrapper>
  );
};

const Popper = (props) => {
  const {
    id,
    usePortal,
    closeOnScroll,
    visible,
    onClose,
    zIndex,
  } = props;
  const uId = useId(id);
  const scrollListener = useRef();
  // manages zIndex if static zIndex isn't provided to open on top
  const _zIndex = useZIndex("popper", zIndex, popperZIndex, visible);

  // default portals to closeOnScroll if not specified since they have a fixed position
  // portal poppers don't update their position once they are visible if their anchor moves
  // we could probably support this in the future if needed.
  const _closeOnScroll = typeof closeOnScroll !== "boolean" ? usePortal : closeOnScroll;
  useEffect(() => {
    if (_closeOnScroll && visible && onClose) {
      scrollListener.current = onClose;
      window.addEventListener("scroll", onClose);
    }
    return () => {
      if (scrollListener.current) {
        // unfortunately, we need to update everytime onClose changes
        // make sure to memoize the function to optimize adding/removing the event listener
        window.removeEventListener("scroll", scrollListener.current);
      }
    };
  }, [_closeOnScroll, visible, onClose]);

  return usePortal
    ? <PortalPopper {...props} id={uId} zIndex={_zIndex} />
    : <NonPortalPopper {...props} id={uId} zIndex={_zIndex} />;
};

Popper.defaultProps = {
  anchor: null,
  anchorRef: null,
  children: null,
  closeOnClickAway: true,
  closeOnScroll: undefined,
  id: "",
  isFlex: false,
  isTracking: true,
  onClose: null,
  position: "bottomRight",
  trackingInterval: 500,
  usePortal: false,
  visible: false,
  zIndex: undefined,
};
PortalPopper.defaultProps = Popper.defaultProps;
NonPortalPopper.defaultProps = Popper.defaultProps;

Popper.propTypes = {
  /** anchor element to open around */
  anchor: PropTypes.node,
  /** ref of outside element to be the anchor, can only be used with portal */
  anchorRef: PropTypes.shape({
    current: PropTypes.any,
  }),
  /** pop-out content shown when visible */
  children: PropTypes.node,
  /** close popper when clicking outside of pop-out */
  closeOnClickAway: PropTypes.bool,
  /** close popper on window scroll, by default portal closes on scroll */
  closeOnScroll: PropTypes.bool,
  /** id of popper */
  id: PropTypes.string,
  /** to specify an anchor element to be flex */
  isFlex: PropTypes.bool,
  /** track location of anchor element to update popper location when using portal */
  isTracking: PropTypes.bool,
  /** onClose callback when popper closes */
  onClose: PropTypes.func,
  /** places popper content in a portal */
  usePortal: PropTypes.bool,
  /** open position relative to anchor element */
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "",
  ]),
  /** interval time in ms for portal popper to track location */
  trackingInterval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** open/close state of popper */
  visible: PropTypes.bool,
  /** to specify static zIndex of pop-out wrapper, defaults to 500 */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
PortalPopper.propTypes = Popper.propTypes;
NonPortalPopper.propTypes = Popper.propTypes;
export default Popper;
