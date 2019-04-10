import React, { createContext, useContext } from "react";
import styled from "styled-components";

const OuterBlock = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2rem;
  }
  display: flex; /* IE 11 fallback */
  flex: auto; /* IE 11 fallback */
`;

const FirstElement = createContext("Default Element 1");
const SecondElement = createContext("Default Element 2");
const ThirdElement = createContext("Default Element 3");
const SingleNumber = createContext(21);

function Child() {
  const element_1 = useContext(FirstElement);
  const element_2 = useContext(SecondElement);
  const element_3 = useContext(ThirdElement);
  const number = useContext(SingleNumber);
  return (
    <OuterBlock>
      <h4>{element_1}</h4>
      <h4>{element_2}</h4>
      <h4>{element_3}</h4>
      <h4>Your Number Is: {number}</h4>
    </OuterBlock>
  );
}

export default Child;
export { FirstElement, SecondElement, ThirdElement, SingleNumber };
