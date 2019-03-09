import React from "react";
import NavBlock, { NavTitle, LeftCommand, RightCommand } from "./NavBlock";

function Hooks() {
  return (
    <NavTitle.Provider value={"I'm in the 'Hooks' component"}>
      <LeftCommand.Provider value={"New Left Command!"}>
      <RightCommand.Provider value={"New Right Command!"}>
        <NavBlock />
      </RightCommand.Provider>
      </LeftCommand.Provider>
    </NavTitle.Provider>
  );
}

export default Hooks;
