import React, { useContext } from "react";
import { I18nContext } from "../../../locales/index";

const App = ({ title, ...props }) => {
  const { translate } = useContext(I18nContext);

  return (
    <div>
      <div>
        <p>{translate("edit_and_save")}</p>
        <a> {translate("learn_react")} </a>
        <p> {title} </p>
        <div>
          <p>hello friends this is neutral text</p>
        </div>
      </div>
    </div>
  );
};

export default App;
