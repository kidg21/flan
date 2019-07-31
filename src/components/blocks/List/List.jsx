import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Bar from "blocks/Bar";
import Title from "base/Typography";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  /* padding: 0.5em; */
  list-style: none;
  font-weight: 600;
`;

const ListTitle = styled(Title)`
  color: ${colors.grey_dark};
  /* border-bottom: 2px solid ${colors.grey_light}; */
  border-bottom: 1px solid ${colors.grey_20};
  padding: 0.75em 1em;
`;

const ListItemWrapper = styled.li`
  /* padding: 0.5em; */
  padding: 0.5em 1em;
  border-bottom: 1px solid ${colors.grey_light};
  background-color: ${props => props.itemBGColor || ""};
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: ${props => props.itemBGColor || colors.grey_light};
  }
`;

const Item = styled(Bar)`
  align-items: center;
  padding: 0;
  color: ${props => props.itemColor || colors.grey_80};
`;

function List({ id, name, children }) {
  return (
    <>
      {name ? <ListTitle title={name} weight="bold" /> : null}
      <ListWrapper id={id}>{children}</ListWrapper>
    </>
  );
}

function ListItem({ id, label, onClick, description, action, type }) {
  let itemColor;
  let itemBGColor;
  switch (type) {
    case "info":
      itemColor = colors.white;
      itemBGColor = colors.anchor_light;
      break;
    case "success":
      itemColor = colors.white;
      itemBGColor = colors.success_light;
      break;
    case "warning":
      itemColor = colors.white;
      itemBGColor = colors.warning_light;
      break;
    case "alert":
      itemColor = colors.white;
      itemBGColor = colors.alert_light;
      break;
    case "inverse":
      itemColor = colors.white;
      itemBGColor = colors.grey_60;
      break;
    default:
      break;
  }
  return (
    <ListItemWrapper id={id} itemBGColor={itemBGColor}>
      <Item
        left={
          <>
            {onClick ? (
              <a onClick={onClick}>
                <Title title={label} />
              </a>
            ) : (
              <Title title={label} />
            )}
            {description ? (
              <Title title={description} size="small" weight="light" />
            ) : null}
          </>
        }
        right={action}
        itemColor={itemColor}
      />
    </ListItemWrapper>
  );
}

List.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

ListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  description: PropTypes.string,
  action: PropTypes.any,
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "inverse"]),
};

export { List as default, ListItem };
