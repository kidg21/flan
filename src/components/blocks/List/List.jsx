/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "layout/Bar";
import Tag from "atoms/Tag";
import Avatar from "atoms/Avatar";
import Icon from "atoms/Icon";
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
    return props.isDivided ? "1px solid" : "";
  }};
    border-bottom-color: ${(props) => {
    return props.isDivided ? props.theme.palette.neutral40 : "";
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
    return props.isInteractive ? "pointer" : "";
  }};
  &:focus,
  &:hover {
    ${(props) => {
    return props.isInteractive ? Darken : "";
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
  children, id, isDivided, isInteractive,
}) {
  return (
    <InteractiveContext.Provider value={isInteractive}>
      <ListWrapper isDivided={isDivided} id={id}>
        {children}
      </ListWrapper>
    </InteractiveContext.Provider>
  );
}

List.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isDivided: PropTypes.bool,
  isInteractive: PropTypes.bool,
};
List.defaultProps = {
  children: null,
  id: null,
  isDivided: false,
  isInteractive: false,
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
  let leftContentComponent = null;
  if (pre && (pre.label || pre.icon)) {
    const {
      label,
      icon,
      onClick: sectionOnClick,
      ...props
    } = pre;

    if (pre.label) {
      leftContentComponent = <Avatar label={label} disabled={disabled} {...props} />;
    } else if (pre.icon) {
      leftContentComponent = <Icon icon={pre.icon} disabled={disabled} {...props} />;
    }
    leftContent = {
      content: leftContentComponent,
      width: "max-content",
      onClick: sectionOnClick || onClick,
    };
  }

  return leftContent;
}

function ListItem({
  as,
  children,
  description,
  disabled,
  href,
  id,
  isInteractive,
  isSelected,
  onClick,
  post,
  pre,
  tabIndex,
  title,
}) {
  const leftContent = getLeftContent(pre, disabled, onClick);
  const centerContent = (
    <React.Fragment >
      <Title text={title} disabled={disabled} />
      {description ? (<Text size="sm" text={description} disabled={disabled} />
      ) : null}
    </React.Fragment>);

  const rightContent = getRightContent(post, disabled, onClick);

  return (
    <ListItemWrapper
      as={as}
      href={href}
      id={id}
      isInteractive={
        typeof isInteractive === "boolean"
          ? isInteractive
          : useContext(InteractiveContext)
      }
      isSelected={isSelected}
      disabled={disabled}
      onClick={onClick}
      tabIndex={disabled ? "-1" : tabIndex}
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          padding="0"
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
  as: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.node,
  id: PropTypes.string,
  isInteractive: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
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
  as: null,
  children: null,
  description: null,
  disabled: false,
  href: null,
  id: null,
  isInteractive: null,
  isSelected: false,
  onClick: null,
  post: null,
  pre: null,
  tabIndex: "0",
};

export { List as default, ListItem };
