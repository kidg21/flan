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
  tabindex: 0;
`;

const ListTitle = styled(Title)`
  color: ${props => {
    return props.theme.text.primary;
  }};
  border-bottom: 1px solid
    ${props => {
      return props.theme.divider;
    }};
  padding: 0.75em 1em;
  tabindex: -1;
`;

const ListItemWrapper = styled.li`
  color: ${props => {
    return props.theme.background[props.itemColor];
  }};
  background-color: ${props => {
    return props.theme.palette[props.itemBGColor] || "";
  }};
  border-style: solid;
  border-width: ${props => {
    return props.itemBorder || "0";
  }};
  border-bottom: 1px solid
    ${props => {
      return props.theme.divider;
    }};
  cursor: ${props => {
    return props.interactive ? "pointer" : "";
  }};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    ${props => {
      return props.interactive ? Darken : "";
    }};
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${props => {
      return props.theme.palette.disabled;
    }};
    background-color: ${props => {
      return props.theme.divider;
    }};
    border-left: none;
  }
`;

function List({ id, title, children, interactive }) {
  return (
    <InteractiveContext.Provider value={interactive}>
      {title ? <ListTitle text={title} weight="bold" /> : null}
      <ListWrapper id={id}>{children}</ListWrapper>
    </InteractiveContext.Provider>
  );
}

function ListItem({
  id,
  label,
  description,
  children,
  state,
  type,
  onClick,
  disabled,
  interactive,
  rightWidth,
}) {
  let itemColor;
  let itemBGColor;
  let itemBorder;
  switch (state) {
    case "active":
      itemColor = "app";
      itemBorder = "0 0 0 .5em";
      break;
    default:
      break;
  }
  switch (type) {
    case "info":
      itemColor = "default";
      itemBGColor = "info";
      break;
    case "success":
      itemColor = "default";
      itemBGColor = "success";
      break;
    case "warning":
      itemColor = "default";
      itemBGColor = "warning";
      break;
    case "alert":
      itemColor = "default";
      itemBGColor = "alert";
      break;
    default:
      break;
  }

  return (
    <ListItemWrapper
      id={id}
      itemColor={itemColor}
      itemBGColor={itemBGColor}
      itemBorder={itemBorder}
      onClick={onClick}
      disabled={disabled}
      interactive={typeof interactive === "boolean" ? interactive : useContext(InteractiveContext)}
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
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  interactive: PropTypes.bool,
};

ListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  state: PropTypes.oneOf(["active"]),
  type: PropTypes.oneOf(["info", "success", "warning", "alert"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  interactive: PropTypes.bool,
};

export { List as default, ListItem };
