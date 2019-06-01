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
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: hsl(34, 5%, 36%);
  padding: 0.5rem;
  white-space: pre-wrap;
`;

export const Darken = css`
  filter: brightness(90%);
  `;

export const Lighten = css`
filter: brightness(105%)
`;