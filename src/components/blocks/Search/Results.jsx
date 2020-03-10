/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import { Link } from "base/Typography";
import List, { ListItem } from "blocks/List";


function ResultContainer({ id, results }) {
  return (
    <React.Fragment id={id}>
      <List interactive>
        { results.slice(0, 10).map((item) => {
    return (
      <ListItem
        id={item.id}
        title={item.title}
        description={item.description}
        href={item.href}
        onClick={item.onClick}
      />
    );
  })}
      </List >
      { results.length >= 10 ? <Bar
        padding="2x"
        center={<Link text="View More" />}
      /> : null }
    </React.Fragment>
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
