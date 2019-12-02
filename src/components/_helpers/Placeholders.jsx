import { css } from "styled-components";

// Default content if component is empty - good for prototyping
export const PlaceholderText = css`
  content: "";
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Muli", "Arial", sans-serif;
  font-size: 0.876rem;
  font-weight: 500;
  color: ${props => {
    return props.theme.text.primary;
  }};
  padding: 0.5rem;
  white-space: pre-wrap;
`;
