import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Card from "layout/Card";
import Title from "base/Typography";
import { colors } from "Variables";

const Container = styled.div`
  cursor: pointer;
  padding: 1em;
  position: relative;
  line-height: 1.5;
  display: inline-block;
`;

const EditMenu = styled.ul`
  background: ${colors.white};
  border-radius: 3px;
  list-style: none;
  z-index: 500;
  padding: 0.25em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  bottom: ${props => props.badgeBottom || ""};
  left: ${props => props.badgeLeft || ""};
  transform: ${props => props.badgeTransform || ""};
  width: auto;
  min-width: 10em;
  position: absolute;
`;

const Item = styled.li`
  padding: 0.55em;
  z-index: 501;
  text-align: left;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${colors.grey_light};
  }

  &:active {
    color: ${colors.black};
  }
`;

function Menu({ id, data, type, object, onClick, position }) {
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let badgeTransform;
  const [visibility, setVisibility] = useState(false);
  switch (type) {
    case "edit":
      object = <Icon icon={["far", "ellipsis-v"]} size="lg" />;
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
      badgeTransform = "translate(6%, 95%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      badgeTransform = "translate(-106%, 95%)";
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
      {object}
      {visibility ? (
        <Card>
          <EditMenu
            badgeTransform={badgeTransform}
            badgeLeft={badgeLeft}
            badgeBottom={badgeBottom}
          >
            {data.map(item => (
              <Item key={item.id} onClick={onClick}>
                <Title title={item.name} weight="normal" />
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
  object: PropTypes.node,
  type: PropTypes.any,
  onClick: PropTypes.func,
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
