/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import Table from "blocks/Table";
import Panel from "layout/Panel";

function NewRoles({ columns, roles }) {
  return (
    <Panel>
      <MainPanelHeader title="Role Permissions" />
      <Bar
        left={<TextInput type="search" placeholder="Search for a Role" />}
        right={<Button label="+Add Role" />}
        leftWidth="30%"
      />
      {/* <Table columns={columns} data={roles} scroll header setHeight="200px" /> */}
    </Panel>
  );
}

NewRoles.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  roles: PropTypes.arrayOf(PropTypes.object),
};

NewRoles.defaultProps = {
  columns: null,
  roles: null,
};

export default NewRoles;
