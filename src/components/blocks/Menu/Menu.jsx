import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Card from "layout/Card";
import { colors } from "Variables";

const Container = styled.div`
  cursor: pointer;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;

  position: relative;
  display: inline-block;
`;

const EditMenu = styled.ul`
  background: ${props => props.backgroundColor || colors.white};
  border-radius: 3px;
  list-style: none;
  margin-top: 4px;
  z-index: 500;
  padding: 0.25em;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
  width: auto;
  min-width: 10em;
  // border: 1px solid;
  // border-color: ${props => props.borderColor || ""};
  position: absolute;
`;

const Item = styled.li`
  padding: 0.5em;
  z-index: 501;
  text-align: left;
  font-weight: 600;


  letter-spacing: 0.5px;
  // border-bottom: 0.5px solid ${colors.grey_light};
  color: ${props => props.textColor || ""};

  &:hover {
    color: ${props => props.hoverColor || ""};
    background-color: ${props => props.hoverBackgroundColor || ""};
  }

  &:active {
    color: ${props => props.activeColor || ""};
  }
`;

function Menu({ id, data, type, object, onClick, position }) {
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let textColor;
  let borderColor;
  let activeColor;
  let hoverBackgroundColor;
  let hoverColor;
  let backgroundColor;
  let badgeTransform = "translate(-90%, 50%)";
  const [visibility, setVisibility] = useState(false);
  switch (type) {
    case "white":
      backgroundColor = colors.white;
      textColor = colors.grey_80;
      activeColor = colors.anchor_light;
      borderColor = colors.grey_20;
      hoverColor = colors.anchor_dark;
      break;
    case "black":
      backgroundColor = colors.black;
      textColor = colors.white;
      hoverColor = colors.grey_light;
      break;
    default:
      break;
  }
  switch (position) {
    case "topLeft":
      badgeLeft = "0";
      badgeTransform = "translate(-100%, -5%)";
      break;
    case "topRight":
      badgeTransform = "translate(1%, -9%)";
      break;
    case "bottomRight":
      badgeBottom = "0";
      badgeTransform = "translate(1%, 98%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-101%, 96%)";
      break;
    case "bottomCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-45%, 98%)";
      break;
    case "topCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-45%, -17%)";
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
        <Card>
          <EditMenu
            badgeTransform={badgeTransform}
            badgeLeft={badgeLeft}
            badgeBottom={badgeBottom}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
          >
            {data.map(item => (
              <Item
                textColor={textColor}
                hoverBackgroundColor={hoverBackgroundColor}
                activeColor={activeColor}
                hoverColor={hoverColor}
                key={item.id}
                onClick={onClick}
              >
                {item.name}
              </Item>
            ))}
          </EditMenu>
        </Card>
      ) : null}
    </Container>
  );
}

Menu.propTypes = {
  id: PropTypes.string,
  object: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.node,
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
