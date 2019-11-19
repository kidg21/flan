import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "blocks/Bar";
import Title from "base/Typography";
import { InteractiveContext, DisabledContext } from "States";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-weight: 600;
`;

const ListItemWrapper = styled.li`
  position: relative;
  color: ${props => {
    return props.theme.text[props.itemColor];
  }};
  background-color: ${props => {
    return (
      props.theme.background[props.itemBGColor] ||
      props.theme.palette.background
    );
  }};
  border-bottom: 1px solid
    ${props => {
      return props.theme.divider;
    }};
  cursor: ${props => {
    return props.interactive ? "pointer" : "";
  }};
  &:focus,
  &:hover {
    ${props => {
      return props.interactive ? Darken : "";
    }};
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${props => {
      return props.theme.text.disabled;
    }};
    background-color: ${props => {
      return props.theme.background.disabled;
    }};
    border-left: none;
  }
  &:before {
    display: ${props => {
      return props.active ? "block" : "none";
    }};
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    border-style: solid;
    border-width: 2px;
  }
  &:last-child {
    border-bottom: none;
  }
`;

function List({ children, id, interactive, title }) {
  return (
    <InteractiveContext.Provider value={interactive}>
      {title ? <Bar left={<Title text={title} weight="bold" />} /> : null}
      <ListWrapper id={id}>{children}</ListWrapper>
    </InteractiveContext.Provider>
  );
}

function ListItem({
  active,
  children,
  description,
  disabled,
  id,
  interactive,
  label,
  onClick,
  type,
}) {
  let itemColor;
  let itemBGColor;
  let itemBorder;
  switch (type) {
    case "info":
      itemColor = "info";
      if (active) {
        itemBGColor = "info_active";
      }
      break;
    case "success":
      itemColor = "success";
      if (active) {
        itemBGColor = "success_active";
      }
      break;
    case "warning":
      itemColor = "warning";
      if (active) {
        itemBGColor = "warning_active";
      }
      break;
    case "alert":
      itemColor = "alert";
      if (active) {
        itemBGColor = "alert_active";
      }
      break;
    default:
      // itemBGColor = "white";
      if (active) {
        itemColor = "active";
        itemBGColor = "active";
      }
      if (disabled) {
        active = false;
      }
      break;
  }
  return (
    <ListItemWrapper
      active={active}
      disabled={disabled}
      id={id}
      interactive={typeof interactive === "boolean" ? interactive : useContext(InteractiveContext)}
      itemBGColor={itemBGColor}
      itemBorder={itemBorder}
      itemColor={itemColor}
      onClick={onClick}
      tabIndex={disabled ? "-1" : "1"}
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          contentAlign="center"
          centerAlign="left"
          center={
            <>
              {<Title text={label} />}
              {description ? <Title text={description} size="small" weight="light" /> : null}
            </>
          }
          right={children}
          rightWidth={(children && children.props.width) || ""}
        />
      </DisabledContext.Provider>
    </ListItemWrapper>
  );
}

List.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  title: PropTypes.string,
};
List.defaultProps = {
  children: null,
  id: null,
  interactive: false,
  title: null,
};

ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};
ListItem.defaultProps = {
  active: false,
  children: null,
  description: null,
  disabled: false,
  id: null,
  interactive: null,
  onClick: null,
  type: null,
};

export { List as default, ListItem };
