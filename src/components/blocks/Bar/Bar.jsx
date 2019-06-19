import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Switch from "atoms/Switch";
import IconBlock from "blocks/IconBlock";

const Slot = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  justify-content: ${props =>
    props.alignCenter
      ? "center"
      : props.alignRight
      ? "flex-end"
      : "flex-start"};
  text-align: ${props =>
    props.alignCenter ? "center" : props.alignRight ? "right" : ""};
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
      {left ? <Slot>{left}</Slot> : null}
      {center ? <Slot alignCenter={true}>{center}</Slot> : null}
      {right ? <Slot alignRight={true}>{right}</Slot> : null}
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
