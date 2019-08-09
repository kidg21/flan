import React from "react";
import List, { ListItem } from "blocks/List";
import PropTypes from "prop-types";
import { Piece } from "layout/Card";
import SelectMenu from "atoms/SelectMenu";
import Bar from "blocks/Bar";

function UserEntry({ id, user, options }) {
  return (
    <ListItem id={id} label={user}>
      <SelectMenu width="50%" options={options} multiSelect />
    </ListItem>
  );
}

UserEntry.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
  options: PropTypes.node,
};

function UserRoles({
  id,
  left,
  right,
  children,
}) {
  return (
    <Piece id={id}>
      <Piece>
        <Bar
          left={left}
          right={right}
          slotWidthLeft={left.props.width}
          slotWidthRight={right.props.width}
        />
      </Piece>
      <Bar left="User" right="Roles" />
      <List>{children}</List>
    </Piece>
  );
}

UserRoles.propTypes = {
  id: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
};

export { UserRoles as default, UserEntry };
