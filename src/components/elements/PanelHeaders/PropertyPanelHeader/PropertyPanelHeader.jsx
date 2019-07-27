import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { colors, shadows } from "Variables";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";

const HeaderSpace = styled.div`
	padding-top: 0.7rem;
	font-weight: 700;
`;

const ApnSpan = styled.span`
	font-size: small;
	font-weight: 400;
	color: ${props => (props.badgeBG ? colors.white : colors.grey_60)};
`;

const Location = styled.div`
	display: inline-block;
`;

function PropertyPanelHeader({ id, title, APN }) {
	return (
		<Piece id={id}>
			<HeaderSpace>
				<Bar
					left={
						<Location>
							<Title title={title} weight="bold" />
							<ApnSpan>APN: {APN}</ApnSpan>
						</Location>
					}
					center={
						<IconBlock>
							<Icon
								icon={["fal", "directions"]}
								size="2x"
								type="info"
								onClick
							/>
						</IconBlock>
					}
					right={<Icon icon={["far", "ellipsis-v"]} size="lg" />}
				/>
			</HeaderSpace>
		</Piece>
	);
}
PropertyPanelHeader.propTypes = {
	id: PropTypes.string,
	title: PropTypes.any.isRequired,
	APN: PropTypes.string,
	onClick: PropTypes.func,
};
export default PropertyPanelHeader;
