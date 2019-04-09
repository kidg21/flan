import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "./Table";
import DataTable from "./DataTable";


storiesOf("Blocks|Table", module)
.add("Simple Table", () => <Table/>)
.add("Data Table", () => <DataTable/>);