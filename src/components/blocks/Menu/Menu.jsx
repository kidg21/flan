/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable security/detect-object-injection */
import React, {
  useState, useMemo, useRef, useCallback,
} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popper from "layout/Popper";
import Button from "atoms/Button";
import List, { ListItem } from "blocks/List";
import getGuid from "utils/getGuid";
import { useId } from "utils/hooks";
import CardWrapper from "elements/Card/CardWrapper.jsx";

const ListWrapper = styled(List)`
  /* no max-height overflow-y scroll bar */
  /* update logic to measure itemwrapper top/left (fixed position) */
  overflow: visible;
  width: ${(props) => {
    return props.width || "max-content";
  }};
  min-width: 10rem;
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
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
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

const ListItemWrapper = styled(ListItem)`
  border-radius: inherit;
`;

// highlight behaviors
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
    transform: "translateX(-100%)", // nested container's width
  },
  right: {
    top: "0",
    left: "100%", // parent container's width
  },
};

const MenuList = ({
  data,
  direction,
  id,
  _isNested, // internal prop for styling nested menus
  onClose,
  width,
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
  }, [uId, data, onClose, activeItem, validDirection]);

  const positionStyle = _isNested ? listPositionStyle[validDirection.toLowerCase()] : {};

  return (
    <ListWrapper id={id} isInteractive isNested={_isNested} width={width} {...positionStyle}>
      <StyledCardWrapper id={`cardwrapper-${id}`} shadow="2x">
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
  _isNested: false,
  onClose: null,
  width: undefined,
};

MenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  direction: PropTypes.oneOf(["", "right", "left"]),
  id: PropTypes.string,
  _isNested: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.string,
};

const defaultAnchor = <Button icon="options" isPlain isRound />;

const Menu = ({
  children,
  data,
  id,
  isFlex,
  onClose,
  usePortal,
  position,
  visible,
  width,
  zIndex,
}) => {
  return (
    <Popper
      id={`menu-popper-${id}`}
      isFlex={isFlex}
      usePortal={usePortal}
      anchor={children || React.cloneElement(defaultAnchor, { id: `menu-icon-${id}` })}
      visible={visible}
      onClose={onClose}
      position={position}
      zIndex={zIndex}
    >
      <MenuList
        id={id}
        data={data}
        direction={position.toLowerCase().includes("left") ? "left" : "right"}
        onClose={onClose}
        width={width}
      />
    </Popper>
  );
};

Menu.defaultProps = {
  children: null,
  data: [],
  id: "",
  isFlex: false,
  onClose: null,
  usePortal: false,
  position: "bottomRight",
  visible: false,
  width: undefined,
  zIndex: null,
};

Menu.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  id: PropTypes.string,
  isFlex: PropTypes.bool,
  onClose: PropTypes.func,
  usePortal: PropTypes.bool,
  position: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
  ]),
  visible: PropTypes.bool,
  width: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const FragmentWrapper = styled.div``;

const StatefulMenu = ({
  children,
  id,
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

  // default Menu button with onClick
  let anchorElement = React.cloneElement(defaultAnchor, { id: `menu-icon-${id}`, onClick: toggleVisible }); //(<Button icon="options" onClick={toggleVisible} isPlain isRound />);
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
      onClose={close}
      id={id}
    >
      {anchorElement}
    </Menu>
  );
};

// additional props
StatefulMenu.defaultProps = {
  children: null,
  id: "",
  initVisible: false,
  onClose: null,
};

StatefulMenu.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  initVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

const _Menu = (props) => {
  const { visible, id } = props;
  const uId = useId(id);
  // handle open/close by stateful menu if visible isn't provided
  return (typeof visible === "undefined")
    ? <StatefulMenu {...props} id={uId} /> : <Menu {...props} id={uId} />;
};

_Menu.defaultProps = {
  children: null,
  data: [],
  initVisible: false,
  id: "",
  isFlex: false,
  onClose: null,
  usePortal: false,
  position: "bottomRight",
  visible: undefined,
  width: "max-content",
  zIndex: null,
};

_Menu.propTypes = {
  /** custom anchor element */
  children: PropTypes.node,
  /** list of item objects in menu */
  data: PropTypes.arrayOf(PropTypes.shape(itemShape)),
  /** menu id */
  id: PropTypes.string,
  /** the initial visible value for stateful/uncontrolled menus */
  initVisible: PropTypes.bool,
  /** to specify an anchor element to be flex */
  isFlex: PropTypes.bool,
  /** onClose callback when menu closes */
  onClose: PropTypes.func,
  /** places menu in a portal */
  usePortal: PropTypes.bool,
  /** open position relative to anchor element */
  position: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
  ]),
  /** open/close state of menu */
  visible: PropTypes.bool,
  /** width of the menu */
  width: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

_Menu.displayName = "Menu";
export { _Menu as default, MenuList };
