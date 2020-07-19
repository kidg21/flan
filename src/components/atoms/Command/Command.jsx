/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
import Icon from "atoms/Icon";
import { Label } from "base/Typography";

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
  font-size: ${(props) => {
    return props.commandSize || "";
  }};
  color: ${(props) => {
    return props.theme.text[props.commandColor] || props.theme.text.link;
  }};
  max-width: max-content;
  user-select: none;
  cursor: ${(props) => {
    return props.isDisabled ? "not-allowed" : "pointer";
  }};
  pointer-events: ${(props) => {
    return props.isDisabled ? "none" : "";
  }};
  &:hover { 
    color: ${(props) => {
    return props.theme.palette.action100;
  }};
  }
`;

const CommandName = styled(Label)`
  grid-area: name;
  font-size: inherit;
  font-weight: 500;
  color: inherit;
  text-transform: capitalize;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  &:focus {
    border: 1px solid
      ${(props) => {
    return props.theme.palette.action80;
  }};
    outline: none;
  }
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;

const CommandIcon = styled(Icon)`
  grid-area: icon;
`;

const commandHash = {
  "add": { icon: "plus", label: "Add" },
  "address": { icon: "address", label: "Address" },
  "apn": { icon: "apn", label: "APN" },
  "apply": { icon: "check", label: "Apply" },
  "bookmark": { icon: "bookmark", label: "Bookmark" },
  "close": { icon: "close", label: "Close" },
  "compare": { icon: "compare", label: "Compare" },
  "copy": { icon: "copy", label: "Copy" },
  "contacts": { icon: "contacts", label: "Contacts" },
  "delete": { icon: "delete", label: "Delete" },
  "download": { icon: "download", label: "Download" },
  "edit": { icon: "edit", label: "Edit" },
  "exclude": { icon: "exclude", label: "Exclude" },
  "favorites": { icon: "star", label: "Favorites" },
  "filter": { icon: "filter", label: "Filter" },
  "gps": { icon: "gps", label: "GPS" },
  "help": { icon: "help", label: "Help" },
  "include": { icon: "include", label: "Include" },
  "info": { icon: "info_circle", label: "Info" },
  "measure": { icon: "measure", label: "Measure" },
  "menu": { icon: "bars", label: "Menu" },
  "new": { icon: "plus_square", label: "New" },
  "notifications": { icon: "notification", label: "Notifications" },
  "open": { icon: "open", label: "Open" },
  "photos": { icon: "photos", label: "Photos" },
  "preferences": { icon: "preferences", label: "Preferences" },
  "print": { icon: "print", label: "Print" },
  "profile": { icon: "user", label: "Profile" },
  "redo": { icon: "redo", label: "Redo" },
  "reports": { icon: "report", label: "Reports" },
  "save": { icon: "save", label: "Save" },
  "search": { icon: "search", label: "Search" },
  "settings": { icon: "settings", label: "Settings" },
  "share": { icon: "share", label: "Share" },
  "support": { icon: "support", label: "Support" },
  "sync": { icon: "sync", label: "Sync" },
  "undo": { icon: "undo", label: "Undo" },
  "upload": { icon: "upload", label: "Upload" },
  "view": { icon: "view", label: "View" },
  "zoom extents": { icon: "zoom_extents", label: "Zoom Extents" },
};

function Command({
  align, command, disabled, icon, id, label, onClick, size,
}) {
  const cmd = commandHash[command] || { icon, label };
  let alignCommand = "";
  let alignIcon = "";
  let justifyIcon = "flex-start";
  let commandColor;
  let commandSize = "";


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

  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) commandColor = "disabled";

  switch (size) {
    case "sm":
      commandSize = ".8em";
      break;
    case "lg":
      commandSize = "1.2em";
      break;
    default:
      commandSize = "1em";
      break;
  }
  return (
    <CommandContainer
      alignCommand={alignCommand}
      alignIcon={alignIcon}
      commandColor={commandColor}
      commandSize={commandSize}
      icon={cmd.icon}
      id={id}
      isDisabled={isDisabled}
      justifyIcon={justifyIcon}
      label={label}
      onClick={onClick}
      title={cmd.label}
    >
      {cmd.icon ? <CommandIcon icon={cmd.icon} /> : null}
      <CommandName text={cmd.label} />
    </CommandContainer>
  );
}

Command.propTypes = {
  align: PropTypes.oneOf(["center", "right"]),
  command: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "lg"]),
};

Command.defaultProps = {
  align: null,
  command: null,
  disabled: false,
  icon: null,
  id: null,
  label: "Command",
  onClick: null,
  size: null,
};

export default Command;
