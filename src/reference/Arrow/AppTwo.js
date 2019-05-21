import React, { useContext } from "react";
import App from "./Arrow";
import LanguageSelect from "../../components/base/LanguageSelect";

const AppTwo = () => {
  return (
    <div>
      <div>
        <App title="hiyaaaaae" />
      </div>
      <div>
        <App title="hello" />
      </div>
      <LanguageSelect />
    </div>
  );
};

export default AppTwo;
