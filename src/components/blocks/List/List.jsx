/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Avatar from "atoms/Avatar";
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
    return props.theme.text.primary;
  }};
  padding: 1em;
  background-color: ${(props) => {
    return props.theme.palette.background;
  }};
  cursor: ${(props) => {
    return props.interactive ? "pointer" : "";
  }};
  &:focus,
  &:hover {
    ${(props) => {
    return props.interactive ? Darken : "";
  }};
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
  description,
  disabled,
  id,
  avatar,
  toggle,
  icon,
  checkbox,
  interactive,
  label,
  onClick,
}) {
  const mainContent = (
    <React.Fragment>
      <Title text={label} disabled={disabled} />
      {description ? (
        <Description text={description} disabled={disabled} />
      ) : null}
    </React.Fragment>
  );

  return (
    <ListItemWrapper
      active={active}
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
        {avatar || icon ? (
          <Bar
            leftWidth="6%"
            contentAlign="center"
            centerAlign="left"
            disabled={disabled}
            left={
              <React.Fragment>
                {avatar ? <Avatar label={avatar} disabled={disabled} /> : null}
                {icon ? (
                  <Icon icon={icon} size="lg" disabled={disabled} />
                ) : null}
              </React.Fragment>
            }
            center={mainContent}
            right={
              <React.Fragment>
                {checkbox ? (
                  <Checkbox label={label} disabled={disabled} />
                ) : null}
                {toggle ? <Switch disabled={disabled} /> : null}
              </React.Fragment>
            }
          />
        ) : (
            <Bar
              contentAlign="center"
              centerAlign="left"
              disabled={disabled}
              left={mainContent}
              right={
                <React.Fragment>
                  {checkbox ? <Checkbox disabled={disabled} /> : null}
                  {toggle ? <Switch disabled={disabled} /> : null}
                </React.Fragment>
              }
            />
          )}
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
  description: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  toggle: PropTypes.node,
};
ListItem.defaultProps = {
  active: false,
  avatar: null,
  checkbox: null,
  description: null,
  disabled: false,
  icon: null,
  id: null,
  interactive: null,
  onClick: null,
  toggle: null,
};

export { List as default, ListItem };
