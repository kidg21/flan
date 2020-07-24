/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import List, { ListItem } from "blocks/List";

function ResultContainer({ id, results }) {
  return (
    <React.Fragment>
      <List
        id={id}
        title={results.length >= 10 ? `Showing 10 of ${results.length} Results` : null}
        isInteractive
      >
        {results.slice(0, 10).map((item, index) => {
          return <ListItem key={item.id || index} {...item} />;
        })}
        {results.length >= 10 ? (
          <ListItem
            title="View All"
            post={{
              type: "label",
              label: `+ ${results.length - 10}`,
            }}
          />
        ) : null}
      </List>
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
