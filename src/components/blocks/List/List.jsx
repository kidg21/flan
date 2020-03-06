/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "blocks/Bar";
import Tag from "atoms/Tag";
import Avatar from "atoms/Avatar";
import Checkbox from "atoms/Checkbox";
import Switch from "atoms/Switch";
import Text, { Title } from "base/Typography";
import { InteractiveContext, DisabledContext } from "States";

const ListWrapper = styled.ul`
  display: flex;
  flex: auto;
  flex-direction: column;
  list-style: none;
  li:not(:last-child) {
    border-bottom: ${(props) => {
    return props.divider ? "1px solid" : "";
  }};
    border-bottom-color: ${(props) => {
    return props.divider ? props.theme.palette.neutral40 : "";
  }};
  }
`;

const ListItemWrapper = styled.li`
  position: relative;
  
  color: ${(props) => {
    return props.isSelected ? props.theme.text.inverse : props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.isSelected ? props.theme.background.selected : props.theme.background.default;
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
  children, divider, id, interactive,
}) {
  return (
    <InteractiveContext.Provider value={interactive}>
      <ListWrapper divider={divider} id={id}>
        {children}
      </ListWrapper>
    </InteractiveContext.Provider>
  );
}

List.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
};
List.defaultProps = {
  children: null,
  divider: false,
  id: null,
  interactive: false,
};

function getRightContent(post, disabled, onClick) {
  let rightContent = null;
  if (post && post.type) {
    const postType = post.type.toLowerCase();
    if (postType === "checkbox") {
      rightContent = <Checkbox id={post.label} label={post.label} align="right" disabled={disabled} checked={post.checked} onChange={post.onClick} />;
    } else if (postType === "toggle") {
      rightContent = <Switch label={post.label} align="right" disabled={disabled} checked={post.checked} onChange={post.onClick} />;
    } else if (postType === "label" && post.label) {
      rightContent = {
        content: <Tag label={post.label} />,
        onClick: post.onClick || onClick,
      };
    }
  }
  return rightContent;
}

function getLeftContent(pre, disabled, onClick) {
  let leftContent = null;
  if (pre && (pre.label || pre.icon)) {
    const leftContentComponent = <Avatar label={pre.label} icon={pre.icon} disabled={disabled} />;
    leftContent = {
      content: leftContentComponent,
      width: "max-content",
      onClick: (pre && pre.onClick) || onClick,
    };
  }
  return leftContent;
}

function ListItem({
  active,
  children,
  description,
  disabled,
  id,
  interactive,
  isSelected,
  title,
  href,
  onClick,
  post,
  pre,
  tabIndex,
}) {
  const leftContent = getLeftContent(pre, disabled, onClick);
  const centerContent = (
    <React.Fragment >
      <Title text={title} disabled={disabled} />
      {description ? (<Text text={description} disabled={disabled} />
      ) : null}
    </React.Fragment>);

  const rightContent = getRightContent(post, disabled, onClick);

  return (
    <ListItemWrapper

      active={active}
      href={href}
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
          center={{
            content: centerContent,
            align: "left",
            onClick: onClick,
          }}
          contentAlign="center"
          disabled={disabled}
          left={leftContent}
          right={rightContent}
        />
        {children}
      </DisabledContext.Provider>
    </ListItemWrapper>
  );
}

ListItem.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  post: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
  }),
  pre: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }),
  tabIndex: PropTypes.string,
};
ListItem.defaultProps = {
  active: false,
  href: null,
  children: null,
  description: null,
  disabled: false,
  id: null,
  interactive: null,
  isSelected: false,
  onClick: null,
  post: null,
  pre: null,
  tabIndex: "0",
};

export { List as default, ListItem };
