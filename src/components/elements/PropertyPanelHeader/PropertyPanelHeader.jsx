import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";

const HeaderSpace = styled.div`
  padding-top: 0.7rem;
  font-weight: 700;
`;

function PropertyPanelHeader({ id, title, onClick, onClickDirection }) {
  return (
    <Piece id={id}>
      <HeaderSpace>
        <Bar
          left={title}
          right={
            <IconBlock>
              <Icon
                icon={["fal", "directions"]}
                size="lg"
                anchor
                onClickDirection={onClickDirection}
              />
              <Icon icon={["far", "ellipsis-v"]} size="lg" onClick={onClick} />
            </IconBlock>
          }
        />
      </HeaderSpace>
    </Piece>
  );
}
PropertyPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};
export default PropertyPanelHeader;
