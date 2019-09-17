import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, fonts, fontSize, shadows } from "Variables";

const StyledDateRangePicker = styled.input.attrs({ type: "date" })`
	text-align: center;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	padding: 0.5rem 0.75rem;

	&:active {
		border-color: ${colors.success_light};
	}
`;

const StyledTimePicker = styled.input.attrs({ type: "time" })`
	text-align: center;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	padding: 0.5rem 0.75rem;

	&:active {
		border-color: ${colors.success_light};
	}
`;
const getDateWidget = (currentDateValue, onChange) => {
	return (<StyledDateRangePicker value={currentDateValue} onChange={(e) => {
		if (typeof onChange === "function") {
			onChange(e);
		}
	}} />);
}

const getTimeWidget = (currentTimeValue, onChange) => {
	return (<StyledTimePicker value={currentTimeValue} onChange={(e) => {
		if (typeof onChange === "function") {
			onChange(e);
		}
	}} />);
}


function Calendar({ id, date, time, datetime, dateValue, timeValue, onChange }) {
	const currentDateValue = dateValue || "";
	const currentTimeValue = timeValue || "";
	return (
		<div id={id}>
			{date ? getDateWidget(currentDateValue, onChange) : null}
			{time ? getTimeWidget(currentTimeValue, onChange) : null}
			{datetime ? (
				<div>
					{" "}
					{getDateWidget(onChange)}
					{getTimeWidget(onChange)}
					{" "}
				</div>
			) : null}
		</div>
	);
}

Calendar.propTypes = {
	id: PropTypes.string,
	date: PropTypes.bool,
	time: PropTypes.bool,
	datetime: PropTypes.bool,
};

export default Calendar;
