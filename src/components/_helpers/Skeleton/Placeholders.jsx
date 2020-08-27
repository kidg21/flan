import { css } from "styled-components";

// Default content if component is empty - good for prototyping
const PlaceholderText = css`
  content: "";
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  font-family: ${(props) => { return props.theme.typography.primary; }};
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  padding: 0.5rem;
  white-space: pre-wrap;
`;

export default PlaceholderText;
