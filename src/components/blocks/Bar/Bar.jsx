import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.75em;
`;

const Slot = styled.div`
  /* display: flex; */
  display: ${props => props.setDisplay || "flex"};
  flex: auto;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || "space-between"};
  align-items: ${props => props.alignItems || ""};
  text-align: ${props => props.textAlign || ""};
  padding: ${props => props.setPadding || ""};
  min-width: ${props => props.widthMin || ""};
  max-width: ${props => props.widthMax || ""};
`;

function Bar({
  id,
  left,
  center,
  right,
  onClick,
  setDisplay,
  widthLeft,
  widthRight,
  className,
}) {
  return (
    <BarLayout id={id} onClick={onClick} className={className}>
      {left ? (
        <Slot
          setDisplay={setDisplay}
          widthMin={widthLeft}
          widthMax={widthLeft}
          setPadding="0 1em 0 0"
        >
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot
          setDisplay={setDisplay}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="right"
          setDisplay={setDisplay}
          widthMin={widthRight}
          widthMax={widthRight}
          setPadding="0 0 0 1em"
        >
          {right}
        </Slot>
      ) : null}
    </BarLayout>
  );
}

Bar.propTypes = {
  id: PropTypes.string,
  /** Used to change the default display property
   * Default: 'flex'
   * Options: Any valid CSS value for the 'display' property
   */
  setDisplay: PropTypes.string,
  left: PropTypes.any,
  widthLeft: PropTypes.string,
  center: PropTypes.any,
  right: PropTypes.any,
  widthRight: PropTypes.string,
  onClick: PropTypes.func,
};

export default Bar;
