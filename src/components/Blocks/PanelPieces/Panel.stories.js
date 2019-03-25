import React from "react";
import { storiesOf } from "@storybook/react";
import PanelPiece from "./PanelPiece";
import PanelHeader from "./PanelHeader";
import FilterDetailHeader from "./FilterDetailHeader";


storiesOf("Blocks|Panel Parts", module)
.add("Panel Header Piece", () => <PanelHeader title="Panel Header"/> )
.add("Filter Detail Header", () => <FilterDetailHeader title="Filter Detail"/> )
.add("Navigation Panel Piece", () => <PanelPiece title="Panel Piece"/> );
