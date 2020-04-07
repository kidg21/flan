/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import Table from "blocks/Table";
import Panel from "layout/Panel";
import { getGuid } from "helpers";

function NewUsers({ id, columns, users }) {
  const uId = id || getGuid();

  return (
    <Panel id={uId}>
      <MainPanelHeader id={`${uId}_header`} title="User Roles" />
      <Bar
        left={<TextInput id={`${uId}_search`} placeholder="Search for a User" />}
        right={<Button id={`${uId}_addUser`} label="+Add User" />}
        leftWidth="30%"
      />
      {/* <Table columns={columns} data={users} scroll header setHeight="200px" /> */}
    </Panel>
  );
}

NewUsers.propTypes = {
  id: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.string),
  users: PropTypes.arrayOf(PropTypes.object),
};

NewUsers.defaultProps = {
  id: null,
  columns: null,
  users: null,
};

export default NewUsers;
