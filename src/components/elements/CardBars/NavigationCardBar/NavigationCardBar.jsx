import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";
import { colors } from "Variables";

const Line = styled.div`
	display: flex;
	border-bottom: 1px solid ${colors.grey_light};
`;

function NavigationCardBar({ id, title, number, disabled, onClick }) {
	return (
		<Piece id={id} title={title} number={number} disabled={disabled}>
			<Bar
				left={<Title title={title} number={number} weight="normal" />}
				right={<Icon icon={["far", "angle-right"]} />}
				onClick={onClick}
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
