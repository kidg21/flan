/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popper from "layout/Popper";
import Icon from "atoms/Icon";
import List, { ListItem } from "blocks/List";

// for highlighing whole entry
const ListItemWrapper = styled(ListItem)`
  // display: flex;
  width: 100%;
`;

const ListWrapper = styled(List)`
  overflow: visible;
  width: 10rem;
`;

const NestedListWrapper = styled(ListWrapper)`
  position: absolute;
  top: ${(props) => {
    return props.top || "";
  }};
  left: ${(props) => {
    return props.left || "";
  }};
  transform: ${(props) => {
    return props.transform || "";
  }};
`;

// highlight behaviors???
// need to get rid of last-child padding
// for the nested item's entry
const NestedItem = styled.li`
  // display: flex;
  position: relative;
  background-color: inherit;
  > li:last-child {
    margin-bottom: 1px;
  }
`;

const listPositionStyle = {
  left: {
    top: "0",
    transform: "translateX(-100%)",
  },
  right: {
    top: "0",
    left: "100%",
  },
};

const MenuList = ({
  data,
  direction,
  id,
  _nestedLevel,
}) => {
  const [activeItem, setActiveItem] = useState();
  const validDirection = listPositionStyle.hasOwnProperty(direction.toLowerCase()) ? direction : "right";
  // handle empty lists
  const listItems = data.map((item) => {
    if (item.data) {
      return (
        <NestedItem
          onMouseEnter={() => {
            setActiveItem(item.id);
          }}
          onMouseLeave={() => {
            setActiveItem();
          }}
        >
          <ListItemWrapper title={item.label} onClick={() => { setActiveItem(); item.onClick(); }} />
          {activeItem === item.id ? <MenuList _nestedLevel data={item.data} direction={validDirection} /> : null }
        </NestedItem>
      );
    }
    return (
      <ListItemWrapper title={item.label} onClick={item.onClick} />
    );
  });

  if (_nestedLevel) {
    const positionStyle = listPositionStyle[validDirection.toLowerCase()];
    return (
      <NestedListWrapper isInteractive {...positionStyle}>
        {listItems}
      </NestedListWrapper>
    );
  }
  return (
    <ListWrapper isInteractive>
      {listItems}
    </ListWrapper>
  );
};

MenuList.defaultProps = {
  direction: "",
};
MenuList.propTypes = {
  direction: PropTypes.string,
};

const Menu = ({
  children,
  data,
  onClick,
  onClose,
  portal,
  position,
  visible,
}) => {
  return (
    <Popper
      portal={portal}
      anchor={children || <Icon icon="options" onClick={onClick} />}
      visible={visible}
      onClose={onClose}
      position={position}
    >
      <MenuList
        data={data}
        direction={position.toLowerCase().includes("left") ? "left" : "right"}
      />
    </Popper>
  );
};


Menu.defaultProps = {
  position: "",
};

Menu.propTypes = {
  position: PropTypes.string,
};

// controlled/uncontrolled menu?
export { Menu as default, MenuList };
