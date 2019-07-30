import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Bar from "blocks/Bar";
import Title from "base/Typography";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1em 0.5em 1.5em;
  list-style: none;
  font-weight: 600;
`;

const ListItemWrapper = styled.li`
  padding: 0.75em 0.5em;
  /* border-bottom: 1px solid ${colors.grey_light}; */
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
    /* border: none; */
  }
`;

const Item = styled(Bar)`
  padding: 0;
`;

function List({ id, children }) {
  return <ListWrapper id={id}>{children}</ListWrapper>;
}

function ListItem({ id, title, onClick, description, action }) {
  return (
    <ListItemWrapper id={id}>
      <Item
        left={
          <>
            {onClick ? (
              <a onClick={onClick}>
                <Title title={title} />
              </a>
            ) : (
              <Title title={title} />
            )}
            {description ? (
              <Title title={description} size="small" weight="normal" />
            ) : null}
          </>
        }
        right={action}
      />
    </ListItemWrapper>
  );
}

List.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  description: PropTypes.string,
  action: PropTypes.any,
};

export { List as default, ListItem };
