import React from "react";
import List, { ListItem } from "blocks/List";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Piece } from "layout/Card";
import SelectMenu from "atoms/SelectMenu";
import Bar from "blocks/Bar";
import Button from "atoms/Button";

function UserEntry({ id, user }) {
  return (
    <ListItem
      id={id}
      label={user}
      action={
        <SelectMenu
          options={[
            { value: "View", label: "View" },
            { value: "Edit/View", label: "Edit/View" },
            { value: "Execute", label: "Execute" },
            { value: "Admin", label: "Admin" },
          ]}
        />
      }
      actionWidth="25%"
    />
  );
}

UserEntry.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
};

function UserRoles({ id, addUser, children }) {
  return (
    <Piece id={id}>
      <Piece>
        <Bar
          right={
            <Button buttonLabel="Add User" type="solid" onClick={addUser} />
          }
        />
      </Piece>
      <Bar left="User" right="Permission Type" />
      <List>{children}</List>
    </Piece>
  );
}

UserRoles.propTypes = {
  id: PropTypes.string,
  addUser: PropTypes.func,
  children: PropTypes.node,
};

export { UserRoles as default, UserEntry };
