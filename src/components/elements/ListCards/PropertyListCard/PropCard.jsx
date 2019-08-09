import React from "react";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled, { css } from "styled-components";

const image = (
  <img
    src="https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    width="120px"
    height="90px"
  />
);

const Titles = styled.div`
display: inline-block'
`;

function PropCard({ id, address, landUse, price }) {
  return (
    <Card id={id}>
      <Bar
        left={
          <Titles>
            <Title title={address} />
            <p>
              {landUse} <br />
              {price}
            </p>
            <Command name="add to list" size="small" />
          </Titles>
        }
        right={image}
      />
    </Card>
  );
}

PropCard.propTypes = {
  id: PropTypes.string,
  address: PropTypes.string,
  landUse: PropTypes.string,
  price: PropTypes.string,
};

export default PropCard;
