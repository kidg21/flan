import React from "react";
import styled from "styled-components";
import { colors } from "Variables";

const LegendText = styled.li`
  font-size: 0.86em;
  font-color: ${colors.grey_80};
  display: flex;
  list-style: none;
  margin-left: 0;
  margin-bottom: 2px;
`;

const LegendBox = styled.div`
  display: flex;
  float: left;
  height: 1em;
  width: 2em;
  margin-right: 1em;
  margin-left: 0;
  border: 1px solid #999;
`;

const Item = styled.button`
  padding: 0.2em 2em 0.2em 2em;
  border: 1px solid white;
  cursor: pointer;
  background: white;

  &:hover {
    filter: brightness(96%);
  }
  &:active {
    border-color: ${colors.grey_80};
    ${LegendBox} {
      border: 1px solid black;
    }
    ${LegendText} {
      font-weight: bold;
    }
  }
  &:disabled {
    color: ${colors.grey_40};
    background-color: ${colors.grey_light};
    border-color: ${colors.grey_40};
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

function KeyItem({
  id,
  onClick,
  isSelected,
  isDisabled,
  color,
  name,
}) {
  return (
    <Item id={id} onClick={onClick} isSelected={isSelected} disabled={isDisabled}>
      <LegendBox style={{ background: [color] }} />
      <LegendText>{name}</LegendText>
    </Item>
  );
}

export default KeyItem;
