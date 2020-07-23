/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "base/Typography";
import List, { ListItem } from "blocks/List";

function ResultContainer({ id, more, results }) {
  return (
    <React.Fragment>
      <List
        id={id}
        isInteractive
      >
        {results.slice(0, 10).map((item, index) => {
          return <ListItem key={item.id || index} {...item} />;
        })}
        {results.length >= 10 ? (
          <ListItem>
            <Link text="View More" onClick={more} />
          </ListItem>
        ) : null}
      </List>
    </React.Fragment>
  );
}

ResultContainer.propTypes = {
  id: PropTypes.string,
  more: PropTypes.func,
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
  more: null,
  results: null,

};

export default ResultContainer;
