import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";

const HeaderSpace = styled.div`
	padding-top: 0.7rem;
	font-weight: 700;
`;

function MainPanelHeader({ id, title }) {
<<<<<<< HEAD:src/components/elements/MainPanelHeader/MainPanelHeader.jsx
  return (
    <Piece id={id}>
      <HeaderSpace>
        <Bar
          left={<h4>{title}</h4>}
          right={<Icon icon={["far", "ellipsis-v"]} size="lg" />}
        />
      </HeaderSpace>
    </Piece>
  );
=======
	return (
		<Piece id={id}>
			<HeaderSpace>
				<Bar
					left={<Title title={title} weight="bold" />}
					right={<Icon icon={["far", "ellipsis-v"]} size="lg" />}
				/>
			</HeaderSpace>
		</Piece>
	);
>>>>>>> master:src/components/elements/PanelHeaders/MainPanelHeader/MainPanelHeader.jsx
}
MainPanelHeader.propTypes = {
	id: PropTypes.string,
	title: PropTypes.any.isRequired,
};
export default MainPanelHeader;
