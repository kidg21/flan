/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled from "styled-components";

const MenuContainer = styled.div`
  cursor: pointer;
  line-height: 1.5;
`;

const MenuItem = styled.li`
  padding: 0.55em;
  z-index: 501;
  text-align: left;
`;

const MenuList = styled.ul`
  background: white;
  border-radius: 3px;
  list-style: none;
  padding: 0.25em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  width: auto;
  min-width: 10em;
  max-height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MenuPopper = styled.div`
  position: absolute;
  z-index: 500;
  top: ${(props) => { return props.top || ""; }};
  left: ${(props) => { return props.left || ""; }};
  right: ${(props) => { return props.right || ""; }};
  transform: ${(props) => { return props.transform || ""; }};
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
  id, data, onClick, left, top, transform, submenuDirection, right,
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
                    top: `${e.currentTarget.getBoundingClientRect().top - e.currentTarget.offsetParent.getBoundingClientRect().top}px`,
                    left: submenuDirection === "right" ? `${e.currentTarget.offsetParent.getBoundingClientRect().width}px` : "",
                    right: submenuDirection !== "right" ? `${e.currentTarget.offsetParent.getBoundingClientRect().width}px` : "",
                  });
                }}
              >
                <Bar
                  left={<Command icon={item.icon} label={item.name} />}
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
              onClick={() => { if (item.onClickLink) item.onClickLink(item.id); }}
              onMouseOver={closeMenu}
            >
              <Command icon={item.icon} label={item.name} />
            </MenuItem>);
        })}
      </MenuList>
    </MenuPopper>
  );
}

MenuComponent.defaultProps = {
  left: "",
  top: "",
  right: "",
  transform: "",
  submenuDirection: "right",
  onClick: null,
};

MenuComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  transform: PropTypes.string,
  submenuDirection: PropTypes.string,
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
  return ({ transform, submenuDirection });
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
        <Icon icon={icon} />
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
  icon: PropTypes.string,
};

Menu.defaultProps = {
  id: null,
  visible: false,
  onClick: null,
  position: "default",
  icon: "settings",
};

export default Menu;
