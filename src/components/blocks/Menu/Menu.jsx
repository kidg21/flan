/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import styled from "styled-components";
import Title from "base/Typography";
import Card from "layout/Card";

const MenuContainer = styled.div`
  cursor: pointer;
  line-height: 1.5;
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  padding: 0.5em;
  margin: -0.5em;
`;

const MenuItem = styled.li`
  padding: 0.55em;
  z-index: 501;
  text-align: left;
`;

const MenuList = styled.ul`
  list-style: none;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  width: auto;
  min-width: 10em;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
`;

const MenuPopper = styled.div`
  position: absolute;
  z-index: 500;
  top: ${(props) => {
    return props.top || "";
  }};
  left: ${(props) => {
    return props.left || "";
  }};
  right: ${(props) => {
    return props.right || "";
  }};
  transform: ${(props) => {
    return props.transform || "";
  }};
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

/**
 * List component that pops out
 */
function MenuComponent({
  id,
  data,
  onClick,
  left,
  top,
  transform,
  submenuDirection,
  right,
}) {
  const [activeItem, setActiveItem] = useState({});

  function closeMenu() {
    setActiveItem({});
  }

  return (
    <MenuPopper
      id={id}
      top={top}
      left={left}
      right={right}
      transform={transform}
      onClick={onClick}
      onMouseLeave={closeMenu}
    >
      <Card>
        <MenuList>
          {data.map((item) => {
            // nested submenu
            if (item.commands) {
              return (
                <MenuItem
                  key={item.id}
                  onMouseOver={(e) => {
                    setActiveItem({
                      id: item.id,
                      top: `${e.currentTarget.getBoundingClientRect().top -
                        e.currentTarget.offsetParent.getBoundingClientRect()
                          .top}px`,
                      left:
                        submenuDirection === "right"
                          ? `${
                          e.currentTarget.offsetParent.getBoundingClientRect()
                            .width
                          }px`
                          : "",
                      right:
                        submenuDirection !== "right"
                          ? `${
                          e.currentTarget.offsetParent.getBoundingClientRect()
                            .width
                          }px`
                          : "",
                    });
                  }}
                >
                  <Bar
                    contentAlign="center"
                    left={<Title icon={item.icon} text={item.name} />}
                    right={<Icon icon={submenuDirection} />}
                  />
                  {activeItem && activeItem.id === item.id ? (
                    <MenuComponent
                      id={item.id}
                      data={item.commands}
                      onClick={closeMenu}
                      right={activeItem.right}
                      left={activeItem.left}
                      top={activeItem.top}
                      submenuDirection={submenuDirection}
                    />
                  ) : null}
                </MenuItem>
              );
            }

            return (
              <MenuItem
                key={item.id}
                onClick={() => {
                  if (item.onClickLink) item.onClickLink(item.id);
                }}
                onMouseOver={closeMenu}
              >
                <Title icon={item.icon} text={item.name} />
              </MenuItem>
            );
          })}
        </MenuList>
      </Card>
    </MenuPopper>
  );
}

MenuComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })).isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.string,
  onClick: PropTypes.func,
  right: PropTypes.string,
  submenuDirection: PropTypes.string,
  top: PropTypes.string,
  transform: PropTypes.string,
};

MenuComponent.defaultProps = {
  left: "",
  onClick: null,
  right: "",
  submenuDirection: "right",
  top: "",
  transform: "",
};

/**
 * Gets the correct css position informatin for the given menu popper position direction
 * @param {string} position direction the first level menu should open
 */
function getCssPosition(position) {
  let transform;
  let submenuDirection = "right";
  switch (position.toLowerCase()) {
    case "topleft":
      transform = "translate(-100%, -110%)";
      submenuDirection = "left";
      break;
    case "topright":
      transform = "translate(10%, -110%)";
      break;
    case "topcenter":
      transform = "translate(-50%, -110%)";
      break;
    case "bottomleft":
      transform = "translate(-100%, -5%)";
      submenuDirection = "left";
      break;
    case "bottomcenter":
      transform = "translate(-45%, -5%)";
      break;
    case "bottomright":
    default:
      break;
  }
  return { transform, submenuDirection };
}

/**
 * Main Menu Component
 */
function Menu({
  id, data, icon, visible, onClick, position,
}) {
  let visibility = visible;
  let setVisibility = onClick;
  if (!setVisibility) {
    [visibility, setVisibility] = useState(visible);
  }

  const { transform, submenuDirection } = getCssPosition(position);
  function toggleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <React.Fragment>
      {visibility ? <MenuBG onClick={toggleVisibility} /> : null}
      <MenuContainer onClick={toggleVisibility}>
        <Icon icon={icon} size="lg" />
        {visibility ? (
          <MenuComponent
            id={id}
            data={data}
            transform={transform}
            submenuDirection={submenuDirection}
          />
        ) : null}
      </MenuContainer>
    </React.Fragment>
  );
}

Menu.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  icon: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  visible: PropTypes.bool,
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "bottomCenter",
    "topCenter",
    "default",
  ]),
};

Menu.defaultProps = {
  data: null,
  icon: "options",
  id: null,
  onClick: null,
  position: "default",
  visible: false,
};

export default Menu;
