/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable security/detect-object-injection */
/* eslint-disable jsx-a11y/mouse-events-have-key-events1 */
/* eslint-disable react/prop-types */
import React, { useState, useMemo, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popper from "layout/Popper";
import Button from "atoms/Button";
import List, { ListItem } from "blocks/List";
import { useId, getGuid } from "helpers";
import CardWrapper from "elements/Card/CardWrapper.jsx";

const ListWrapper = styled(List)`
  /* no max-height overflow-y scroll bar */
  /* update logic to measure itemwrapper top/left (fixed position) */
  overflow: visible;
  width: 10rem;
  position: ${(props) => {
    return props.isNested ? "absolute" : "";
  }};
  top: ${(props) => {
    return props.top || "";
  }};
  left: ${(props) => {
    return props.left || "";
  }};
  transform: ${(props) => {
    return props.transform || "";
  }};
  /* cardwrapper border-radius */
  border-radius: 0.5em;
  z-index: 500;
`;

const StyledCardWrapper = styled(CardWrapper)`
  > :first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  };
  > :last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  };
`;

// width: 100% needed for highlighing whole entry
const ListItemWrapper = styled(ListItem)`
  border-radius: inherit;
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
  _isNested, // internal prop for styling nested menus
  onClose,
}) => {
  const [activeItem, setActiveItem] = useState();
  const uId = useId(id);
  const itemIds = useRef([]);
  const validDirection = listPositionStyle.hasOwnProperty(direction.toLowerCase()) ? direction : "right";

  const listItems = useMemo(() => {
    // empty list, display "No Commands" entry
    let _listItems = (
      <ListItem
        key={`${uId}-none`}
        id="item-none"
        title="No Commands"
        disabled
      />
    );

    if (data && data.length > 0) {
      // populated list
      _listItems = data.map((item, index) => {
        itemIds.current[index] = item.id
          || (itemIds.current.length > index ? itemIds.current[index] : getGuid());
        const itemId = itemIds.current[index];
        const onClick = () => {
          if (item.onClick) item.onClick();
          if (onClose) onClose();
        };
        if (item.data && item.data.length > 0) {
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
              <ListItemWrapper
                id={`nested-item-${itemId}`}
                title={item.label}
                onClickItem={onClick}
                pre={{ icon: item.icon }}
                disabled={item.disabled}
              />
              {activeItem === item.id ? (
                <MenuList
                  id={`${uId}-${itemId}`}
                  data={item.data}
                  direction={validDirection}
                  onClose={onClose}
                  _isNested
                />
              ) : null}
            </NestedItem>
          );
        }
        return (
          <ListItem
            key={itemId}
            id={`item-${itemId}`}
            title={item.label}
            onClickItem={onClick}
            pre={{ icon: item.icon }}
            disabled={item.disabled}
          />
        );
      });
    }

    return _listItems;
  });

  const positionStyle = _isNested ? listPositionStyle[validDirection.toLowerCase()] : {};

  return (
    <ListWrapper id={id} isInteractive isNested={_isNested} {...positionStyle}>
      <StyledCardWrapper shadow="2x">
        {listItems}
      </StyledCardWrapper>
    </ListWrapper>
  );
};

const itemShape = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

MenuList.defaultProps = {
  data: [],
  direction: "right",
  id: "",
  _nestedLevel: false,
  onClose: null,
};

MenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  direction: PropTypes.oneOf(["", "right", "left"]),
  id: PropTypes.string,
  _nestedLevel: PropTypes.bool,
  onClose: PropTypes.func,
};

const Menu = ({
  children,
  data,
  icon,
  id,
  isFlex,
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
      isFlex={isFlex}
      portal={portal}
      anchor={children || <Button id={`menu-icon-${uId}`} icon={icon} onClick={onClick} isPlain isRound />}
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
  icon: "options",
  id: "",
  isFlex: false,
  onClick: null,
  onClose: null,
  portal: false,
  position: "bottomRight",
  visible: false,
};

Menu.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  icon: PropTypes.string,
  id: PropTypes.string,
  isFlex: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  portal: PropTypes.bool,
  position: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
  ]),
  visible: PropTypes.bool,
};

const FragmentWrapper = styled.div``;

const StatefulMenu = ({
  children,
  initVisible,
  onClose,
  ...otherProps
}) => {
  const [visible, setVisible] = useState(initVisible);
  const anchor = React.Children.toArray(children);
  const toggleVisible = useCallback(() => {
    setVisible((show) => { return !show; });
  });
  const close = useCallback(() => {
    setVisible(false);
    if (onClose) onClose();
  }, [onClose]);

  let anchorElement = null;
  if (anchor.length > 0) {
    if (anchor[0].type === React.Fragment) {
      // wraps click in div around both children
      // otherwise, Fragment eats onClick prop
      // for the most part assumes a single child!
      anchorElement = (<FragmentWrapper onClick={toggleVisible}>{children}</FragmentWrapper>);
    } else {
      // need to clone to preserve ref on anchor element
      anchorElement = React.cloneElement(anchor[0], {
        onClick: () => {
          toggleVisible();
          if (anchor[0].props.onClick) {
            anchor[0].props.onClick();
          }
        },
      });
    }
  }

  return (
    <Menu
      {...otherProps}
      visible={visible}
      onClick={toggleVisible} // default anchorElement
      onClose={close}
    >
      {anchorElement}
    </Menu>
  );
};

// additional props
StatefulMenu.defaultProps = {
  initVisible: false,
};

StatefulMenu.propTypes = {
  initVisible: PropTypes.bool,
};

const _Menu = (props) => {
  const { onClick, visible } = props;
  // handle open/close by stateful menu if onClick & visible isn't provided
  return (typeof onClick === "undefined" && typeof visible === "undefined")
    ? <StatefulMenu {...props} /> : <Menu {...props} />;
};

_Menu.defaultProps = {
  children: null,
  data: [],
  icon: "options",
  initVisible: false,
  id: "",
  isFlex: false,
  onClick: undefined,
  onClose: null,
  portal: false,
  position: "bottomRight",
  visible: undefined,
};

_Menu.propTypes = {
  /** custom anchor element */
  children: PropTypes.node,
  /** list of item objects in menu */
  data: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  /** icon name for default button anchor */
  icon: PropTypes.string,
  /** menu id */
  id: PropTypes.string,
  /** the initial visible value for stateful/uncontrolled menus */
  initVisible: PropTypes.bool,
  /** to specify an anchor element to be flex */
  isFlex: PropTypes.bool,
  /** onClick callback for the default anchor element */
  onClick: PropTypes.func,
  /** onClose callback when menu closes */
  onClose: PropTypes.func,
  /** places menu in a portal */
  portal: PropTypes.bool,
  /** open position relative to anchor element */
  position: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
  ]),
  /** open/close state of menu */
  visible: PropTypes.bool,
};

export { _Menu as default, MenuList };
