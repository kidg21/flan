/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "blocks/Bar";
import Tag from "atoms/Tag";
import Icon from "atoms/Icon";
import Avatar from "atoms/Avatar";
import Grid from "layout/Grid";
import Checkbox from "atoms/Checkbox";
import Switch from "atoms/Switch";
import Title, { Description } from "base/Typography";
import { InteractiveContext, DisabledContext } from "States";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  li:not(:last-child) {
    border-bottom: ${(props) => {
    return props.divider ? "1px solid" : "";
  }};
    border-bottom-color: ${(props) => {
    return props.divider ? props.theme.palette.grey5 : "";
  }};
  }
`;

const ListItemWrapper = styled.li`
  position: relative;
  color: ${(props) => {
    return props.isSelected ? props.theme.text.inverse : props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.isSelected ? props.theme.background.inverse : props.theme.background.default;
  }};
  padding: 1em;
  cursor: ${(props) => {
    return props.interactive ? "pointer" : "";
  }};
  &:focus,
  &:hover {
    ${(props) => {
    return props.interactive ? Darken : "";
  }};
  }
  }
  outline: none;
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    background-color: ${(props) => {
    return props.theme.background.disabled;
  }};
    border-left: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

function List({
  children, divider, id, interactive, title,
}) {
  return (
    <InteractiveContext.Provider value={interactive}>
      {title ? <Bar left={<Title text={title} weight="bold" />} /> : null}
      <ListWrapper divider={divider} id={id}>
        {children}
      </ListWrapper>
    </InteractiveContext.Provider>
  );
}

function ListItem({
  active,
  as,
  children,
  isSelected,
  description,
  disabled,
  id,
  avatar,
  toggle,
  count,
  icon,
  checkbox,
  interactive,
  label,
  onClick,
  tabIndex,
}) {
  let leftContent;
  let rightContent;

  const mainContent = (
    <React.Fragment>
      <Title text={label} disabled={disabled} />
      {description ? (<Description text={description} disabled={disabled} />
      ) : null}
    </React.Fragment>
  );

  if (avatar) {
    if (icon) {
      leftContent = (
        <Avatar label={avatar} disabled={disabled} />
      );
    }
  }
  if (avatar) {
    leftContent = (
      <Avatar label={avatar} disabled={disabled} />
    );
  } else if (icon) {
    leftContent = (
      <Icon icon={icon} disabled={disabled} size="lg" />
    );
  } else {
    leftContent = (
      null
    );
  }


  if (checkbox) {
    if (toggle) {
      if (count) {
        rightContent = (
          <Checkbox label={checkbox} disabled={disabled} />
        );
      }
    }
  } if (checkbox) {
    rightContent = (
      <Checkbox disabled={disabled} />
    );
  } else if (toggle) {
    rightContent = (
      <Switch disabled={disabled} />
    );
  } else {
    rightContent = (
      null
    );
  }

  if (count) {
    rightContent = (
      <Tag label={count} />
    );
  }

  return (
    <ListItemWrapper
      active={active}
      as={as}
      isSelected={isSelected}
      id={id}
      interactive={
        typeof interactive === "boolean"
          ? interactive
          : useContext(InteractiveContext)
      }
      onClick={onClick}
      disabled={disabled}
      tabIndex={disabled ? "-1" : tabIndex}
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          contentAlign="center"
          centerAlign="left"
          leftWidth="max-content"
          disabled={disabled}
          left={leftContent}
          center={mainContent}
          right={rightContent}
        />
        {children}
      </DisabledContext.Provider>
    </ListItemWrapper>
  );
}

List.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  title: PropTypes.string,
};
List.defaultProps = {
  children: null,
  divider: false,
  id: null,
  interactive: false,
  title: null,
};

ListItem.propTypes = {
  active: PropTypes.bool,
  avatar: PropTypes.string,
  checkbox: PropTypes.node,
  count: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tabIndex: PropTypes.string,
  toggle: PropTypes.node,
};
ListItem.defaultProps = {
  active: false,
  avatar: null,
  checkbox: false,
  count: null,
  description: null,
  disabled: false,
  icon: null,
  id: null,
  interactive: null,
  isSelected: false,
  onClick: null,
  tabIndex: "0",
  toggle: null,
};

export { List as default, ListItem };
