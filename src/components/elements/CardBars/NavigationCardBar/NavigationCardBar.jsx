import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";
import { colors } from "Variables";

import Switch from "atoms/Switch";

const Line = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.grey_light};
`;

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  filter: ${props => (props.disabled ? "brightness(130%)" : "")};
`;

function NavigationCardBar({ id, title, number, disabled, toggle, onStateChange, onClick, switchProps }) {
	let isDisabled = false;

	if (typeof disabled === "boolean") {
		isDisabled = disabled;
	} else if (toggle) {
		isDisabled = true;
	}
	const [state, setState] = useState({ toggle: toggle || false, disabled: isDisabled });

	//i needed an indicator that the component was disabled so I did this just temporarily. Remove later
	const titleComponent = (<Title text={title} weight="normal" />);
	let leftComponent = null;
	if (state.toggle === true) {
		leftComponent = (<SwitchContainer>
			<Switch checked={!state.disabled} onChange={(e) => {
				const oldState = Object.assign({}, state);
				const newState = Object.assign({}, state, { disabled: !state.disabled });
				setState(newState);
				if (e) {
					e.stopPropagation();
				}
				if (typeof onStateChange === "function") {
					onStateChange(oldState, newState, setState, e);
				}
			}} {...switchProps} />
			{titleComponent}
		</SwitchContainer>);
	} else {
		leftComponent = titleComponent;
	}
	return (
		<Piece title={title} number={number} disabled={state.disabled}>
			<Bar
				id={id}
				disabled={state.disabled}
				left={leftComponent}
				right={<Icon icon="right" />}
				padding="2x"
				onClick={state.disabled ? null : onClick}
			/>
			<Line />
		</Piece>
	);
}

NavigationCardBar.propTypes = {
	id: PropTypes.string,
	title: PropTypes.any.isRequired,
	number: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default NavigationCardBar;
