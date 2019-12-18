/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import Table from "blocks/Table";
import Panel from "layout/Panel";

function NewUsers({ columns, users }) {
  return (
    <Panel>
      <MainPanelHeader title="User Roles" />
      <Bar
        left={<TextInput type="search" placeholder="Search for a User" />}
        right={<Button label="+Add User" />}
        leftWidth="30%"
      />
      <Table columns={columns} data={users} scroll header setHeight="200px" />
    </Panel>
  );
}

NewUsers.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  users: PropTypes.arrayOf(PropTypes.object),
};

NewUsers.defaultProps = {
  columns: null,
  users: null,
};

export default NewUsers;
