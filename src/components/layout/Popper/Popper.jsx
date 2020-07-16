/* eslint-disable security/detect-object-injection */
import React, { useRef, useState, useLayoutEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Portal, useId } from "helpers";

// helper function, takes a number or string
// outputs a string in "100px" format
function sanitizePixelValue(value) {
  let _value = typeof value === "number" ? value.toString() : value;
  if (_value && !_value.includes("px")) {
    _value += "px";
  }
  return _value || "";
}

// flex or max-content?
const AnchorWrapper = styled.div`
  display: flex;
  flex: auto;
  width: max-content;
`;

const NonPortalWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const PopperWrapper = styled.div`
  position ${(props) => {
    return props.portal ? "fixed" : "absolute";
  }};
  z-index: 500;
  top: ${(props) => {
    const top = props.portal ? sanitizePixelValue(props.top) : props.top;
    return top || "";
  }};
  left: ${(props) => {
    const left = props.portal ? sanitizePixelValue(props.left) : props.left;
    return left || "";
  }};
  transform: ${(props) => {
    return props.transform || "";
  }};
`;

const PopperBG = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
`;

const flipX = "translateX(-100%)";
const flipY = "translateY(-100%)";
const flipXY = "translate(-100%, -100%)";

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
    left: "100%",
    transform: flipX,
  },
};

const PortalPopper = ({
  anchor,
  anchorRef,
  children,
  id,
  onClose,
  position,
  visible,
}) => {
  const defaultAnchorRef = useRef();
  const _anchorRef = anchorRef || defaultAnchorRef;

  const [anchorBounds, setAnchorBounds] = useState({});
  useLayoutEffect(() => {
    if (visible && _anchorRef && _anchorRef.current) {
      // measure/get position of the anchor element
      setAnchorBounds(_anchorRef.current.getBoundingClientRect().toJSON());
    }
  }, [_anchorRef, visible]);

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
    <AnchorWrapper ref={_anchorRef}>
      {anchor}
    </AnchorWrapper>
  );

  return (
    <React.Fragment>
      {anchorElement}
      {visible ? (
        <Portal id={`popper-portal-${id}`}>
          <PopperWrapper
            portal
            id={`popper-wrapper${id}`}
            {...positionStyle}
          >
            {children}
          </PopperWrapper>
          {onClose ? <PopperBG onClick={onClose} /> : null}
        </Portal>
      ) : null}
    </React.Fragment>
  );
};

const NonPortalPopper = ({
  anchor,
  children,
  id,
  position,
  visible,
  onClose,
}) => {
  const positionStyle = absolutePositionStyle[position.toLowerCase()];
  return (
    <NonPortalWrapper id={id}>
      {anchor}
      {visible ? (
        <React.Fragment>
          <PopperWrapper id={`popper-wrapper${id}`} {...positionStyle}>
            {children}
          </PopperWrapper>
          {onClose ? <PopperBG onClick={onClose} /> : null}
        </React.Fragment>
      ) : null}
    </NonPortalWrapper>
  );
};

const Popper = (props) => {
  const uId = useId(props.id);
  return props.portal ? <PortalPopper {...props} id={uId} /> : <NonPortalPopper {...props} id={uId} />;
};

Popper.defaultProps = {
  anchor: null,
  anchorRef: null,
  children: null,
  id: "",
  onClose: null,
  portal: false,
  position: "",
  visible: false,
};
PortalPopper.defaultProps = Popper.defaultProps;
NonPortalPopper.defaultProps = Popper.defaultProps;

Popper.propTypes = {
  anchor: PropTypes.node,
  anchorRef: PropTypes.shape({
    current: PropTypes.any,
  }),
  children: PropTypes.node,
  id: PropTypes.string,
  onClose: PropTypes.func,
  portal: PropTypes.bool,
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "",
  ]),
  visible: PropTypes.bool,
};
PortalPopper.propTypes = Popper.propTypes;
NonPortalPopper.propTypes = Popper.propTypes;
export default Popper;
