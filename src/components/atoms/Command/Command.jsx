/* eslint-disable no-param-reassign */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "Variables";
import { DisabledContext } from "States";
import Icon from "atoms/Icon";
import Title from "base/Typography";

const CommandContainer = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: ${(props) => { return props.alignIcon || ""; }};
  justify-items: ${(props) => { return props.justifyIcon || ""; }};
  grid-gap: 0.5rem;
  align-items: center;
  width: max-content;
  font-size: ${(props) => { return props.commandSize || ""; }};
  color: ${(props) => { return props.commandColor || ""; }};
  user-select: none;
  cursor: ${(props) => { return (props.isDisabled ? "not-allowed" : ""); }};
  pointer-events: ${(props) => { return (props.isDisabled ? "none" : ""); }};
  transition: all 0.3s ease;
  &:hover {
    color: ${colors.anchor_dark};
  }
  &:active {
    color: ${colors.anchor_light};
  }
`;

const CommandName = styled(Title)`
  grid-area: name;
  font-size: inherit;
  font-color: inherit;
  line-height: inherit;
`;

const CommandIcon = styled(Icon)`
  grid-area: icon;
  color: inherit;
`;

function Command({
  id,
  name,
  label,
  icon,
  align,
  size,
  disabled,
}) {
  let alignIcon = "'icon name'";
  const justifyCommand = "flex-start";
  let justifyIcon = "flex-start";
  let commandColor = colors.anchor;
  let commandSize = "inherit";
  switch (name) {
    case "add to list":
      icon = "plus";
      label = "Add To List";
      break;
    case "address":
      icon = "map-marker-alt";
      label = "Address";
      break;
    case "apn":
      icon = "hashtag";
      label = "APN";
      break;
    case "bookmark":
      icon = ["far", "bookmark"];
      label = "Bookmark";
      break;
    case "contacts":
      icon = "users";
      label = "Contacts";
      break;
    case "gps":
      icon = ["far", "map"];
      label = "GPS";
      break;
    case "menu":
      icon = "bars";
      label = "Menu";
      break;
    case "notifications":
      icon = ["far", "bell"];
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
      icon = ["far", "cog"];
      label = "Settings";
      break;
    case "share":
      icon = ["far", "share"];
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
  if (isDisabled) commandColor = colors.grey_40;

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
      label={label}
      icon={icon}
      justifyCommand={justifyCommand}
      alignIcon={alignIcon}
      justifyIcon={justifyIcon}
      commandColor={commandColor}
      commandSize={commandSize}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {icon ? <CommandIcon icon={icon} /> : null}
      <CommandName title={label} weight="normal" />
    </CommandContainer>
  );
}

Command.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  align: PropTypes.string,
  disabled: PropTypes.boolean,
  size: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

Command.defaultProps = {
  label: "Command",
  icon: null,
};

export { Command as default };
