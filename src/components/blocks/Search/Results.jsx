/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import List, { ListItem } from "blocks/List";

function ResultContainer({ id, maxRecords, results }) {
  const [visibleRecords, setVisibleRecords] = useState(maxRecords);
  function viewMore() { setVisibleRecords(visibleRecords + maxRecords); }

  // Reset visibleRecords when results changes
  useLayoutEffect(() => {
    if (visibleRecords !== maxRecords) setVisibleRecords(maxRecords);
  }, [maxRecords, results, results.length]);

  return (
    <React.Fragment>
      <List
        id={id}
        title={results.length > visibleRecords ? `Showing ${visibleRecords} of ${results.length} Results` : null}
        isInteractive
      >
        {results.slice(0, visibleRecords).map((item, index) => {
          const { onClick, ...itemParams } = item;
          return <ListItem key={item.id || index} onClickItem={onClick} {...itemParams} />;
        })}
        {results.length > visibleRecords ? (
          <ListItem
            title="View All"
            post={{
              type: "label",
              label: `+ ${results.length - visibleRecords}`,
            }}
            onClickItem={viewMore}
          />
        ) : null}
      </List>
    </React.Fragment>
  );
}

ResultContainer.propTypes = {
  id: PropTypes.string,
  maxRecords: PropTypes.number,
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
  maxRecords: 10,
  results: [],

};

export default ResultContainer;
