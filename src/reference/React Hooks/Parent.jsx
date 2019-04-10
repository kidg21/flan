import React from "react";
import Child, { FirstElement, SecondElement, ThirdElement, SingleNumber } from "./Child";

function Parent() {
  return (
    <SingleNumber.Provider value={42}>
      <FirstElement.Provider value={"Context Hook Override 1"}>
        <SecondElement.Provider value={"Context Hook Override 2"}>
          <ThirdElement.Provider value={"Context Hook Override 3"}>
            <Child />
          </ThirdElement.Provider>
        </SecondElement.Provider>
      </FirstElement.Provider>
    </SingleNumber.Provider>
  );
}

export default Parent;
