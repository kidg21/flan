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

function Command({
  align, disabled, icon, id, label, name, onClick, size,
}) {
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
      icon={icon}
      id={id}
      isDisabled={isDisabled}
      justifyIcon={justifyIcon}
      onClick={onClick}
    >
      {icon ? <CommandIcon icon={icon} /> : null}
      <CommandName>{label}</CommandName>
    </CommandContainer>
  );
}

Command.propTypes = {
  align: PropTypes.oneOf(["center", "right"]),
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
  disabled: false,
  icon: null,
  id: null,
  label: "Command",
  name: null,
  onClick: null,
  size: null,
};

export { Command as default };
