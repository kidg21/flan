/* eslint-disable complexity */
/* eslint-disable no-param-reassign */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "Variables";
import { DisabledContext } from "States";
import Title from "base/Typography";
import Icon from "atoms/Icon";

const CommandContainer = styled.a`
  display: ${(props) => {
    return props.icon ? "grid" : "";
  }};
  grid-gap: ${(props) => {
    return props.icon ? "0.5rem" : "";
  }};
  grid-template-columns: ${(props) => {
    return props.alignCommand || "auto 1fr";
  }};
  grid-template-areas: ${(props) => {
    return props.alignIcon || "'icon name'";
  }};
  justify-items: ${(props) => {
    return props.justifyIcon || "";
  }};
  align-items: center;
  width: max-content;
  font-size: ${(props) => {
    return props.commandSize || "";
  }};
  color: ${(props) => {
    return props.commandColor || "";
  }};
  user-select: none;
  cursor: ${(props) => {
    return props.isDisabled ? "not-allowed" : "";
  }};
  pointer-events: ${(props) => {
    return props.isDisabled ? "none" : "";
  }};
  transition: all 0.3s ease;
`;

const CommandName = styled(Title)`
  grid-area: name;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  cursor: pointer;
`;

const CommandIcon = styled(Icon)`
  grid-area: icon;
`;

const commandHash = {
  "add to list": { icon: "plus", label: "Add To List" },
  "address": { icon: "address", label: "Address" },
  "apn": { icon: "apn", label: "APN" },
  "bookmark": { icon: "bookmark_solid", label: "Bookmark" },
  "contacts": { icon: "contacts", label: "Contacts" },
  "delete": { icon: "delete", label: "Delete" },
  "gps": { icon: "gps", label: "GPS" },
  "menu": { icon: "bars", label: "Menu" },
  "notifications": { icon: "notification_solid", label: "Notifications" },
  "open": { icon: "open", label: "Open" },
  "print": { icon: "print", label: "Print" },
  "profile": { icon: "user", label: "Profile" },
  "report issue": { icon: "mail", label: "Report Issue" },
  "settings": { icon: "settings", label: "Settings" },
  "share": { icon: "share", label: "Share" },
  "view report": { icon: "report", label: "View Report" },
};

function Command({
  align, command, disabled, icon, id, label, name, onClick, size,
}) {
  command = commandHash[command] || { icon, label };
  let alignCommand = "";
  let alignIcon = "";
  let justifyIcon = "flex-start";
  let commandColor = colors.anchor;
  let commandSize = "";
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) commandColor = colors.grey_40;
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
      icon = "bookmark_solid";
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
      icon = "notification_solid";
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
      alignCommand = "auto";
      alignIcon = "'icon' 'name'";
      justifyIcon = "center";
      break;
    case "right":
      alignIcon = "'name icon'";
      break;
    default:
      break;
  }
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
      alignCommand={alignCommand}
      alignIcon={alignIcon}
      commandColor={commandColor}
      commandSize={commandSize}
      icon={command.icon}
      id={id}
      isDisabled={isDisabled}
      justifyIcon={justifyIcon}
      label={label}
      onClick={onClick}
    >
      {command.icon ? <CommandIcon icon={command.icon} /> : null}
      <CommandName>{command.label}</CommandName>
    </CommandContainer>
  );
}

Command.propTypes = {
  align: PropTypes.oneOf(["center", "right"]),
  command: PropTypes.string,
  disabled: PropTypes.boolean,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.node,
  size: PropTypes.oneOf(["small", "large"]),
};

Command.defaultProps = {
  align: null,
  command: null,
  disabled: false,
  icon: null,
  id: null,
  label: "Command",
  name: null,
  onClick: null,
  size: null,
};

export { Command as default };
