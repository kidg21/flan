import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, Darken } from "Variables";
import Bar from "blocks/Bar";
import Title from "base/Typography";
import { InteractiveContext, DisabledContext } from "States";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-weight: 600;
`;

const ListTitle = styled(Title)`
  color: ${colors.grey_dark};
  border-bottom: 1px solid ${colors.grey_20};
  padding: 0.75em;
`;

const ListItemWrapper = styled.li`
  color: ${props => {
    return props.itemColor || "";
  }};
  background-color: ${props => {
    return props.itemBGColor || colors.white;
  }};
  border-style: solid;
  border-width: ${props => {
    return props.itemBorder || "0";
  }};
  border-bottom: 1px solid ${colors.grey_light};
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
    color: ${colors.grey_40};
    background-color: ${colors.grey_light};
    border-left: none;
  }
`;

const Item = styled(Bar)`
  align-items: center;
`;

function List({ id, title, children, interactive }) {
  return (
    <InteractiveContext.Provider value={interactive}>
      {title ? <ListTitle title={title} weight="bold" /> : null}
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
      itemColor = colors.success;
      itemBorder = "0 0 0 .5em";
      break;
    default:
      break;
  }
  switch (type) {
    case "info":
      itemColor = colors.white;
      itemBGColor = colors.anchor_light;
      break;
    case "success":
      itemColor = colors.white;
      itemBGColor = colors.success_light;
      break;
    case "warning":
      itemColor = colors.white;
      itemBGColor = colors.warning_light;
      break;
    case "alert":
      itemColor = colors.white;
      itemBGColor = colors.alert_light;
      break;
    case "inverse":
      itemColor = colors.white;
      itemBGColor = colors.grey_80;
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
      interactive={
        typeof interactive === "boolean"
          ? interactive
          : useContext(InteractiveContext)
      }
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          barAlign="center"
          left={
            <>
              {<Title title={label} />}
              {description ? (
                <Title title={description} size="small" weight="light" />
              ) : null}
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
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "inverse"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  interactive: PropTypes.bool,
};

export { List as default, ListItem };
