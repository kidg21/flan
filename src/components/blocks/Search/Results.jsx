/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "layout/Bar";
import Grid from "layout/Grid";
import { Link } from "base/Typography";
import List, { ListItem } from "blocks/List";

const ResultsList = styled.div`
width: 20rem;
display: flex;
background-color: yellow;
top: 3rem;
z-index: 109 !important;
`;

function ResultContainer({ id, results }) {
  return (
    <ResultsList>
      <Grid columns="1">
      <List id={id} isInteractive>
        {results.slice(0, 10).map((item, index) => {
          return <ListItem key={item.id || index} {...item} />;
        })}
      </List>
      {results.length >= 10 ? <Bar
        padding="2x"
        center={<Link text="View More" />}
      /> : null}
      </Grid>
    </ResultsList>
  );
}

ResultContainer.propTypes = {
  id: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  })),
};

ResultContainer.defaultProps = {
  id: null,
  results: null,

};

export default ResultContainer;
