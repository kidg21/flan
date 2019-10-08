import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Card from "layout/Card";
import Title from "base/Typography";
import { Darken, Lighten } from "Variables";

const Container = styled.div`
  cursor: pointer;
  // position: relative;
  line-height: 1.5;
  display: inline-block;
`;

const EditMenu = styled.ul`
  background: ${(props) => {
    return props.theme.background.default;
  }};
  border-radius: 3px;
  list-style: none;
  z-index: 500;
  padding: 0.25em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  bottom: ${(props) => { return props.badgeBottom || ""; }};
  left: ${(props) => { return props.badgeLeft || ""; }};
  transform: ${(props) => { return props.setTransform || ""; }};
  width: auto;
  min-width: 10em;
  position: absolute;
`;

const Item = styled.li`
  padding: 0.55em;
  z-index: 501;
  text-align: left;

  &:hover {
    ${Darken}
  }

  &:active {
    ${Lighten}
  }
`;

const MenuBG = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
`;

function Menu({
  id, data, position, visible, onClick, icon, level,
}) {
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let setTransform;
  let visibility = visible;
  let setVisibility = onClick;
  if (!setVisibility) {
    [visibility, setVisibility] = useState(visible);
  }

  const [activeItem, setActiveItem] = useState("");

  function handleMouseEnter(e) {
    setActiveItem(e.target.id);
  }

  function handleMouseLeave() {
    setActiveItem("");
  }

  function toggleVisibility() {
    setVisibility(!visibility);
    setActiveItem("");
  }

  switch (position) {
    case "topLeft":
      badgeLeft = "0";
      setTransform = "translate(-100%, -5%)";
      break;
    case "topRight":
      setTransform = "translate(1%, -9%)";
      badgeLeft = "0";
      break;
    case "bottomRight":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(6%, 95%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-106%, 95%)";
      break;
    case "bottomCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-45%, 98%)";
      break;
    case "topCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-45%, -17%)";
      break;
    default:
      break;
  }
  return (
    <React.Fragment>
      {visibility ? <MenuBG onClick={toggleVisibility} /> : null}
      <Container
        id={id}
        onClick={toggleVisibility}
        onMouseLeave={handleMouseLeave}
      >
        {icon || <Icon icon="options" size="lg" />}
        {visibility ? (
          <Card>
            <EditMenu
              setTransform={setTransform}
              badgeLeft={badgeLeft}
              badgeBottom={badgeBottom}
            >
              {data.map((item) => {
                if (item.commands) {
                  return (
                    <Item key={item.id} id={item.id} onMouseEnter={handleMouseEnter}>
                      {activeItem === item.id ? (
                        <Menu
                          id={item.id}
                          data={item.commands}
                          visible
                          position={position}
                          level={level + 1}
                          icon={(<React.Fragment><Title text={item.name} weight="normal" /><Icon icon="down" /></React.Fragment>)}
                        />) : (
                          <React.Fragment><Title text={item.name} weight="normal" /><Icon icon="up" /></React.Fragment>
                        )
                      }
                    </Item>
                  );
                }
                return (
                  <Item
                    key={item.id}
                    id={item.id}
                    onClick={item.onClickLink}
                    onMouseEnter={handleMouseEnter}
                  >
                    <Title text={item.name} weight="normal" />
                  </Item>
                );
              })}
            </EditMenu>
          </Card>
        ) : null}
      </Container>
    </React.Fragment>
  );
}

Menu.defaultProps = {
  level: 0,
  icon: null,
};

Menu.propTypes = {
  id: PropTypes.string,
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })).isRequired,
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "bottomCenter",
    "topCenter",
    "default",
  ]),
  level: PropTypes.number,
  icon: PropTypes.element,
};

Menu.defaultProps = {
  id: null,
  visible: false,
  onClick: null,
  position: "default",
};

export default Menu;
