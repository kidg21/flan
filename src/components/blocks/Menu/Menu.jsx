/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import styled from "styled-components";
import Card from "elements/Card";
import List, { ListItem } from "blocks/List";
import { getGuid } from "helpers";

const MenuContainer = styled.a`
  /* display: flex; */
  cursor: pointer;
  padding: 0.5em;
  margin: -0.5em;
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
  width: 10rem;
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
  data,
  id,
  left,
  onClick,
  right,
  submenuDirection,
  top,
  transform,
}) {
  const [activeItem, setActiveItem] = useState({});

  function closeMenu() {
    setActiveItem({});
  }

  const uId = useMemo(() => { return id || getGuid(); }, [id]);
  const itemIds = useRef([]);
  const listItems = useMemo(() => {
    return data.map((item, index) => {
      itemIds.current[index] = item.id
        || (itemIds.current.length > index ? itemIds.current[index] : getGuid());
      const itemId = itemIds.current[index];
      const itemKey = item.id
        || (item.label && item.label.substr(0, 50).replace(/\s+/g, "_").replace(/\W+/g, ""))
        || item.icon
        || index;
      if (item.commands) {
        // nested submenu
        return (
          <ItemWrapper
            disabled={item.disabled}
            id={`item-${itemId}`}
            key={itemKey}
            onMouseOver={(e) => {
              setActiveItem({
                id: itemId,
                top: `${e.currentTarget.getBoundingClientRect().top - e.currentTarget.offsetParent.getBoundingClientRect().top}px`,
                left: submenuDirection === "right" ? `${e.currentTarget.offsetParent.getBoundingClientRect().width}px` : "",
                right: submenuDirection !== "right" ? `${e.currentTarget.offsetParent.getBoundingClientRect().width}px` : "",
              });
            }}
            tabIndex="0"
          >
            <ListItem as="section" title={item.label} disabled={item.disabled} pre={{ icon: item.icon }} />
            {activeItem && activeItem.id === itemId ? (
              <MenuComponent
                data={item.commands}
                id={itemId}
                left={activeItem.left}
                onClick={closeMenu}
                right={activeItem.right}
                submenuDirection={submenuDirection}
                top={activeItem.top}
              />
            ) : null}
          </ItemWrapper>
        );
      }

      return (
        <ItemWrapper
          id={`item-${itemId}`}
          key={itemKey}
          disabled={item.disabled}
          onClick={() => {
            if (!item.disabled) {
              if (item.onClick) item.onClick(itemId);
              if (item.onClickLink) item.onClickLink(itemId); // deprecated
            }
          }}
          onMouseOver={closeMenu}
        >
          <ListItem as="section" title={item.label} disabled={item.disabled} pre={{ icon: item.icon }} />
        </ItemWrapper>);
    });
  }, [data, submenuDirection, activeItem]);

  return (
    <MenuPopper
      id={`menupopper-${uId}`}
      left={left}
      onClick={onClick}
      onMouseLeave={closeMenu}
      right={right}
      top={top}
      transform={transform}
    >
      <Card shadow="2x">
        <ListWrapper id={`listwrapper-${uId}`} isInteractive>
          {listItems}
        </ListWrapper>
      </Card>
    </MenuPopper>
  );
}

MenuComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onClickLink: PropTypes.func, // deprecated
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
  id, data, icon, visible, onClick, isButton, position,
}) {
  let visibility = visible;
  let setVisibility = onClick;
  if (!setVisibility) {
    [visibility, setVisibility] = useState(visible);
  }
  const uId = useMemo(() => { return id || getGuid(); }, [id]);

  const { transform, submenuDirection } = getCssPosition(position);
  function toggleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <React.Fragment>
      {visibility ? <MenuBG onClick={toggleVisibility} /> : null}
      <MenuContainer onClick={toggleVisibility}>
        { isButton ? <Button icon={icon} isPlain isRound /> : <Icon icon={icon} />}
        {visibility ? (
          <MenuComponent
            data={data}
            id={uId}
            submenuDirection={submenuDirection}
            transform={transform}
          />
        ) : null}
      </MenuContainer>
    </React.Fragment>
  );
}

Menu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  icon: PropTypes.string,
  isButton: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "bottomCenter",
    "topCenter",
    "default",
  ]),
  visible: PropTypes.bool,
};

Menu.defaultProps = {
  data: null,
  icon: "options",
  isButton: true,
  id: null,
  onClick: null,
  position: "default",
  visible: false,
};

Menu.displayName = "Menu";
export default Menu;
