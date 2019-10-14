import styled from "styled-components";
import { colors } from "Variables";

export const MultiGridWrapper = styled.div`
  cursor: default;
  margin: 0.5em;
  overflow: hidden;
  font-size: 12px;
  min-height: 500px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-collapse: collapse;
  display: flex-block;
`;

export const CellWrapper = styled.div`
  padding: 5px;
  color: ${colors.grey_80};
  font-weight: ${(props) => { return props.isHeader ? "" : "bold"; }};
  border-bottom: 1px solid #eee;
  background-color: ${(props) => {
    if (props.isHighlighted) {
      return "#f0f5fb";
    }
    if (props.isSelected) {
      return "#669932";
    }
    return "white";
  }};
`;