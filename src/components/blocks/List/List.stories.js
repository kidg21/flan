/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* global number */
import React, { useState } from "react";
import List, { ListItem } from "blocks/List";
import InputBlock from "blocks/InputBlock";
import SelectMenu from "atoms/SelectMenu";
import { CheckboxGroup } from "atoms/Checkbox";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Panel from "layout/Panel";
import CardList from "./CardList.jsx";

const ListNotes = markdown.require("./List.md");

storiesOf("Blocks|List", module)
  .addParameters({
    info: {
      text:
        "A 'List' can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size. -- 'Ant Design'",
    },
    notes: {
      markdown: ListNotes,
    },
  })
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <List>
          <ListItem title="List Item" />
          <ListItem title="List Item" />
          <ListItem title="List Item" />
        </List>
      );
    }),
  )
  .add("Knobs", () => {
    return (
      <List
        interactive={boolean("Interactive", false, "List")}
      >
        <ListItem
          title={text("1 - Title", "Item 1", "Item 1")}
          description={text("1 - Description", "", "Item 1")}
          pre={select(
            "1 - Pre",
            {
              default: null,
              icon: { icon: "home" },
              label: { label: "AB" },
            },
            null,
            "Item 1",
          )}
          post={select(
            "1 - Post",
            {
              default: null,
              checkbox: { type: "checkbox", label: "Checkbox" },
              toggle: { type: "toggle", label: "Toggle" },
              label: { type: "label", label: "Label" },
            },
            null,
            "Item 1",
          )}
          isSelected={boolean("1 - Selected", false, "Item 1")}
          disabled={boolean("1 - Disabled", false, "Item 1")}
        />
        <ListItem
          title={text("1 - Label", "Item 2", "Item 2")}
          description={text("2 - Description", "", "Item 2")}
          pre={select(
            "2 - Pre",
            {
              default: null,
              icon: { icon: "home" },
              label: { label: "AB" },
            },
            null,
            "Item 2",
          )}
          post={select(
            "2 - Post",
            {
              default: null,
              checkbox: { type: "checkbox", label: "Checkbox" },
              toggle: { type: "toggle", label: "Toggle" },
              label: { type: "label", label: "Label" },
            },
            null,
            "Item 2",
          )}
          isSelected={boolean("2 - Selected", false, "Item 2")}
          disabled={boolean("2 - Disabled", false, "Item 2")}
        />
        <ListItem
          title={text("3 - Label", "Item 3", "Item 3")}
          description={text("3 - Description", "", "Item 3")}
          pre={select(
            "3 - Pre",
            {
              default: null,
              icon: { icon: "home" },
              label: { label: "AB" },
            },
            null,
            "Item 3",
          )}
          post={select(
            "3 - Post",
            {
              default: null,
              checkbox: { type: "checkbox", label: "Checkbox" },
              toggle: { type: "toggle", label: "Toggle" },
              label: { type: "label", label: "Label" },
            },
            null,
            "Item 3",
          )}
          isSelected={boolean("3 - Selected", false, "Item 3")}
          disabled={boolean("3 - Disabled", false, "Item 3")}
        />
      </List>
    );
  })
  .add("States", () => {
    return (
      <List>
        <ListItem
          title="List Item (standard)"
          description="This is the description"
        />
        <ListItem
          title="List Item (selected)"
          description="This is the description"
          isSelected
        />
        <ListItem
          title="List Item (disabled)"
          description="This is the description"
          disabled
        />

      </List>
    );
  })
  .add("Interactive", () => {
    return (
      <List interactive>
        <ListItem title="List Item" description="This is the description" />
        <ListItem title="List Item" description="This is the description" />
        <ListItem title="List Item" description="This is the description" />
        <ListItem
          title="List Item (interaction disabled)"
          description="This is the description"
          interactive={false}
        />
        <ListItem title="List Item" description="This is the description" />

      </List>
    );
  })
  .add("Pre-Label", () => {
    return (
      <List interactive>
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ label: "AB" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ label: "CD" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ label: "EF" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ label: "GH" }}
        />
      </List>
    );
  })
  .add("Pre-Icon", () => {
    return (
      <List interactive>
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ icon: "home" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ icon: "user" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ icon: "bookmark" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          pre={{ icon: "print" }}
        />
      </List>
    );
  })
  .add("Post-Toggle", () => {
    return (
      <List interactive>
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "toggle", label: "Toggle 1" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "toggle", label: "Toggle 2" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "toggle" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "toggle", label: "Toggle 4" }}
        />
      </List>
    );
  })
  .add("Post-Label", () => {
    return (
      <List interactive>
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "label", label: "Label" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "label", label: "6" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "label", label: "NEW!" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "label", label: "9" }}
        />
      </List>
    );
  })
  .add("Post-Checkbox", () => {
    return (
      <List interactive>
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "checkbox", label: "Box 1" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "checkbox", label: "Box 2" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "checkbox", label: "Box 3" }}
        />
        <ListItem
          title="List Item"
          description="This is the description"
          post={{ type: "checkbox", label: "Box 4" }}
        />
      </List>
    );
  })
  .add("CardList Infinite Scroller", () => {
    const randomData = Array.from(Array(50), (x, i) => { return { label: `FOO-${Math.floor(Math.random() * 1000)}-${i}` }; });
    const randomData2 = Array.from(Array(100), (x, i) => { return { label: `FOO-THE-SECOND-${Math.floor(Math.random() * 1000)}-${i}` }; });
    return React.createElement(() => {
      const [_data, setData] = useState({
        id1: Array(randomData.length),
        id2: Array(randomData2.length),
      }); // ideally your store could track this
      const [selectedCell, setSelectedCell] = useState(null);
      const [highlightedCell, setHighlightedCell] = useState(null);
      const [focusedRow, setFocusedRow] = useState(null);
      const [scrollAlignment, setAlignment] = useState(null);
      const [clearScroll, setClearScroll] = useState(true);
      const [scrollTop, setScrollTop] = useState(null);
      const [columnCount, setColCount] = useState(2);
      const [columnWidth, setColWidth] = useState(null);
      const [rowHeight, setRowHeight] = useState(100);
      const [id, setId] = useState("id1");

      let clRef;
      return (
        <Panel>
          <Grid columns="4" align="center">
            <Button
              label="Add Entry"
              onClick={() => {
                const appendRandomItem = { label: `Added-${Math.floor(Math.random() * 1000)}-${_data[id].length}` };
                if (id === "id1") randomData.push(appendRandomItem);
                if (id === "id2") randomData2.push(appendRandomItem);
                setData({
                  ..._data,
                  [id]: [..._data[id], null],
                });
              }}
            />
            <SelectMenu
              label="List id"
              options={[
                { value: "id1", label: "ID1" },
                { value: "id2", label: "ID2" },
              ]}
              selectOptions={id}
              isClearable={false}
              onChangeState={(state, newState, setState) => {
                setId(newState.selected.value);
                setState(newState);
              }}
            />
            <InputBlock
              label="Delete cell index"
              button={{
                label: "Delete",
                onClick: (e, state) => {
                  if (state.input["delete-input"]) {
                    const index = parseInt(state.input["delete-input"], 10);
                    if (!isNaN(index)) {
                      if (id === "id1") randomData.splice(index, 1);
                      if (id === "id2") randomData2.splice(index, 1);
                      const newRows = _data[id].slice();
                      newRows.splice(index, 1);
                      setData({
                        ..._data,
                        [id]: newRows,
                      });
                    }
                  }
                },
              }}
              textInputs={[{
                id: "delete-input",
                pattern: "^[0-9]*$",
              }]}
            />
            <CheckboxGroup
              label="onScroll Options"
              data={[{
                checked: clearScroll,
                onChange: () => {
                  setClearScroll(!clearScroll);
                },
                label: "clear out focusRow/scrollTop",
              }]}
            />
            <InputBlock
              label="Focus Row"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  if (!state.input["focus-input"]) {
                    setFocusedRow(null);
                  } else {
                    const focusIndex = parseInt(state.input["focus-input"], 10);
                    setFocusedRow(focusIndex);
                    setHighlightedCell(clRef.getCellInfo({ rowIndex: focusIndex }));
                  }
                },
              }}
              textInputs={[{
                id: "focus-input",
                pattern: "^[0-9]*$",
              }]}
            />
            <SelectMenu
              label="Scroll Alignment"
              options={[
                { value: "start", label: "start" },
                { value: "auto", label: "auto" },
                { value: "center", label: "center" },
                { value: "end", label: "end" },
              ]}
              placeholder={"start (default)"}
              onChangeState={(state, newState, setState) => {
                const newAlignment = newState.selected ? newState.selected.value : null;
                setAlignment(newAlignment);
                setState(newState);
              }}
            />
            <InputBlock
              label="Set Scroll Top"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  if (!state.input["scrolltop-input"]) {
                    setScrollTop(null);
                  } else {
                    setScrollTop(parseInt(state.input["scrolltop-input"], 10));
                  }
                },
              }}
              textInputs={[{
                id: "scrolltop-input",
                pattern: "^[0-9]*$",
              }]}
            />
            <InputBlock
              label="Column Count"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  const input = state.input["count-input"];
                  if (!input) {
                    setColCount(null);
                  } else {
                    setColCount(parseInt(input, 10));
                  }
                },
              }}
              textInputs={[{
                id: "count-input",
                pattern: "^[0-9]*$",
                value: columnCount,
              }]}
            />
            <InputBlock
              label="Column Width"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  const input = state.input["colWidth-input"];
                  const parsedInput = parseInt(input, 10);
                  if (!parsedInput) {
                    setColWidth(null);
                  } else {
                    setColWidth(parsedInput);
                  }
                },
              }}
              textInputs={[{
                id: "colWidth-input",
                pattern: "^[0-9]*$|auto",
                placeholder: "use column count",
              }]}
            />
            <InputBlock
              label="Row Height"
              button={{
                label: "Enter",
                onClick: (e, state) => {
                  const input = state.input["rowHeight-input"];
                  const parsedInput = parseInt(input, 10);
                  if (!parsedInput || input === "auto") {
                    setRowHeight(null);
                  } else {
                    setRowHeight(parsedInput);
                  }
                },
              }}
              textInputs={[{
                id: "rowHeight-input",
                pattern: "^[0-9]*$|auto",
                placeholder: "auto",
                value: rowHeight,
              }]}
            />
          </Grid>
          <CardList
            id={"cardList"}
            listId={id}
            ref={(r) => { clRef = r; }}
            data={_data[id]}
            // simple template
            Template={(props) => {
              if (!props.data || props.data.status === "loading") return <div style={{ height: "100px" }}>loading</div>;
              return <div>{`${props.index}: ${props.data.label}`}</div>;
            }}
            // simple onClick interaction
            onCellClick={(e, selectIndex) => {
              if (selectedCell && selectedCell.rowIndex === selectIndex.rowIndex && selectedCell.columnIndex === selectIndex.columnIndex) {
                setSelectedCell(null);
              } else {
                setSelectedCell(selectIndex);
              }
            }}
            height={number("height", 300)}
            columnCount={columnCount}
            columnWidth={columnWidth}
            width={number("width", null)}
            rowHeight={rowHeight}
            onCellMouseEnter={(e, highlightIndex) => {
              setHighlightedCell(highlightIndex);
            }}
            onCellMouseLeave={() => {
              setHighlightedCell(null);
            }}
            selectedCell={selectedCell}
            highlightedCell={highlightedCell}
            scrollToAlignment={scrollAlignment}
            scrollTop={scrollTop}
            focusedRow={focusedRow}
            onScroll={() => {
              // reset focusRow if we scroll away from it
              if (typeof focusedRow === "number" && clearScroll) {
                setFocusedRow(null);
              }
              if (typeof scrollTop === "number" && clearScroll) {
                setScrollTop(null);
              }
              console.log("scroll changed");
            }}
            loadRows={({ startIndex, stopIndex }) => {
              return new Promise((resolve) => {
                console.log(`startIndex: ${startIndex}, stopIndex: ${stopIndex}`);
                for (let i = startIndex; i < _data[id].length && i <= stopIndex; i++) {
                  _data[id][i] = { status: "loading" };
                }
                setTimeout(() => {
                  console.log(`loaded ${startIndex} to ${stopIndex}`);
                  const newRows = _data[id].slice();
                  for (let i = startIndex; i < _data[id].length && i <= stopIndex; i++) {
                    if (id === "id1") newRows.splice(i, 1, randomData[i]);
                    if (id === "id2") newRows.splice(i, 1, randomData2[i]);
                  }
                  setData({
                    ..._data,
                    [id]: newRows,
                  });
                  resolve({ startIndex, stopIndex });
                }, 2000);
              });
            }}
          />
        </Panel>
      );
    });
  });
