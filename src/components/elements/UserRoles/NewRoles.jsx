/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
// import Table from "blocks/Table";
import Panel from "layout/Panel";
import { useId } from "helpers";

function NewRoles({ id, columns, roles }) {
  const uId = useId(id);

  return (
    <Panel id={uId}>
      <MainPanelHeader id={`${uId}_header`} title="Role Permissions" />
      <Bar
        left={<TextInput id={`${uId}_search`} placeholder="Search for a Role" />}
        right={<Button id={`${uId}_addRole`} label="+Add Role" />}
        leftWidth="30%"
      />
      {/* <Table columns={columns} data={roles} scroll header setHeight="200px" /> */}
    </Panel>
  );
}

NewRoles.propTypes = {
  id: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.string),
  roles: PropTypes.arrayOf(PropTypes.object),
};

NewRoles.defaultProps = {
  id: null,
  columns: null,
  roles: null,
};

export default NewRoles;
