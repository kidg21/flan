/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Table from "blocks/Table";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled from "styled-components";

const Space = styled.div`
  padding-top: 0.5em;
`;

const Wrapper = styled.div`
  padding: 1em;
`;

function PropertyListCard({
  id,
  address,
  APN,
  lotData,
  ownerData,
  onClick,
  buildingData,
}) {
  return (
    <Card id={id}>
      <PropertyPanelHeader title={address} APN={APN} onClick={onClick} />
      <Bar left={<Command icon="plus" label="Add To List" />} />
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
    </Card>
  );
}

PropertyListCard.propTypes = {
  id: PropTypes.string,
  address: PropTypes.any,
  APN: PropTypes.any,
  onClick: PropTypes.func,
  lotData: PropTypes.any,
  buildingData: PropTypes.any,
};

export default PropertyListCard;
