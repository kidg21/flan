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
import Text, { Title, Label } from "base/Typography";
import { InteractiveContext, DisabledContext, PaddingContext } from "States";

const ListTitle = styled.li`
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const ListSectionWrapper = styled.li`
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

const ListItemWrapper = styled.li`
  position: relative;
  color: ${(props) => {
    return props.theme.text[props.listItemColor] || "";
  }};
  background-color: ${(props) => {
    return props.theme.background[props.listItemBackground] || "";
  }};
  padding: .5em;
  margin-bottom: 1px;
  cursor: ${(props) => {
    return props.isInteractive && !props.isSelected ? "pointer" : "default";
  }};
  &:hover {
    background-color: ${(props) => {
    return props.isInteractive ? props.theme.background[props.hoverBackground] : "";
  }};
  }
  outline: none;
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    border-left: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  flex: auto;
  flex-direction: column;
  list-style: none;
  color: ${(props) => {
    return props.listColor ? props.theme.text[props.listColor] : props.theme.text.secondary;
  }};
  background-color: ${(props) => {
    return props.theme.background[props.listBackground] || props.theme.background.default;
  }};
  height: inherit;
  padding: 1rem;
  li:not(:last-child) {
    border-bottom: ${(props) => {
    return props.isDivided ? "1px solid" : "";
  }};
    border-bottom-color: ${(props) => {
    return props.isDivided ? props.theme.palette.neutral40 : "";
  }};
  }
  & > ${ListSectionWrapper}:first-of-type {
    margin-top: 0;
  }
`;

function getRightContent(post, disabled, onClick) {
  let rightContent = null;
  if (post && post.type) {
    const postType = post.type.toLowerCase();
    if (postType === "checkbox") {
      rightContent = {
        content: <Checkbox id={post.label} label={post.label} align="right" disabled={disabled} checked={post.checked} onChange={post.onClick} />,
        width: "max-content",
        onClick: post.onClick || onClick,
      };
    } else if (postType === "toggle") {
      rightContent = {
        content: <Switch label={post.label} align="right" disabled={disabled} checked={post.checked} onChange={post.onClick} />,
        width: "max-content",
        onClick: post.onClick || onClick,
      };
    } else if (postType === "label" && post.label) {
      rightContent = {
        content: <Tag label={post.label} />,
        width: "max-content",
        onClick: post.onClick || onClick,
      };
    } else if (postType === "icon" && post.icon) {
      rightContent = {
        content: <Icon icon={post.icon} onClick={post.onClick} />,
        width: "max-content",
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
  let listItemColor = "inherit";
  let listItemBackground = "inherit";
  let hoverBackground;
  if (disabled) {
    listItemColor = "disabled";
    listItemBackground = "none";
  }
  if (isSelected) {
    listItemBackground = "selected";
  } else {
    hoverBackground = "hover";
  }

  const leftContent = getLeftContent(pre, disabled, onClick);
  const centerContent = (
    <React.Fragment>
      <Title text={title || null} disabled={disabled} weight="bold" />
      {description ? (<Text size="sm" text={description || null} disabled={disabled} />
      ) : null}
    </React.Fragment>);

  const rightContent = getRightContent(post, disabled, onClick);

  return (
    <ListItemWrapper
      as={as}
      disabled={disabled}
      href={href}
      id={id}
      isInteractive={
        typeof isInteractive === "boolean"
          ? isInteractive
          : useContext(InteractiveContext)
      }
      isSelected={isSelected}
      listItemColor={listItemColor}
      listItemBackground={listItemBackground}
      // hoverColor={hoverColor}
      hoverBackground={hoverBackground}
      onClick={onClick}
      tabIndex={disabled ? "-1" : tabIndex}
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          padding={useContext(PaddingContext)}
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
function List({
  children, id, isDivided, isInteractive, title, padding, hasBackground, isInverse,
}) {
  let listColor;
  let listBackground;
  if (isInverse) {
    listColor = "inverse";
    listBackground = "inverse";
  } else if (hasBackground) {
    listColor = "inverse";
    listBackground = "menuDark";
  }
  return (
    <InteractiveContext.Provider value={isInteractive}>
      <ListWrapper
        id={id}
        isDivided={isDivided}
        listBackground={listBackground}
        listColor={listColor}
      >
        {title ? (
          <ListTitle>
            <Title text={title} size="sm" weight="bold" />
          </ListTitle>
        ) : null}
        <PaddingContext.Provider value={padding}>
          {children}
        </PaddingContext.Provider>
      </ListWrapper>
    </InteractiveContext.Provider>
  );
}

List.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isDivided: PropTypes.bool,
  isInteractive: PropTypes.bool,
  padding: PropTypes.string,
  title: PropTypes.string,
};
List.defaultProps = {
  children: null,
  id: null,
  isDivided: false,
  isInteractive: false,
  padding: "0",
  title: null,
};

function ListSection({
  section,
}) {
  return (
    <ListSectionWrapper>
      <Text text={section} weight="" />
    </ListSectionWrapper>
  );
}

ListSection.propTypes = {
  section: PropTypes.string,
};
ListSection.defaultProps = {
  section: null,
};

export { List as default, ListSection, ListItem };
