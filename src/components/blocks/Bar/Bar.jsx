import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Slot = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  justify-content: ${props =>
    props.center ? "center" : props.right ? "flex-end" : ""};
  }
`;

const BarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: .75em;
  ${Slot} + ${Slot} {
    padding-left: 1em;
  }
`;

function Bar({ id, left, center, right, onClick }) {
  return (
    <BarLayout id={id} onClick={onClick}>
      {left ? <Slot left>{left}</Slot> : null}
      {center ? <Slot center>{center}</Slot> : null}
      {right ? <Slot right>{right}</Slot> : null}
    </BarLayout>
  );
}
Bar.propTypes = {
  id: PropTypes.string,
  left: PropTypes.any,
  center: PropTypes.any,
  right: PropTypes.any,
  onClick: PropTypes.func
};

export default Bar;
