import React from "react";
// import NavBlock, { NavTitle, LeftCommand, RightCommand } from "./NavBlock";
import NavBlock, { title, command_left, command_right } from "./NavBlock.jsx";

function Hooks() {
  return (
    <title.Provider value={"I'm in the 'Hooks' component"}>
      <command_left.Provider value={"New Left Command!"}>
        <command_right.Provider value={"New Right Command!"}>
          <NavBlock />
        </command_right.Provider>
      </command_left.Provider>
    </title.Provider>
  );
}

export default Hooks;
