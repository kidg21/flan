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

const Location = styled.div`
  display: flex;
  position: ${(props) => {
    return props.position || "absolute";
  }};
  top: ${(props) => {
    return formatPixelValue(props.top);
  }};
  left: ${(props) => {
    return formatPixelValue(props.left);
  }}
`;

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
  position ${(props) => {
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

/**
 * Helper function to append the offset translation
 * If string offset, pass in as is. If number offset, append 'px'.
 * return formats:
 *  `${transform for position} ${transform for offset}`
 *  `${transform for position}`
 *  `${transform for offset}`
 * @param {string} position popper position (i.e. "topLeft")
 * @param {string} baseTransform first translation to place popper in correct position
 * @param {string | number} offset gap value between anchor and content
 */
const appendOffsetTransform = (position, baseTransform = "", offset) => {
  let transform = baseTransform;
  // if offset is zero, "", not defined, no extra offset translation
  if (offset) {
    let _offset = offset;
    if (typeof _offset === "number") {
      // assume they want to pass in pixel value
      _offset = `${_offset.toString()}px`;
    }
    if (position.startsWith("left")) {
      transform = `${baseTransform} translateX(-${_offset})`;
    } else if (position.startsWith("right")) {
      transform = `${baseTransform} translateX(${_offset})`;
    } else if (position.startsWith("top")) {
      transform = `${baseTransform} translateY(-${_offset})`;
    } else if (position.startsWith("bottom")) {
      transform = `${baseTransform} translateY(${_offset})`;
    }
  }
  return transform;
};

const PortalPopper = ({
  anchor,
  anchorRef,
  children,
  closeOnClickAway,
  id,
  isFlex,
  offset,
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
      case "leftcenter":
        resultStyle.top = anchorBounds.top + (anchorBounds.height / 2);
        resultStyle.left = anchorBounds.left;
        resultStyle.transform = "translate(-100%, -50%)";
        break;
      case "rightcenter":
        resultStyle.top = anchorBounds.top + (anchorBounds.height / 2);
        resultStyle.left = anchorBounds.right;
        resultStyle.transform = "translate(0%, -50%)";
        break;
      case "bottomcenter":
        resultStyle.top = anchorBounds.bottom;
        resultStyle.left = anchorBounds.left + (anchorBounds.width / 2);
        resultStyle.transform = "translate(-50%)";
        break;
      case "topcenter":
        resultStyle.top = anchorBounds.top;
        resultStyle.left = anchorBounds.left + (anchorBounds.width / 2);
        resultStyle.transform = "translate(-50%, -100%)";
        break;
      case "leftdown":
        resultStyle.top = anchorBounds.top;
        resultStyle.left = anchorBounds.left;
        resultStyle.transform = flipX;
        break;
      case "rightdown":
        resultStyle.top = anchorBounds.top;
        resultStyle.left = anchorBounds.right;
        break;
      case "leftup":
        resultStyle.top = anchorBounds.bottom;
        resultStyle.left = anchorBounds.left;
        resultStyle.transform = flipXY;
        break;
      case "rightup":
        resultStyle.top = anchorBounds.bottom;
        resultStyle.left = anchorBounds.right;
        resultStyle.transform = flipY;
        break;
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
    // {translate for position} {translate for offset}
    resultStyle.transform = appendOffsetTransform(position, resultStyle.transform, offset);
    return resultStyle;
  }, [anchorBounds, position, offset]);

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

// non portal position styles
const absolutePositionStyle = {
  leftup: {
    top: "100%",
    transform: flipXY,
  },
  leftdown: {
    top: "0",
    transform: flipX,
  },
  rightup: {
    top: "100%",
    left: "100%",
    transform: flipY,
  },
  rightdown: {
    top: "0",
    left: "100%",
  },
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
  leftcenter: {
    top: "50%",
    transform: "translate(-100%, -50%)",
  },
  topcenter: {
    top: "0",
    left: "50%",
    transform: "translate(-50%, -100%)",
  },
  bottomcenter: {
    top: "100%",
    left: "50%",
    transform: "translate(-50%)",
  },
  rightcenter: {
    top: "50%",
    left: "100%",
    transform: "translate(0%, -50%)",
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
  offset,
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
          transform={appendOffsetTransform(
            validPosition.toLowerCase(),
            positionStyle.transform,
            offset,
          )}
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
    location,
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

  const popper = usePortal
    ? <PortalPopper {...props} id={uId} zIndex={_zIndex} />
    : <NonPortalPopper {...props} id={uId} zIndex={_zIndex} />;

  if (location) {
    return <Location {...location}>{popper}</Location>;
  }
  return popper;
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
  location: null,
  offset: null,
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
  /** location of popper { top, left } */
  location: PropTypes.shape({
    position: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  /** gap between anchor and content (i.e. "5px", 5, "2rem") */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** onClose callback when popper closes */
  onClose: PropTypes.func,
  /** open position relative to anchor element */
  position: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "leftDown",
    "leftUp",
    "rightDown",
    "rightUp",
    "topLeft",
    "topRight",
    "",
  ]),
  /** interval time in ms for portal popper to track location */
  trackingInterval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** places popper content in a portal */
  usePortal: PropTypes.bool,
  /** open/close state of popper */
  visible: PropTypes.bool,
  /** to specify static zIndex of pop-out wrapper, defaults to 500 */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
PortalPopper.propTypes = Popper.propTypes;
NonPortalPopper.propTypes = Popper.propTypes;
export default Popper;
