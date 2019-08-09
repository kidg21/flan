import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import { colors, shadows } from "Variables";

const Container = styled.div`
  cursor: pointer;
  padding: 0.5em;
  border: 1px solid red;
  position: relative;
  display: inline-block;
`;

const MenuContainer = styled.div`
  background: ${props => props.backgroundColor || colors.white};
  border-radius: 3px;
  margin-top: 4px;
  list-style: none;
  content-align: left;
  text-align: left;
  padding: 0.25em;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
  width: 150px;
  position: absolute;
`;

const Item = styled.li`
  padding: 0.5em 0.5em 0.5em 0.5em;
  letter-spacing: 0.5px;
`;

function Menu({ id, data, position }) {
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let badgeTransform = "translate(-90%, 50%)";
  const [visibility, setVisibility] = useState(false);
  switch (position) {
    case "topLeft":
      badgeLeft = "0";
      badgeTransform = "translate(-96%, 5%)";
      break;
    case "topRight":
      badgeTransform = "translate(-2%, 5%)";
      break;
    case "bottomRight":
      badgeBottom = "0";
      badgeTransform = "translate(-2%, 93%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-96%, 95%)";
      break;
    case "bottomCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-45%, 98%)";
      break;
    case "topCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-45%, -20%)";
      break;
    default:
      break;
  }
  return (
    <Container
      id={id}
      onClick={() => {
        setVisibility(!visibility);
      }}
    >
      <Icon icon={["far", "ellipsis-v"]} size="lg" />
      {visibility ? (
        <MenuContainer
          badgeTransform={badgeTransform}
          badgeLeft={badgeLeft}
          badgeBottom={badgeBottom}
        >
          {data.map(item => (
            <Item key={item.id}>{item.name}</Item>
          ))}
        </MenuContainer>
      ) : null}
    </Container>
  );
}

Menu.propTypes = {
  id: PropTypes.string,
  data: PropTypes.any.isRequired,
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "bottomCenter",
    "topCenter",
  ]),
};

export default Menu;
