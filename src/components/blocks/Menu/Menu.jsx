/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import styled from "styled-components";
import Card from "elements/Card";
import List, { ListItem } from "blocks/List";

const MenuContainer = styled.a`
  cursor: pointer;
  line-height: 1.5;
  &:hover {
    filter: none;
  }
`;

const ListWrapper = styled(List)`
  list-style: none;
  background: ${(props) => {
    return props.theme.background.default;
  }};
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
  padding: ${(props) => {
    return props.cardPadding || "";
  }};
    filter: ${(props) => {
    return props.theme.shadows.shadow1;
  }};
`;

const ItemWrapper = styled.li`
  text-align: left;
  z-index: 501;
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${(props) => {
    return props.theme.text.disabled;
  }};
    background-color: ${(props) => {
    return props.theme.background.disabled;
  }};
    > * {
      color: inherit;
      background-color: inherit;
    }
  }
`;

const MenuPopper = styled.div`
  position: fixed;
  z-index: 500;
  min-width: 12em;
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
  disabled,
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
      <Card shadow="1x">
        <ListWrapper interactive>
          {data.map((item) => {
            // nested submenu
            if (item.commands) {
              return (
                <ItemWrapper
                  key={item.id}
                  disabled={item.disabled}
                  tabIndex="0"
                  onMouseOver={(e) => {
                    setActiveItem({
                      id: item.id,
                      top: `${e.currentTarget.getBoundingClientRect().top - e.currentTarget.offsetParent.getBoundingClientRect().top}px`,
                      left: submenuDirection === "right" ? `${e.currentTarget.offsetParent.getBoundingClientRect().width}px` : "",
                      right: submenuDirection !== "right" ? `${e.currentTarget.offsetParent.getBoundingClientRect().width}px` : "",
                    });
                  }}
                >
                  <ListItem as="section" title={item.label} icon={item.icon} arrow={submenuDirection} disabled={disabled} />
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
                </ItemWrapper>
              );
            }

            return (
              <ItemWrapper
                key={item.id}
                disabled={item.disabled}
                onClick={() => { if (item.onClickLink) item.onClickLink(item.id); }}
                onMouseOver={closeMenu}
              >
                <ListItem as="section" title={item.label} icon={item.icon} />
              </ItemWrapper>);
          })}
        </ListWrapper>
      </Card>
    </MenuPopper>
  );
}

MenuComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClickLink: PropTypes.func,
  })).isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  left: PropTypes.string,
  onClick: PropTypes.func,
  right: PropTypes.string,
  submenuDirection: PropTypes.string,
  top: PropTypes.string,
  transform: PropTypes.string,
};

MenuComponent.defaultProps = {
  disabled: null,
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
