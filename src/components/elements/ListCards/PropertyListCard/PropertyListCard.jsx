import React from "react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Table from "blocks/Table";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card, { Piece, Wrapper } from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled, { css } from "styled-components";

const Space = styled.div`
  padding-top: 0.5em;
`;

function PropertyListCard({
  id,
  address,
  APN,
  lotData,
  ownerData,
  buildingData,
}) {
  return (
    <Card id={id}>
      <PropertyPanelHeader title={address} APN={APN} />
      <Bar left={<Command name="add to list" size="small" />} />
      <Piece>
        <Wrapper>
          <Title text="Lot" size="normal" />
          <Table data={lotData} />
          <Space />
          <Title text="Building" size="normal" />
          <Table data={buildingData} />
          <Space />
          <Title text="Owner" size="normal" />
          <Table data={ownerData} />
        </Wrapper>
      </Piece>
    </Card>
  );
}

PropertyListCard.propTypes = {
  id: PropTypes.string,
  address: PropTypes.any,
  APN: PropTypes.any,
  lotData: PropTypes.any,
  buildingData: PropTypes.any,
};

export default PropertyListCard;
