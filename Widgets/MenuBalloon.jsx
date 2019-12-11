import PropTypes from "prop-types";
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

function MenuBalloon(props) {
  const {
    id,
    popperProps,
    clickAwayProps,
    items,
  } = props;

  return (
    <Popper
      key={`popper`}
      id={`popper-${id}`}
      {...popperProps}
    >
      {({ TransitionProps/* , placement */ }) => {
        return (
          <Grow
            id={"menu-list-grow"}
            {...TransitionProps}
          >
            <Paper>
              <ClickAwayListener {...clickAwayProps}>
                <MenuList id={"menu-list"}>
                  {items.map((item) => {
                    return <MenuItem key={`item-${item.id}`}{...item.itemProps}>{item.text}</MenuItem>;
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        );
      }}
    </Popper>
  );
}

MenuBalloon.defaultProps = {
  popperProps: null,
  clickAwayProps: {
    onClickAway: () => { },
    mouseEvent: false, // disables the click away listener
  },
  items: [],
};

MenuBalloon.propTypes = {
  popperProps: PropTypes.object,
  clickAwayProps: PropTypes.shape({
    onClickAway: PropTypes.function,
    mouseEvent: PropTypes.string || PropTypes.bool,
  }),
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    itemProps: PropTypes.object,
    text: PropTypes.string || PropTypes.element,
  })),
};

export default MenuBalloon;
