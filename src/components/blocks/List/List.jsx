import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, Darken } from "Variables";
import Bar from "blocks/Bar";
import Title from "base/Typography";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-weight: 600;
`;

const ListTitle = styled(Title)`
  color: ${colors.grey_dark};
  border-bottom: 1px solid ${colors.grey_20};
  padding: 0.75em 1em;
`;

const ListItemWrapper = styled.li`
  border-bottom: 1px solid ${colors.grey_light};
  background-color: ${props => props.itemBGColor || colors.white};
  cursor: ${props => (props.onClick ? "pointer" : "")};
  &:last-child {
    border: none;
  }
  &:hover {
    ${props => (props.onClick ? Darken : "")};
  }
`;

const Item = styled(Bar)`
  align-items: center;
  color: ${props => props.itemColor || colors.grey_80};
`;

function List({ id, title, children }) {
  return (
    <>
      {title ? <ListTitle title={title} weight="bold" /> : null}
      <ListWrapper id={id}>{children}</ListWrapper>
    </>
  );
}

function ListItem({
  id,
  label,
  description,
  action,
  actionWidth,
  type,
  onClick,
  ...props
}) {
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
    <ListItemWrapper id={id} itemBGColor={itemBGColor} onClick={onClick}>
      <Item
        left={
          <>
            {<Title title={label} />}
            {description ? (
              <Title title={description} size="small" weight="light" />
            ) : null}
          </>
        }
        right={action}
        slotWidthRight={actionWidth}
        itemColor={itemColor}
        onClick={onClick}
        {...props}
      />
    </ListItemWrapper>
  );
}

List.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

ListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  action: PropTypes.any,
  /** If the 'action' element needs more room, use this prop to give it more space.
   * "actionWidthMin" is used to override the default 'label' / 'action' ratio of a 'ListItem' by increasing the 'min-width' of the action's 'slot'.
   * Value should be in percentage (%)
   */
  actionWidth: PropTypes.string,
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "inverse"]),
  onClick: PropTypes.func,
};

export { List as default, ListItem };
