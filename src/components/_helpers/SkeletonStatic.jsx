import { css } from "styled-components";

// Default content if component is empty - good for prototyping
export const SkeletonStatic = css`
  content: "";
  display: block;
  background: grey;
  border: 5px solid white;
  background-size: 200px 32px;
  border-radius: 4px;
`;
