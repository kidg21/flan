/* eslint-disable no-param-reassign */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
import Icon from "atoms/Icon";

const CommandContainer = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: ${(props) => {
    return props.alignIcon || "";
  }};
  justify-items: ${(props) => {
    return props.justifyIcon || "";
  }};
  grid-gap: 0.5rem;
  width: max-content;
  font-size: ${(props) => {
    return props.commandSize || "";
  }};
  color: ${(props) => {
    return props.theme.palette[props.commandColor] || props.theme.palette.info;
  }};
  user-select: none;
  cursor: ${(props) => {
    return props.isDisabled ? "not-allowed" : "";
  }};
  pointer-events: ${(props) => {
    return props.isDisabled ? "none" : "";
  }};
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => {
    return props.theme.palette.info;
  }};
  }
  &:active {
    color: ${(props) => {
    return props.theme.palette.info;
  }};
  }
`;

const CommandName = styled.label`
  grid-area: name;
  font-size: inherit;
  color: inherit;
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  &:focus {
    border: 1px solid
      ${(props) => {
    return props.theme.palette.primary;
  }};
    outline: none;
  }
`;

const CommandIcon = styled(Icon)`
  grid-area: icon;
  margin-top: 0.15em;
  color: inherit;
`;

function Command({
  id, name, label, icon, align, size, onClick, disabled,
}) {
  let alignIcon = "'icon name'";
  const justifyCommand = "flex-start";
  let justifyIcon = "flex-start";
  let commandColor = "primary";
  let commandSize = "inherit";
  switch (name) {
    case "add to list":
      icon = "plus";
      label = "Add To List";
      break;
    case "address":
      icon = "address";
      label = "Address";
      break;
    case "apn":
      icon = "apn";
      label = "APN";
      break;
    case "bookmark":
      icon = "bookmark";
      label = "Bookmark";
      break;
    case "contacts":
      icon = "contacts";
      label = "Contacts";
      break;
    case "gps":
      icon = "gps";
      label = "GPS";
      break;
    case "menu":
      icon = "bars";
      label = "Menu";
      break;
    case "notifications":
      icon = "notification";
      label = "Notifications";
      break;
    case "print":
      icon = "print";
      label = "Print";
      break;
    case "profile":
      icon = "user";
      label = "Profile";
      break;
    case "settings":
      icon = "settings";
      label = "Settings";
      break;
    case "share":
      icon = "share";
      label = "Share";
      break;
    default:
      break;
  }
  switch (align) {
    case "center":
      alignIcon = "'icon' 'name'";
      justifyIcon = "center";
      break;
    case "right":
      alignIcon = "'name icon'";
      break;
    default:
      break;
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) commandColor = "grey2";

  switch (size) {
    case "small":
      commandSize = ".8em";
      break;
    case "large":
      commandSize = "1.2em";
      break;
    default:
      break;
  }
  return (
    <CommandContainer
      id={id}
      justifyCommand={justifyCommand}
      alignIcon={alignIcon}
      justifyIcon={justifyIcon}
      commandColor={commandColor}
      commandSize={commandSize}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {icon ? <CommandIcon icon={icon} /> : null}
      <CommandName >{label}</CommandName>
    </CommandContainer>
  );
}

Command.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  align: PropTypes.string,
  disabled: PropTypes.boolean,
  size: PropTypes.string,
  onClick: PropTypes.node,
  icon: PropTypes.string,
  label: PropTypes.string,
};

// Command.defaultProps = {
//   label: "Command",
//   icon: null,
// };

export { Command as default };
