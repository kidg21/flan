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
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || "space-between"};
  align-items: ${props => props.alignItems || ""};
  text-align: ${props => props.textAlign || ""};
  padding: ${props => props.setPadding || ""};
  min-width: ${props => props.slotWidthMin || ""};
  max-width: ${props => props.slotWidthMax || ""};
`;

function Bar({
  id,
  left,
  center,
  right,
  onClick,
  slotWidthLeft,
  slotWidthRight,
  className,
}) {
  return (
    <BarLayout id={id} onClick={onClick} className={className}>
      {left ? (
        <Slot
          slotWidthMin={slotWidthLeft}
          slotWidthMax={slotWidthLeft}
          setPadding="0 1em 0 0"
        >
          {left}
        </Slot>
      ) : null}
      {center ? (
        <Slot justifyContent="center" alignItems="center" textAlign="center">
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="right"
          slotWidthMin={slotWidthRight}
          slotWidthMax={slotWidthRight}
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
  left: PropTypes.any,
  slotWidthLeft: PropTypes.string,
  center: PropTypes.any,
  right: PropTypes.any,
  slotWidthRight: PropTypes.string,
  onClick: PropTypes.func,
};

export default Bar;
