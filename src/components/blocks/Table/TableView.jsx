import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const MultiGridWrapper = styled.div`
  cursor: default;
  margin: .5em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-collapse: collapse;
  display: flex-block;
  width: 100%;
`;

export const CellWrapper = styled.div`
  padding: 0.5em 0.5em 0.5em;
  font-size: small;
  color: ${props => props.isHeader ? "#83a3c2" : "black"};
  font-weight: ${props => props.isHeader ? "bold" : null};
  background-color: ${props => props.evenRow ? "#f0f5fb" : "white"};
`;