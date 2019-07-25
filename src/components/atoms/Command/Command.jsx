import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import Icon from "atoms/Icon";

const CommandContainer = styled.a`
	display: grid;
	grid-template-columns: auto 1fr;
	justify-self: ${props => props.justifyCommand || ""};
	grid-template-areas: ${props => props.alignIcon || ""};
	justify-items: ${props => props.justifyIcon || ""};
	grid-gap: 0.5rem;
	align-items: center;
	width: max-content;
	font-size: ${props => props.commandSize || ""};
	color: ${props => props.commandColor || ""};
	user-select: none;
	cursor: ${props => (props.isDisabled ? "not-allowed" : "")};
	pointer-events: ${props => (props.isDisabled ? "none" : "")};
	transition: all 0.3s ease;
	&:hover {
		color: ${colors.anchor_dark};
	}
	&:active {
		color: ${colors.anchor_light};
	}
`;

const CommandName = styled.h5`
	grid-area: name;
	font-size: inherit;
	line-height: inherit;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin: 0;
`;

const CommandIcon = styled(Icon)`
	grid-area: icon;
`;

function Command({
	id,
	name,
	label,
	icon,
	align,
	state,
	size,
	isDisabled,
	style,
}) {
	let alignIcon = "'icon name'";
	let justifyCommand = "flex-start";
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
			justifyCommand = "center";
			alignIcon = "'icon' 'name'";
			justifyIcon = "center";
			break;
		case "right":
			justifyCommand = "flex-end";
			alignIcon = "'name icon'";
			break;
		default:
			break;
	}
	switch (state) {
		case "disabled":
			commandColor = colors.grey_40;
			isDisabled = true;
			break;
		default:
			break;
	}
	switch (size) {
		case "small":
			commandSize = ".9em";
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
		>
			{icon ? <CommandIcon icon={icon} /> : null}
			<CommandName>{label}</CommandName>
		</CommandContainer>
	);
}

Command.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	align: PropTypes.string,
	state: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.string,
};

Command.defaultProps = {
	label: "Command",
	icon: "user-circle",
};

export { Command as default };
