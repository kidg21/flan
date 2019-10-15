import React from "react";
import Title, { Description, Number } from "base/Typography";
import PropTypes from "prop-types";
import Menu from "blocks/Menu";
import Container from "atoms/Container";
import Grid from "layout/Grid";

import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";

function MapInfo({ id, results }) {
  return (
    <Container>
      <Bar left={<Title text={results} type="info" size="xlarge" />} right={<Menu />} />
    </Container>
  );
}

MapInfo.propTypes = {
  id: PropTypes.string,
  results: PropTypes.any,
};

export default MapInfo;
