import React from "react";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled from "styled-components";


const Titles = styled.div`
display: inline-block'
`;

function PropCard({
  id, address, landUse, image, price,
}) {
  return (
    <Card id={id}>
      <Bar
        left={
          <Titles>
            <Title text={address} />
            <p>
              {landUse} <br />
              {price}
            </p>
            <Command icon="plus" label="Add To List" />
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
