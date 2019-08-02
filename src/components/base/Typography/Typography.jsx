// Import dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Import colors and sizes variables
import { colors, shadows, fonts, fontSize } from "Variables";

const StyledDescription = styled.h5`
	margin: 0;
	color: ${props => props.textColor || colors.grey_80};
	font-size: ${props => props.textSize || ""};
	font-weight: ${props => props.textWeight || "500"};
`;

const CountContainer = styled.div`
	display: inline-flex;
	margin-left: 4em;
`;

const StyledText = styled.h4`
	color: ${props => props.textColor || colors.grey_80};
	font-size: ${props => props.textSize || ""};
	font-weight: ${props => props.textWeight || ""};
	margin: 0;
	font-style: ${props => props.textStyle || ""};
	text-decoration: ${props => props.textDecoration || ""};
`;

function Title({ id, title, type, style, weight, count, size }) {
	let textColor;
	let textWeight;
	let textSize;
	let textStyle;
	let textDecoration;
	switch (type) {
		case "info":
			textColor = colors.anchor;
			break;
		case "success":
			textColor = colors.success;
			break;
		case "warning":
			textColor = colors.warning;
			break;
		case "alert":
			textColor = colors.alert;
			break;
		case "inherit":
			textColor = "inherit";
			break;
		case "inverse":
			textColor = colors.white;
			break;
		default:
			break;
	}

	switch (size) {
		case "small":
			textSize = "0.75rem";
			break;
		case "normal":
			textSize = "0.875rem";
			break;
		case "large":
			textSize = "1.25rem";
			break;
		case "xlarge":
			textSize = "1.5rem";
			break;
		default:
			break;
	}

	switch (style) {
		case "underline":
			textDecoration = "underline";
			break;
		case "italic":
			textStyle = "italic";
			break;
		default:
			break;
	}
	switch (weight) {
		case "light":
			textWeight = "500";
			break;
		case "normal":
			textWeight = "600";
			break;
		case "bold":
			textWeight = "700";
			break;
		default:
			break;
	}
	return (
		<StyledText
			id={id}
			textColor={textColor}
			textWeight={textWeight}
			textSize={textSize}
			textStyle={textStyle}
			textDecoration={textDecoration}
		>
			{title}
			{count ? (
				<CountContainer>
					<a>{count}</a>
				</CountContainer>
			) : null}
		</StyledText>
	);
}

Title.propTypes = {
	id: PropTypes.string,
	title: PropTypes.any,
	number: PropTypes.bool,
	results: PropTypes.bool,
	weight: PropTypes.string,
	type: PropTypes.string,
	style: PropTypes.string,
	size: PropTypes.string,
};

function Body({ id, body, type, weight, size }) {
	let textColor;
	let textWeight;
	let textSize;
	switch (type) {
		case "info":
			textColor = colors.anchor;
			break;
		case "success":
			textColor = colors.success;
			break;
		case "warning":
			textColor = colors.warning;
			break;
		case "alert":
			textColor = colors.alert;
			break;
		case "inherit":
			textColor = "inherit";
			break;
		case "inverse":
			textColor = colors.white;
			break;
		default:
			break;
	}

	switch (size) {
		case "small":
			textSize = "0.75rem";
			break;
		case "normal":
			textSize = "0.875rem";
			break;
		case "large":
			textSize = "1.25rem";
			break;
		case "xlarge":
			textSize = "1.5rem";
			break;
		default:
			break;
	}
	switch (weight) {
		case "light":
			textWeight = "500";
			break;
		case "normal":
			textWeight = "600";
			break;
		case "bold":
			textWeight = "700";
			break;
		default:
			break;
	}
	return (
		<StyledDescription
			id={id}
			textColor={textColor}
			textWeight={textWeight}
			textSize={textSize}
		>
			{body}
		</StyledDescription>
	);
}

Body.propTypes = {
	id: PropTypes.string,
	body: PropTypes.any,
	weight: PropTypes.string,
	type: PropTypes.string,
	size: PropTypes.string,
};

export { Title as default, Body };
