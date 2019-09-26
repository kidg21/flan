import React from "react";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import Grid from "layout/Grid";
import styled from "styled-components";

const Titles = styled.div`
  display: inline-block;
`;

function PropCard({
  id, address, landUse, image, price,
}) {
  return (
    <Card id={id}>
      <Bar
        left={
          <Titles>
            <Title text={address} weight="bold" />
            <Title text={landUse} size="small" />
            <Title text={price} size="small" />
            <Command name="add to list" />
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
  image: PropTypes.node,
  landUse: PropTypes.string,
  price: PropTypes.string,
};

PropCard.defaultProps = {
  id: null,
  address: null,
  image: null,
  landUse: null,
  price: null,
};

export default PropCard;
