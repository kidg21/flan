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
import Text, { Title } from "base/Typography";
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
}) {
  let leftContent;
  let rightContent;

  const mainContent = (
    <React.Fragment>
      <Text size="4x" text={label} disabled={disabled} />
      {description ? (
        <Text size="2x" text={description} disabled={disabled} />
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
      isSelected={isSelected}
      id={id}
      interactive={
        typeof interactive === "boolean"
          ? interactive
          : useContext(InteractiveContext)
      }
      onClick={onClick}
      disabled={disabled}
      tabIndex={disabled ? "-1" : "1"}
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
      </DisabledContext.Provider>
    </ListItemWrapper>
  );
}

List.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  divider: PropTypes.bool,
  interactive: PropTypes.bool,
  title: PropTypes.string,
};
List.defaultProps = {
  children: null,
  id: null,
  divider: false,
  interactive: false,
  title: null,
};

ListItem.propTypes = {
  isSelected: PropTypes.bool,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.node,
  count: PropTypes.string,
  checkbox: PropTypes.bool,
  avatar: PropTypes.string,
  interactive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ListItem.defaultProps = {
  isSelected: false,
  description: null,
  icon: null,
  checkbox: false,
  count: null,
  avatar: null,
  disabled: false,
  id: null,
  interactive: null,
  onClick: null,
};

export { List as default, ListItem };
