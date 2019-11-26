/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken, Lighten } from "Variables";
import Bar from "blocks/Bar";
import Divider from "atoms/Divider";
import Title, { Description } from "base/Typography";
import { InteractiveContext, DisabledContext } from "States";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  li:not(:last-child) {
    border-bottom: ${props => {
    return props.divider ? "1px solid" : "";
  }};
    border-bottom-color: ${props => {
    return props.divider ? props.theme.palette.grey5 : "";
  }};
  }
`;

// const Identifier = styled.div`
// position: relative;
// &:before {
//   display: ${props => {
//   return props.active ? "block" : "none";
// }};
//   content: "";
//   position: absolute;
//   top: 0%;
//   left: 0%;
//   height: 100%;
//   border-style: solid;
//   border-width: 2px;
// }
// `;

const ListItemWrapper = styled.li`
  position: relative;
  color: ${props => {
    return props.theme.text[props.itemColor];
  }};
  padding: 1em;
  background-color: ${props => {
    return (
      props.theme.palette.background
    );
  }};
  cursor: ${props => {
    return props.interactive ? "pointer" : "";
  }};
  &:focus,
  &:hover {
    ${props => {
    return props.interactive ? Darken : "";
  }};
  &:selected {
    outline: none;
    ${props => {
    return props.interactive ? Lighten : "";
  }};
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    background-color: ${props => {
    return props.theme.background.disabled;
  }};
    border-left: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

function List({ children, id, interactive, divider, title }) {
  return (
    <InteractiveContext.Provider value={interactive}>
      {title ? <Bar left={<Title text={title} weight="bold" />} /> : null}
      <ListWrapper divider={divider} id={id}>{children}</ListWrapper>
    </InteractiveContext.Provider>
  );
}

function ListItem({
  active,
  description,
  disabled,
  id,
  primaryAction,
  secondaryAction,
  interactive,
  label,
  onClick,
}) {
  let content;

  if (primaryAction) {
    <Bar
      contentAlign="center"
      centerAlign="left"
      left={<React.Fragment> {primaryAction} </React.Fragment>}
      center={
        <>
          {<Title text={label} />}
          {description ? <Description text={description} /> : null}
        </>
      }
    />
  }
  else {
    content = (
      <Bar
        contentAlign="center"
        centerAlign="left"
        left={
          <>
            {<Title text={label} />}
            {description ? <Description text={description} /> : null}
          </>
        }
      />)
  }

  if (secondaryAction) {
    content = (
      <Bar
        contentAlign="center"
        centerAlign="left"
        left={
          <>
            {<Title text={label} />}
            {description ? <Description text={description} /> : null}
          </>
        }
        right={secondaryAction}
      // rightWidth={(children && children.props.width) || ""}
      />)
  }

  if (primaryAction) {
    if (secondaryAction) {
      content = (
        <Bar
          contentAlign="center"
          centerAlign="left"
          left={<React.Fragment> {primaryAction} </React.Fragment>}
          left={
            <>
              {<Title text={label} />}
              {description ? <Description text={description} /> : null}
            </>
          }
          right={secondaryAction}
          rightWidth={(secondaryAction && children.props.width) || ""}
        />)
    }
  }

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
      tabIndex={disabled ? "-1" : "1"}
    >
      <DisabledContext.Provider value={disabled}>
        {content}
      </DisabledContext.Provider>
    </ListItemWrapper>
  );
}

List.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  title: PropTypes.string
};
List.defaultProps = {
  children: null,
  id: null,
  interactive: false,
  title: null
};

ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ListItem.defaultProps = {
  active: false,
  children: null,
  description: null,
  disabled: false,
  id: null,
  interactive: null,
  onClick: null,
};

export { List as default, ListItem };
