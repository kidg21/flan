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

function Calendar({ id, date, time, datetime }) {
	return (
		<div id={id} date={date} time={time} datetime={datetime}>
			{date ? <StyledDateRangePicker /> : null}
			{time ? <StyledTimePicker /> : null}
			{datetime ? (
				<div>
					{" "}
					<StyledDateRangePicker />
					<StyledTimePicker />{" "}
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
