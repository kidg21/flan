import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
<<<<<<< HEAD
import Icon from "atoms/Icon";
import Switch from "atoms/Switch";
import IconBlock from "blocks/IconBlock";


const Slot = styled.div`
  display: flex;
  flex: auto;
  justify-content: ${props => props.justifyContent || "space-between"};
  text-align: ${props => props.textAlign || ""};
  // width: ${props => props.widthSlot || ""};
`;
=======
>>>>>>> master

const BarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 0.75em;
`;

const Slot = styled.div`
  display: flex;
  flex: auto;
  justify-content: ${props => props.justifyContent || "space-between"};
  text-align: ${props => props.textAlign || ""};
  margin: ${props => props.slotMargin || ""};
`;

function Bar({ id, left, center, right, onClick }) {
  return (
    <BarLayout id={id} onClick={onClick}>
      {left ? <Slot slotMargin={"0 0.5em 0 0"}>{left}</Slot> : null}
      {center ? (
        <Slot justifyContent={"center"} textAlign={"center"}>
          {center}
        </Slot>
      ) : null}
      {right ? (
        <Slot justifyContent={"flex-end"} textAlign={"right"} slotMargin={"0 0 0 0.5em"}>
          {right}
        </Slot>
      ) : null}
    </BarLayout>
  );
}
Bar.propTypes = {
  id: PropTypes.string,
  left: PropTypes.any,
  center: PropTypes.any,
  right: PropTypes.any,
  onClick: PropTypes.func,
};

export default Bar;
