import React from "react"
import styled from "styled-components"
import { css, keyframes } from "styled-components";

// Default content if component is empty - good for prototyping
export const Skeleton = css`
content: "";
  display: inline-block;
  background: linear-gradient(-90deg, #F0F0F0 0%, #F4F4F8 50%, #F0F0F0 100%);
  background-size: 200px 32px;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

// const SkeletonLine = styled(Skeleton)`
// width: 5.5em;
// border-radius: 5px;

// &::before {
//   content: "\00a0";
// }
// `;

// const SkeletonTable =
// <div> 
//   <SkeletonLine/>
//   <SkeletonLine/>
//   <SkeletonLine/>
// <SkeletonLine/>
// </div>;

// export { Skeleton as default, SkeletonLine, SkeletonTable };
