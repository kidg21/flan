import React from "react";
import styled from "styled-components";
import Bar from "blocks/Bar";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Search from "blocks/Search";
import Button from "atoms/Button";
import Table from "blocks/Table";
import Panel from "layout/Panel";

function NewUsers({ columns, users }) {
  return (
    <Panel>
      <MainPanelHeader title="User Roles" />
      <Bar
        left={<Search placeholder="Search for a User" />}
        right={<Button label="+Add Role" />}
        leftWidth="30%"
      />
      <Table columns={columns} data={users} scroll header setHeight="200px" />
    </Panel>
  );
}

export default NewUsers;
