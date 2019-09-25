import React from "react";
import Title, {Description} from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import Grid from "layout/Grid";
import styled from "styled-components";


const Titles = styled.div`
display: inlineblock;
`;

function PropCard({
  id, address, landUse, image, price,
}) {
  return (
    <Card id={id}>
      <Grid column="1">
            <Title text={address} weight="bold" />
            <Description text={landUse} />
            <Description text={price}/>
            <Command name="add to list"  />
        </Grid>
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
