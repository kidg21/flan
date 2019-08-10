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
  padding: 0.75em;
`;

const ListItemWrapper = styled.li`
  color: ${props => props.itemColor || ""};
  background-color: ${props => props.itemBGColor || colors.white};
  border-style: solid;
  border-width: ${props => props.itemBorder || "0"};
  border-bottom: 1px solid ${colors.grey_light};
  cursor: ${props => (props.onClick ? "pointer" : "")};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    ${props => (props.onClick ? Darken : "")};
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${colors.grey_40};
    background-color: ${colors.grey_light};
    border-left: none;
  }
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
  state,
  type,
  disabled,
  onClick,
  rightWidth,
}) {
  let itemColor;
  let itemBGColor;
  let itemBorder;
  switch (state) {
    case "active":
      itemColor = colors.success;
      itemBorder = "0 0 0 .5em";
      break;
    default:
      break;
  }
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
      itemBGColor = colors.grey_80;
      break;
    default:
      break;
  }
  return (
    <ListItemWrapper
      id={id}
      itemColor={itemColor}
      itemBGColor={itemBGColor}
      itemBorder={itemBorder}
      onClick={onClick}
      disabled={disabled}
    >
      <Bar
        barAlign="center"
        left={
          <>
            {<Title title={label} />}
            {description ? (
              <Title title={description} size="small" weight="light" />
            ) : null}
          </>
        }
        right={action}
        rightWidth={actionWidth}
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
  state: PropTypes.oneOf(["active"]),
  type: PropTypes.oneOf(["info", "success", "warning", "alert", "inverse"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export { List as default, ListItem };
