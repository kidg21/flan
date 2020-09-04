/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Bar from "layout/Bar";
import Tag from "atoms/Tag";
import Avatar from "atoms/Avatar";
import Radio from "atoms/Radio";
import Icon from "atoms/Icon";
import Checkbox from "atoms/Checkbox";
import Switch from "atoms/Switch";
import Divider from "atoms/Divider";
import Text, { Label } from "base/Typography";
import { InteractiveContext, DisabledContext, PaddingContext } from "States";

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
  overflow: auto;
  li:not(:last-of-type) {
    border-bottom: ${(props) => {
    return props.isDivided ? `${props.theme.palette[props.listDivider]} 1px solid` : "";
  }};
  }
  li:last-of-type {
    margin-bottom: 0.5rem;
  }
`;

const ListItemWrapper = styled.li`
  position: relative;
  color: ${(props) => {
    return props.theme.text[props.selectedColor] || "inherit";
  }};
  background-color: ${(props) => {
    return props.theme.background[props.selectedBackground] || "inherit";
  }};
  padding: 0.5rem 1rem;
  margin-bottom: 1px;
  cursor: ${(props) => {
    return props.isInteractive && !props.isSelected ? "pointer" : "default";
  }};
  &:focus,
  &:hover {
    ${(props) => {
    return props.isInteractive && !props.isSelected ? Darken : "";
  }};
  }
  outline: none;
  * {
    color: ${(props) => {
    return props.theme.text[props.selectedContent] || "";
  }};
  }
  &[disabled] {
    color: ${(props) => {
    return props.theme.text.disabled;
  }};
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    border-left: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ListTitleWrapper = styled.li`
  color: inherit;
  padding: 1rem 1rem;
`;

const ListTitle = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  font-weight: 400;
`;

const SectionWrapper = styled.li`
  color: inherit;
  padding: ${(props) => {
    return props.sectionPadding || "";
  }};
`;

const Section = styled(Label)`
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: initial;
`;

const SectionDivider = styled(Divider)`
  margin: 0;
  border-color: inherit;
  opacity: 0.3;
`;

function ListSection({
  children,
  hasDivider,
  title,
}) {
  return (
    <React.Fragment>
      {title ? (
        <SectionWrapper sectionPadding="0.75rem 1rem 0.5rem">
          <Section text={title} weight="regular" size="sm" />
        </SectionWrapper>
      ) : (<SectionWrapper sectionPadding="0.25rem 1rem 0" />)}
      {children}
      {hasDivider ? (
        <SectionWrapper sectionPadding="0.25rem 0.75rem 0.25rem">
          <SectionDivider />
        </SectionWrapper>
      ) : null}
    </React.Fragment>
  );
}

ListSection.propTypes = {
  children: PropTypes.node,
  hasDivider: PropTypes.bool,
  title: PropTypes.string,
};
ListSection.defaultProps = {
  children: null,
  hasDivider: false,
  title: null,
};

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
        content: (
          <Icon
            icon={post.icon}
            size={post.size}
            variant={post.variant}
            onClick={post.onClick || onClick}
            fixedWidth
          />
        ),
        width: "max-content",
      };
    }
  } else if (post) {
    rightContent = {
      content: post,
      width: "max-content",
      onClick: post.OnClick || onClick,
    };
  }
  return rightContent;
}

function getLeftContent(pre, disabled, onClick) {
  let leftContent = null;
  if (pre && pre.type) {
    const preType = pre.type.toLowerCase();
    if (preType === "checkbox") {
      leftContent = {
        content: <Checkbox id={pre.label} label={pre.label} align="left" disabled={disabled} checked={pre.checked} onChange={pre.onClick} />,
        width: "max-content",
        onClick: pre.onClick || onClick,
      };
    } else if (preType === "radio") {
      leftContent = {
        content: <Radio label={pre.label} align="left" disabled={disabled} checked={pre.checked} onChange={pre.onClick} />,
        width: "max-content",
        onClick: pre.onClick || onClick,
      };
    } else if (preType === "label" && pre.label) {
      leftContent = {
        content: <Avatar label={pre.label} disabled={disabled} />,
        width: "max-content",
        onClick: pre.onClick || onClick,
      };
    } else if (preType === "icon" && pre.icon) {
      leftContent = {
        content: (
          <Icon
            icon={pre.icon}
            size={pre.size}
            variant={pre.variant}
            onClick={pre.onClick}
            fixedWidth
          />
        ),
        width: "max-content",
        onClick: pre.onClick || onClick,
      };
    }
  } else if (pre) {
    leftContent = {
      content: pre,
      width: "max-content",
      onClick: pre.OnClick || onClick,
    };
  }
  return leftContent;
}

function ListItem({
  as,
  children,
  className,
  description,
  disabled,
  href,
  id,
  isSelected,
  onClick,
  onClickItem,
  post,
  pre,
  tabIndex,
  title,
}) {
  let selectedColor;
  let selectedBackground;
  let selectedContent;
  if (isSelected) {
    selectedColor = "inverse";
    selectedBackground = "selectedDark";
    selectedContent = "inverse";
  }

  const leftContent = getLeftContent(pre, disabled, onClick);
  const centerContent = (
    <React.Fragment>
      <Text text={title || null} disabled={disabled} />
      {description ? (<Text size="sm" text={description || null} disabled={disabled} />
      ) : null}
    </React.Fragment>
  );

  const rightContent = getRightContent(post, disabled, onClick);

  const handleOnClick = () => {
    onClick(title || description);
  };

  const handleOnClickItem = () => {
    onClickItem(title || description);
  };

  const isInteractive = useContext(InteractiveContext);

  return (
    <ListItemWrapper
      as={as}
      disabled={disabled}
      href={href}
      id={id}
      isInteractive={isInteractive}
      isSelected={isSelected}
      selectedColor={selectedColor}
      selectedContent={selectedContent}
      selectedBackground={selectedBackground}
      tabIndex={disabled ? "-1" : tabIndex}
      className={className}
      onClick={typeof onClickItem === "function" ? handleOnClickItem : null} // to target whole list item
    >
      <DisabledContext.Provider value={disabled}>
        <Bar
          padding={useContext(PaddingContext)}
          center={{
            content: centerContent,
            align: "left",
            onClick: typeof onClick === "function" ? handleOnClick : null,
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
  className: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.node,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  onClickItem: PropTypes.func,
  title: PropTypes.string,
  post: PropTypes.oneOfType([PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    variant: PropTypes.string,
  }), PropTypes.node]),
  pre: PropTypes.oneOfType([PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    variant: PropTypes.string,
  }), PropTypes.node]),
  tabIndex: PropTypes.string,
};
ListItem.defaultProps = {
  as: null,
  children: null,
  className: null,
  description: null,
  disabled: false,
  href: null,
  id: null,
  isSelected: false,
  onClick: null,
  onClickItem: null,
  title: null,
  post: null,
  pre: null,
  tabIndex: "0",
};

function List({
  children,
  className,
  data,
  id,
  isDivided,
  isInteractive,
  isInverse,
  isLight,
  padding,
  title,
}) {
  let listBackground;
  let listColor;
  let listDivider = "neutral40";
  if (isInverse) {
    listBackground = "alt";
    listColor = "inverse";
    listDivider = "neutral100";
  }
  if (isLight) {
    listBackground = "app";
    listColor = "neutral40";
    listDivider = "neutral100";
  }
  return (
    <InteractiveContext.Provider value={isInteractive}>
      <ListWrapper
        className={className}
        id={id}
        isDivided={isDivided}
        listBackground={listBackground}
        listColor={listColor}
        listDivider={listDivider}
      >
        {title ? (
          <ListTitleWrapper>
            <ListTitle text={title} />
          </ListTitleWrapper>
        ) : null}
        <PaddingContext.Provider value={padding}>
          {children
            || data.map((item, index) => {
              const itemKey = item.id || item.title || index;
              return (
                <ListItem
                  description={item.description}
                  disabled={item.disabled}
                  id={item.id}
                  isSelected={item.isSelected}
                  key={itemKey}
                  onClick={item.onClick}
                  onClickItem={item.onClickItem}
                  post={item.post}
                  pre={item.pre}
                  title={item.title}
                />
              );
            })}
        </PaddingContext.Provider>
      </ListWrapper>
    </InteractiveContext.Provider>
  );
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
  id: PropTypes.string,
  isDivided: PropTypes.bool,
  isInteractive: PropTypes.bool,
  isLight: PropTypes.bool,
  isInverse: PropTypes.bool,
  padding: PropTypes.string,
  title: PropTypes.string,
};
List.defaultProps = {
  children: null,
  className: null,
  data: [],
  id: null,
  isDivided: false,
  isLight: false,
  isInteractive: false,
  isInverse: false,
  padding: "0",
  title: null,
};

export { List as default, ListSection, ListItem };
