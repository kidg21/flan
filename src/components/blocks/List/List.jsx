import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListWrapper = styled.ul`
  padding: 0.5em;
  list-style: none;
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const ListItemWrapper = styled.li`
  padding: 0.25em;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

function List({ id, children }) {
  return <ListWrapper id={id}>{children}</ListWrapper>;
}

function ListItem({ id, children, onClick }) {
  return (
    <ListItemWrapper id={id} onClick={onClick}>
      {children}
    </ListItemWrapper>
  );
}

List.propTypes = {
  id: PropTypes.string,
  left: PropTypes.any,
  center: PropTypes.any,
  right: PropTypes.any,
  onClick: PropTypes.func,
};

export { List as default, ListItem };
