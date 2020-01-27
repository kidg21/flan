/* eslint-disable react/jsx-filename-extension */
/* global number */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { expect } from "chai";
import { mount } from "enzyme";
import { spy } from "sinon";
import { ThemeProvider } from "styled-components";
import { DMPTheme } from "Variables";

import { Padding } from "helpers/Display";
import Layout from "layout/Layout";
import InputBlock from "blocks/InputBlock";
import SelectMenu from "atoms/SelectMenu";
import { CheckboxGroup } from "atoms/Checkbox";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Card from "elements/Card";
import CardList from "./CardList.jsx";

storiesOf("Blocks|CardList", module)
  .addParameters({
    info: {
      text:
        "A 'List' can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size. -- 'Ant Design'",
    },
  })
  .addDecorator(withKnobs)
  .add("CardList Infinite Scroller", () => {
    const randomData = Array.from(Array(50), (x, i) => { return { label: `FOO-${Math.floor(Math.random() * 1000)}-${i}` }; });
    const randomData2 = Array.from(Array(100), (x, i) => { return { label: `FOO-THE-SECOND-${Math.floor(Math.random() * 1000)}-${i}` }; });
    // const story = null;
    const story = React.createElement(() => {
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
        <Layout>
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
                value: "",
              }]}
            />
            <CheckboxGroup
              label="onScroll Options"
              data={[{
                id: "check-scroll",
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
                value: "",
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
                value: "",
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
                placeholder: "1",
                value: typeof columnCount === "number" ? columnCount.toString(10) : "",
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
                value: "",
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
                pattern: "^[0-9]*$",
                placeholder: "auto",
                value: typeof rowHeight === "number" ? rowHeight.toString(10) : "",
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
        </Layout>
      );
    });

    specs(() => {
      let output;
      const resetProps = {
        id: "cardlist-test",
        listId: null,
        data: Array(50),
        Template: () => { return <div>haha</div>; },
        width: 100,
        height: 100,
        columnCount: null,
        columnWidth: null,
        rowHeight: null,
        minRowHeight: null,
        highlightedCell: null,
        selectedCell: null,
        onCellClick: null,
        onCellMouseOver: null,
        onCellMouseOut: null,
        onCellMouseEnter: null,
        onCellMouseLeave: null,
        scrollToAlignment: null,
        scrollTop: null,
        onScroll: null,
        focusedRow: null,
        loadRows: null,
        minimumBatchSize: 10,
      };
      return describe("CardList Infinite Scroller", () => {
        before(() => {
          output = mount(
            <CardList
              id="cardlist-test"
              data={Array(50)}
              Template={() => { return <div>haha</div>; }}
              width={100}
              height={100}
            />,
            { wrappingComponent: ThemeProvider, wrappingComponentProps: { theme: DMPTheme } },
          );
        });

        after(() => {
          // needed so that promises from cardlist can finish
          setTimeout(() => {
            output.unmount();
          }, 0);
        });

        it("everything is fine :D", () => {
          expect(true).to.be.true;
        });

        it("should have a default columnCount of 1 & rowCount of 50", () => {
          expect(output.find("cardList").prop("columnCount")).to.equal(1);
          const cardList = output.find("cardList").instance();
          expect(cardList.columnCount).to.equal(1);
          expect(cardList.rowCount).to.equal(50);
        });

        it("should update the columnCount to 2", () => {
          output.setProps(resetProps);
          output.setProps({ columnCount: 2 });
          const cardList = output.find("cardList").instance();
          expect(cardList.columnCount).to.equal(2);
          expect(cardList.rowCount).to.equal(25);
          expect(cardList._grid.props.columnWidth).to.equal(50);
        });

        it("should get the cell info of index 6 when columnCount is 2", () => {
          output.setProps(resetProps);
          output.setProps({ columnCount: 2 });
          const cardList = output.find("cardList").instance();
          const info = cardList.getCellInfo(6);
          expect(info.columnCount).to.equal(2);
          expect(info.rowCount).to.equal(25);
          expect(info.rowIndex).to.equal(3);
          expect(info.columnIndex).to.equal(0);
          expect(info.index).to.equal(6);
        });

        it("should get the cell info of rowIndex 5 and columnIndex 1 when columnCount is 2", () => {
          output.setProps(resetProps);
          output.setProps({ columnCount: 2 });
          const cardList = output.find("cardList").instance();
          const info = cardList.getCellInfo({ rowIndex: 5, columnIndex: 1 });
          expect(info.rowIndex).to.equal(5);
          expect(info.columnIndex).to.equal(1);
          expect(info.index).to.equal(11);
        });

        it("should update the columnWidth and calculate the columnCount and rowCount", () => {
          output.setProps(resetProps);
          output.setProps({ columnWidth: 25 });
          const cardList = output.find("cardList").instance();
          expect(cardList.columnCount).to.equal(4);
          expect(cardList.rowCount).to.equal(13);
          expect(cardList._grid.props.columnWidth).to.equal(25);
        });

        it("should have a cache for rowHeight", () => {
          output.setProps(resetProps);
          const cardList = output.find("cardList").instance();
          expect(cardList.cache).to.exist;
          expect(cardList._grid.props.rowHeight).to.equal(cardList.cache.rowHeight);
        });

        it("should update the rowHeight to 25 and set cache to null", () => {
          output.setProps(resetProps);
          output.setProps({ rowHeight: 25 });
          const cardList = output.find("cardList").instance();
          expect(cardList._grid.props.rowHeight).to.equal(25);
          expect(cardList.cache).to.be.null;
        });

        it("should call load rows with correct indexes when columnCount is 4", () => {
          output.setProps(resetProps);
          output.setProps({ columnCount: 4 });
          const loadRows = spy(() => {});
          output.setProps({ loadRows });
          output.find("cardList").instance()._loadMoreRows({ startIndex: 0, stopIndex: 9 });
          expect(loadRows.calledWith({
            startRowIndex: 0,
            stopRowIndex: 9,
            startIndex: 0,
            stopIndex: 39,
          })).to.be.true;
          output.find("cardList").instance()._loadMoreRows({ startIndex: 10, stopIndex: 12 });
          expect(loadRows.calledWith({
            startRowIndex: 10,
            stopRowIndex: 12,
            startIndex: 40,
            stopIndex: 49,
          })).to.be.true;
        });

        it("should set focusedRow to 3", () => {
          output.setProps(resetProps);
          output.setProps({ focusedRow: 3 });
          expect(output.find("cardList").instance()._grid.props.scrollToRow).to.equal(3);
        });

        it("should set scrollToAlignment to 'end'", () => {
          output.setProps(resetProps);
          expect(output.find("cardList").instance()._grid.props.scrollToAlignment).to.equal("start"); // default
          output.setProps({ scrollToAlignment: "end" });
          expect(output.find("cardList").instance()._grid.props.scrollToAlignment).to.equal("end");
        });

        it("should set scrollTop", () => {
          output.setProps(resetProps);
          output.setProps({ scrollTop: 100 });
          expect(output.find("cardList").instance()._grid.props.scrollTop).to.equal(100);
        });

        it("should prioritize focusedRow over scrollTop", () => {
          output.setProps(resetProps);
          output.setProps({ focusedRow: 4, scrollTop: 101 });
          const cardList = output.find("cardList").instance();
          expect(cardList._grid.props.scrollToRow).to.equal(4);
          expect(cardList._grid.props.scrollTop).to.be.undefined;
        });

        it("should call onScroll prop once", () => {
          output.setProps(resetProps);
          const spyScroll = spy(() => {});
          output.setProps({ scrollTop: 100, onScroll: spyScroll });
          expect(spyScroll.calledOnce).to.be.true;
        });

        it("should set the highlightedCell to index 0", () => {
          output.setProps(resetProps);
          const spyTemplate = spy(() => { return <div>test</div>; });
          output.setProps({ highlightedCell: { rowIndex: 0, columnIndex: 0 }, Template: spyTemplate, data: [{ id: "test" }, { id: "test2" }] });
          expect(spyTemplate.calledWith({
            data: { id: "test" },
            isHighlighted: true,
            isSelected: false,
            index: 0,
            rowIndex: 0,
            columnIndex: 0,
            remeasureCells: output.find("cardList").instance().remeasureCells,
          })).to.be.true;
          expect(spyTemplate.calledWith({
            data: { id: "test2" },
            isHighlighted: false,
            isSelected: false,
            index: 1,
            rowIndex: 1,
            columnIndex: 0,
            remeasureCells: output.find("cardList").instance().remeasureCells,
          })).to.be.true;
        });

        it("should set the selectedCell to index 1", () => {
          output.setProps(resetProps);
          const spyTemplate = spy(() => { return <div>test</div>; });
          output.setProps({ selectedCell: { rowIndex: 1, columnIndex: 0 }, Template: spyTemplate, data: [{ id: "test" }, { id: "test2" }] });
          expect(spyTemplate.calledWith({
            data: { id: "test" },
            isHighlighted: false,
            isSelected: false,
            index: 0,
            rowIndex: 0,
            columnIndex: 0,
            remeasureCells: output.find("cardList").instance().remeasureCells,
          })).to.be.true;
          expect(spyTemplate.calledWith({
            data: { id: "test2" },
            isHighlighted: false,
            isSelected: true,
            index: 1,
            rowIndex: 1,
            columnIndex: 0,
            remeasureCells: output.find("cardList").instance().remeasureCells,
          })).to.be.true;
        });

        it("should attach onCellClick callback to click event", () => {
          output.setProps(resetProps);
          const spyCell = spy(() => {});
          output.setProps({
            onCellClick: spyCell,
            data: [{ id: "test" }, { id: "test2" }],
          });
          output.find("#cellwrapper-0-0").at(0).simulate("click");
          expect(spyCell.callCount).to.equal(1);
          expect(spyCell.args[0][1].index).to.equal(0);
          expect(spyCell.args[0][1].rowIndex).to.equal(0);
          expect(spyCell.args[0][1].columnIndex).to.equal(0);
          output.find("#cellwrapper-1-0").at(0).simulate("click");
          expect(spyCell.callCount).to.equal(2);
          expect(spyCell.args[1][1].index).to.equal(1);
          expect(spyCell.args[1][1].rowIndex).to.equal(1);
          expect(spyCell.args[1][1].columnIndex).to.equal(0);
        });

        it("should attach onCellMouseOver callback to mouseOver event", () => {
          output.setProps(resetProps);
          const spyCell = spy(() => {});
          output.setProps({
            onCellMouseOver: spyCell,
            data: [{ id: "test" }, { id: "test2" }],
          });
          output.find("#cellwrapper-0-0").at(0).simulate("mouseOver");
          expect(spyCell.callCount).to.equal(1);
          expect(spyCell.args[0][1].index).to.equal(0);
          expect(spyCell.args[0][1].rowIndex).to.equal(0);
          expect(spyCell.args[0][1].columnIndex).to.equal(0);
          output.find("#cellwrapper-1-0").at(0).simulate("mouseOver");
          expect(spyCell.callCount).to.equal(2);
          expect(spyCell.args[1][1].index).to.equal(1);
          expect(spyCell.args[1][1].rowIndex).to.equal(1);
          expect(spyCell.args[1][1].columnIndex).to.equal(0);
        });

        it("should attach onCellMouseOut callback to mouseOut event", () => {
          output.setProps(resetProps);
          const spyCell = spy(() => {});
          output.setProps({
            onCellMouseOut: spyCell,
            data: [{ id: "test" }, { id: "test2" }],
          });
          output.find("#cellwrapper-0-0").at(0).simulate("mouseOut");
          expect(spyCell.callCount).to.equal(1);
          expect(spyCell.args[0][1].index).to.equal(0);
          expect(spyCell.args[0][1].rowIndex).to.equal(0);
          expect(spyCell.args[0][1].columnIndex).to.equal(0);
          output.find("#cellwrapper-1-0").at(0).simulate("mouseOut");
          expect(spyCell.callCount).to.equal(2);
          expect(spyCell.args[1][1].index).to.equal(1);
          expect(spyCell.args[1][1].rowIndex).to.equal(1);
          expect(spyCell.args[1][1].columnIndex).to.equal(0);
        });

        it("should attach onCellMouseEnter callback to mouseEnter event", () => {
          output.setProps(resetProps);
          const spyCell = spy(() => {});
          output.setProps({
            onCellMouseEnter: spyCell,
            data: [{ id: "test" }, { id: "test2" }],
          });
          output.find("#cellwrapper-0-0").at(0).simulate("mouseEnter");
          expect(spyCell.callCount).to.equal(1);
          expect(spyCell.args[0][1].index).to.equal(0);
          expect(spyCell.args[0][1].rowIndex).to.equal(0);
          expect(spyCell.args[0][1].columnIndex).to.equal(0);
          output.find("#cellwrapper-1-0").at(0).simulate("mouseEnter");
          expect(spyCell.callCount).to.equal(2);
          expect(spyCell.args[1][1].index).to.equal(1);
          expect(spyCell.args[1][1].rowIndex).to.equal(1);
          expect(spyCell.args[1][1].columnIndex).to.equal(0);
        });

        it("should attach onCellMouseLeave callback to mouseLeave event", () => {
          output.setProps(resetProps);
          const spyCell = spy(() => {});
          output.setProps({
            onCellMouseLeave: spyCell,
            data: [{ id: "test" }, { id: "test2" }],
          });
          output.find("#cellwrapper-0-0").at(0).simulate("mouseLeave");
          expect(spyCell.callCount).to.equal(1);
          expect(spyCell.args[0][1].index).to.equal(0);
          expect(spyCell.args[0][1].rowIndex).to.equal(0);
          expect(spyCell.args[0][1].columnIndex).to.equal(0);
          output.find("#cellwrapper-1-0").at(0).simulate("mouseLeave");
          expect(spyCell.callCount).to.equal(2);
          expect(spyCell.args[1][1].index).to.equal(1);
          expect(spyCell.args[1][1].rowIndex).to.equal(1);
          expect(spyCell.args[1][1].columnIndex).to.equal(0);
        });
      });
    });

    return story;
  })
  .add("Simple CardList w/Card Template", () => {
    const randomData = Array.from(Array(50), (x, i) => { return { id: i, label: `FOO-${Math.floor(Math.random() * 1000)}-${i}` }; });
    const cardTemplate = (props) => {
      if (!props.data || props.data.status === "loading") return <div style={{ height: "100px" }}>loading</div>;
      return (
        <Card
          id={props.data.id.toString()}
          title={`${props.index}: ${props.data.label}`}
          description="wow cards"
          more={{
            element: <Button label="Button" />,
            onToggle: () => {
              if (props.remeasureCells) {
                props.remeasureCells({ rowIndex: props.rowIndex, columnIndex: props.columnIndex });
              }
            },
          }}
          disableTransition
        />
      );
    };

    cardTemplate.propTypes = {
      data: PropTypes.shape({
        status: PropTypes.string,
        id: PropTypes.number,
        label: PropTypes.string,
      }).isRequired,
      index: PropTypes.number.isRequired,
      rowIndex: PropTypes.number.isRequired,
      columnIndex: PropTypes.number.isRequired,
      remeasureCells: PropTypes.func.isRequired,
    };

    const story = React.createElement(() => {
      return (
        <Layout>
          <CardList
            id="simple-cardlist"
            data={randomData}
            Template={cardTemplate}
            columnCount={4}
          />
        </Layout>
      );
    });
    return story;
  });
