/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Placeholder from "images/placeholders/placeholder-photo.png";
import List, { ListItem } from "blocks/List";

function MockMap() {
  return (
    <Mapbox
      map="dark"
      center={[-72.006, 42.7128]}
    // options={{ zoom: 0 }}
    // zoom="0"
    />
  );
}

MockMap.propTypes = {
  // stuff
};
MockMap.defaultProps = {
  // stuff
};

function MockList() {
  return (
    <React.Fragment>
      <List title="Group Name" isInteractive>
        <ListItem
          title="List Item"
        />
      </List>
      <List title="Group Name" isInteractive>
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
      </List>
      <List title="Group Name" isInteractive>
        <ListItem
          title="List Item"
        />
        <ListItem
          title="List Item"
        />
      </List>
    </React.Fragment>
  );
}

MockList.propTypes = {
  // stuff
};
MockList.defaultProps = {
  // stuff
};

export { MockList, MockMap };
