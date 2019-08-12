import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import { clearDecorators } from "@storybook/react/dist/client/preview";
// import { colors, shadows } from "Variables";
import { colors, shadows } from "Variables";

import Title, { Body } from "base/Typography";

const Container = styled.div`
  cursor: pointer;
  padding: 5px;
  position: relative;
  display: inline-block;
`;

const EditMenu = styled.ul`
  background: ${props => props.backgroundColor || ""};
  border-radius: 3px;
  list-style: none;
  margin-top: 4px;
  padding: 0.25em;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
  width: 150px;
  border: 1px solid;
  border-color: ${props => props.borderColor || ""};
  position: absolute;
`;

const Item = styled.li`
  padding: 0.5em;
  text-align: left;
  letter-spacing: 0.5px;
  border-bottom: 0.5px solid ${colors.grey_light};
  color: ${props => props.textColor || ""};

  &:hover {
    color: ${props => props.hoverColor || ""};
  }
`;

function Menu({ id, data, type, object, position }) {
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let textColor;
  let borderColor;
  let hoverColor;
  let backgroundColor;
  let badgeTransform = "translate(-90%, 50%)";
  const [visibility, setVisibility] = useState(false);
  switch (type) {
    case "white":
      backgroundColor = colors.white;
      textColor = colors.grey_80;
      borderColor = colors.grey_20;
      hoverColor = colors.anchor;
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
        <EditMenu
          badgeTransform={badgeTransform}
          badgeLeft={badgeLeft}
          badgeBottom={badgeBottom}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
        >
          {data.map(item => (
            <Item textColor={textColor} hoverColor={hoverColor} key={item.id}>
              {item.name}
            </Item>
          ))}
        </EditMenu>
      ) : null}
    </Container>
  );
}

Menu.propTypes = {
  id: PropTypes.string,
  object: PropTypes.any,
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
