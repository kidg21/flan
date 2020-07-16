/* eslint-disable security/detect-object-injection */
/* eslint-disable jsx-a11y/mouse-events-have-key-events1 */
/* eslint-disable react/prop-types */
import React, { useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popper from "layout/Popper";
import Icon from "atoms/Icon";
import List, { ListItem } from "blocks/List";
import { useId, getGuid } from "helpers";

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

// width: 100% needed for highlighing whole entry
const ListItemWrapper = styled(ListItem)`
  // width: 100%;
`;

// highlight behaviors???
// need to get rid of last-child padding
// for the nested item's entry
const NestedItem = styled.div`
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
  onClose,
}) => {
  const [activeItem, setActiveItem] = useState();
  const uId = useId(id);
  const itemIds = useRef([]);
  const validDirection = listPositionStyle.hasOwnProperty(direction.toLowerCase()) ? direction : "right";

  const listItems = useMemo(() => {
    return data.map((item, index) => {
      itemIds.current[index] = item.id
        || (itemIds.current.length > index ? itemIds.current[index] : getGuid());
      const itemId = itemIds.current[index];
      const onClick = () => {
        if (item.onClick) item.onClick();
        if (onClose) onClose();
      };
      if (item.data) {
        // nested submenu
        return (
          <NestedItem
            key={itemId}
            id={`item-${itemId}`}
            onMouseEnter={() => {
              setActiveItem(item.id);
            }}
            onMouseLeave={() => {
              setActiveItem();
            }}
          >
            <ListItemWrapper id={`nested-item-${itemId}`} title={item.label} onClick={onClick} />
            {activeItem === item.id ? (
              <MenuList
                id={`${uId}-${itemId}`}
                data={item.data}
                direction={validDirection}
                onClose={onClose}
                _nestedLevel
              />
            ) : null}
          </NestedItem>
        );
      }
      return (
        <ListItemWrapper key={itemId} id={`item-${itemId}`} title={item.label} onClick={onClick} />)
    });
  });
  // handle empty lists
  // const listItems = data.map((item) => {
  //   if (item.data) {
  //     return (
  //       <NestedItem
  //         onMouseEnter={() => {
  //           setActiveItem(item.id);
  //         }}
  //         onMouseLeave={() => {
  //           setActiveItem();
  //         }}
  //       >
  //         <ListItemWrapper title={item.label} onClick={() => { item.onClick(); onClose(); }} />
  //         {activeItem === item.id ? <MenuList _nestedLevel data={item.data} direction={validDirection} onClose={onClose} /> : null }
  //       </NestedItem>
  //     );
  //   }
  //   return (
  //     <ListItemWrapper title={item.label} onClick={() => { item.onClick(); onClose();}} />
  //   );
  // });

  if (_nestedLevel) {
    const positionStyle = listPositionStyle[validDirection.toLowerCase()];
    return (
      <NestedListWrapper isInteractive {...positionStyle} id={id}>
        {listItems}
      </NestedListWrapper>
    );
  }
  return (
    <ListWrapper isInteractive id={id}>
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
  id,
  onClick,
  onClose,
  portal,
  position,
  visible,
}) => {
  const uId = useId(id);
  return (
    <Popper
      id={`menu-popper-${uId}`}
      portal={portal}
      anchor={children || <Icon id={`menu-icon-${uId}`} icon="options" onClick={onClick} />}
      visible={visible}
      onClose={onClose}
      position={position}
    >
      <MenuList
        id={uId}
        data={data}
        direction={position.toLowerCase().includes("left") ? "left" : "right"}
        onClose={onClose}
      />
    </Popper>
  );
};


Menu.defaultProps = {
  children: null,
  data: [],
  id: "",
  onClick: null,
  onClose: null,
  portal: false,
  position: "bottomRight",
  visible: false,
};

Menu.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  portal: PropTypes.bool,
  position: PropTypes.oneOf(),
  visible: PropTypes.bool,
};

// controlled/uncontrolled menu?
export { Menu as default, MenuList };
