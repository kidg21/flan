/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Container } from "helpers/Display";
import Flex from "layout/Flex";
import Panel from "layout/Panel";
import Card, { CardGrid } from "elements/Card";
import Menu from "blocks/Menu";
import Button from "atoms/Button";
import Command from "atoms/Command";
import SelectMenu from "atoms/SelectMenu";
import Table from "blocks/Table";
import { Label } from "base/Typography";
import {
  headers,
  data,
  menu,
  options,
} from "./Table.mocks";

storiesOf("Data Display|Table", module)
  .addDecorator(Container)

  .add("Simple", () => {
    return (
      <Table
        headers={headers.slice(1)}
        rows={data}
        listId="foo"
        columnWidth={180}
      />
    );
  })

  .add("Interactive", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Table
          headers={headers.slice(1)}
          rows={data}
          listId="foo"
          onCellClick={onCellClick}
          onHeaderClick={onHeaderClick}
          onCellMouseOver={onCellMouseOver}
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          columnWidth={180}
        />
      );
    });
  })

  .add("With Actions (Menu)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          Menu,
          {
            data: menu,
            id: `Menu_Row_${i}`,
            // onClick: e => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // }
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Table
          headers={headers}
          rows={data}
          listId="foo"
          onCellClick={onCellClick}
          onHeaderClick={onHeaderClick}
          onCellMouseOver={onCellMouseOver}
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          columnWidth={180}
        />
      );
    });
  })

  .add("With Actions (Button)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          Button,
          {
            label: "Click Me!",
            // onClick: (e) => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // },
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Table
          headers={headers}
          rows={data}
          listId="foo"
          onCellClick={onCellClick}
          onHeaderClick={onHeaderClick}
          onCellMouseOver={onCellMouseOver}
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          columnWidth={180}
        />
      );
    });
  })

  .add("With Actions (Command)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          Command,
          {
            command: "edit",
            // onClick: e => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // }
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Table
          headers={headers}
          rows={data}
          listId="foo"
          onCellClick={onCellClick}
          onHeaderClick={onHeaderClick}
          onCellMouseOver={onCellMouseOver}
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          columnWidth={180}
        />
      );
    });
  })

  .add("With Actions (Select)", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      for (let i = 0; i < data.length; i++) {
        data[i].options = React.createElement(
          SelectMenu,
          {
            placeholder: "Choose...",
            options: options,
            // onClick: e => {
            //   e.stopPropagation();
            //   alert(`data entry edit ${i} clicked`);
            // }
          },
          null,
        );
      }

      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Table
          headers={headers}
          rows={data}
          listId="foo"
          onCellClick={onCellClick}
          onHeaderClick={onHeaderClick}
          onCellMouseOver={onCellMouseOver}
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          columnWidth={180}
        />
      );
    });
  })

  .add("Styling", () => {
    return React.createElement(() => {
      const [highlightedCell, setHighlightCell] = useState(null);
      const [selectedCell, setSelectedCell] = useState(null);
      const onCellClick = (e, { rowIndex }) => {
        setSelectedCell({ rowIndex });
      };

      const onHeaderClick = (e, { columnIndex }) => {
        alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
      };

      const onCellMouseOver = (e, { rowIndex }) => {
        setHighlightCell({ rowIndex });
      };

      return (
        <Panel>
          <Flex width="100%">
            <CardGrid
              columns="1"
              rows="repeat(4,minmax(14vw,1fr))"
              gap="4xl"
            >
              <Card shadow="0">
                <Table
                  headers={headers.slice(1)}
                  rows={data}
                  listId="foo"
                  onCellClick={onCellClick}
                  onHeaderClick={onHeaderClick}
                  onCellMouseOver={onCellMouseOver}
                  highlightedCell={highlightedCell}
                  selectedCell={selectedCell}
                  columnWidth={180}
                />
              </Card>
              <Card shadow="0">
                <Table
                  headerDark
                  headers={headers.slice(1)}
                  rows={data}
                  listId="foo"
                  onCellClick={onCellClick}
                  onHeaderClick={onHeaderClick}
                  onCellMouseOver={onCellMouseOver}
                  highlightedCell={highlightedCell}
                  selectedCell={selectedCell}
                  columnWidth={180}
                />
              </Card>
              <Card shadow="2x">
                <Table
                  headers={headers.slice(1)}
                  rows={data}
                  listId="foo"
                  onCellClick={onCellClick}
                  onHeaderClick={onHeaderClick}
                  onCellMouseOver={onCellMouseOver}
                  highlightedCell={highlightedCell}
                  selectedCell={selectedCell}
                  columnWidth={180}
                />
              </Card>
              <Card shadow="2x">
                <Table
                  headerDark
                  headers={headers.slice(1)}
                  rows={data}
                  listId="foo"
                  onCellClick={onCellClick}
                  onHeaderClick={onHeaderClick}
                  onCellMouseOver={onCellMouseOver}
                  highlightedCell={highlightedCell}
                  selectedCell={selectedCell}
                  columnWidth={180}
                />
              </Card>
            </CardGrid>
          </Flex>
        </Panel>
      );
    });
  })

  .add("Template", () => {
    return React.createElement(() => {
      return (
        <Table
          headers={headers.slice(1)}
          rows={data}
          listId="template"
          columnWidth={180}
          HeaderTemplate={({ data: cellData, FormattedCell }) => {
            return (
              <FormattedCell backgroundColor="success40">
                <Label color="selected" size="xl" weight="bold">
                  {cellData}
                </Label>
              </FormattedCell>
            );
          }}
          columnTemplates={{
            ACREAGE: ({ data: cellData, FormattedCell }) => {
              return (
                <FormattedCell>
                  <Label color={cellData > 1 ? "warning" : "success"} size="sm">
                    {`${cellData} acre.`}
                  </Label>
                </FormattedCell>
              );
            },
          }}
        />
      );
    });
  });
