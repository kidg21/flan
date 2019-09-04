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
const getDateWidget = (setDate, onChange, currentTimeValue) => {
	return (<StyledDateRangePicker onChange={(e) => {
		const newDateValue = e.currentTarget.value;
		setDate(newDateValue);
		if (typeof onChange === "function") {
			onChange({ dateValue: newDateValue, timeValue: currentTimeValue });
		}
	}} />);
}

const getTimeWidget = (setTime, onChange, currentDateValue) => {
	return (<StyledTimePicker onChange={(e) => {
		const newTimeValue = e.currentTarget.value;
		setTime(newTimeValue);
		if (typeof onChange === "function") {
			onChange({ dateValue: currentDateValue, timeValue: newTimeValue });
		}
	}} />);
}


function Calendar({ id, date, time, datetime, dateValue, timeValue, onChange }) {
	const [currentDateValue, setDate] = useState(dateValue || "");
	const [currentTimeValue, setTime] = useState(timeValue || "");
	return (
		<div id={id}>
			{date ? getDateWidget(setDate, onChange, currentTimeValue) : null}
			{time ? getTimeWidget(setTime, onChange, currentDateValue) : null}
			{datetime ? (
				<div>
					{" "}
					{getDateWidget(setDate, onChange, currentTimeValue)}
					{getTimeWidget(setTime, onChange, currentDateValue)}
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
