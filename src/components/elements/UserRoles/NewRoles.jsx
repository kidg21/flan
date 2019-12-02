/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
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
      <Table columns={columns} data={roles} scroll header setHeight="200px" />
    </Panel>
  );
}

export default NewRoles;
