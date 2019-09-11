import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";


const Container = styled.div`
  cursor: pointer;
  padding: 5px;
  position: relative;
  display: inline-block;
`;

const Menu = styled.ul`
  background: ${(props) => {
    return props.theme.background.default; }};
  border: 0.5px solid #ddd;
  list-style: none;
  border-radius: 3px;
  padding: 0.25em;
  margin-top: 4px;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
  width: 150px;
  position: absolute;
`;

const Item = styled.li`
  padding: 0.5em 0.5em 0.5em 0.5em;
  letter-spacing: 0.5px;

  &:hover {
    color: ${(props) => {
      return props.theme.colors.primary; }};
  }
`;

function WhiteMenu({ id, data, position }) {
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
      <Icon icon="options" size="lg" />
      {visibility ? (
        <Menu
          badgeTransform={badgeTransform}
          badgeLeft={badgeLeft}
          badgeBottom={badgeBottom}
        >
          {data.map(item => (
            <Item key={item.id}>{item.name}</Item>
          ))}
        </Menu>
      ) : null}
    </Container>
  );
}

export default WhiteMenu;
