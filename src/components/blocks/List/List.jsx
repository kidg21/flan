/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "blocks/Bar";
import Tag from "atoms/Tag";
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
      {title ? <Bar padding="2x" left={<Title text={title} weight="bold" />} /> : null}
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
  description,
  disabled,
  id,
  interactive,
  isSelected,
  label,
  onClick,
  post,
  postLabel,
  pre,
  preIcon,
  preLabel,
  tabIndex,
}) {
  let leftContent;
  if (pre) {
    if (pre.toLowerCase() === "icon") {
      leftContent = <Icon icon={preIcon} disabled={disabled} size="lg" />;
    } else if (pre.toLowerCase() === "avatar") {
      if (preLabel) {
        leftContent = <Avatar label={preLabel} disabled={disabled} />;
      } else {
        leftContent = <Avatar icon={preIcon} disabled={disabled} />;
      }
    }
  }
  let rightContent;
  if (post) {
    if (post.toLowerCase() === "checkbox") {
      rightContent = <Checkbox id={postLabel} label={postLabel} align="right" disabled={disabled} />;
    } else if (post.toLowerCase() === "toggle") {
      rightContent = <Switch label={postLabel} align="right" disabled={disabled} />;
    } else if (post.toLowerCase() === "label") {
      rightContent = <Tag label={postLabel} />;
    }
  }

  const centerContent = (
    <React.Fragment>
      <Title text={label} disabled={disabled} />
      {description ? (<Description text={description} disabled={disabled} />
      ) : null}
    </React.Fragment>
  );

  return (
    <ListItemWrapper
      active={active}
      as={as}
      id={id}
      interactive={
        typeof interactive === "boolean"
          ? interactive
          : useContext(InteractiveContext)
      }
      isSelected={isSelected}
      disabled={disabled}
      onClick={onClick}
      tabIndex={disabled ? "-1" : tabIndex}
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          center={centerContent}
          centerAlign="left"
          contentAlign="center"
          disabled={disabled}
          left={leftContent}
          leftWidth="max-content"
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
  as: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  post: PropTypes.oneOf(["label", "checkbox", "toggle"]),
  /** Required for post-type 'label'
   * Optional for post-types 'checkbox' and 'toggle'
   */
  postLabel: PropTypes.string,
  pre: PropTypes.oneOf(["icon", "avatar"]),
  /** Required for pre-type 'icon' */
  preIcon: PropTypes.string,
  /** Required for pre-type 'avatar' */
  preLabel: PropTypes.string,
  tabIndex: PropTypes.string,
};
ListItem.defaultProps = {
  active: false,
  as: null,
  children: null,
  description: null,
  disabled: false,
  id: null,
  interactive: null,
  isSelected: false,
  onClick: null,
  post: null,
  postLabel: null,
  pre: null,
  preIcon: null,
  preLabel: null,
  tabIndex: "0",
};

export { List as default, ListItem };
