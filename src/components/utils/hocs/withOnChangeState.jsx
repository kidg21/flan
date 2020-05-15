import React, { useState, useCallback } from "react";

/**
 * HOC, enhances component by wrapping a state to handle onChange events
 * i.e. I want my component to handle keeping track of the selected option, withOnChangeState(SelectMenu, "selectOptions")
 * it will set the initial state to props.selectOptions and use this wrapper's state value to pass into SelectMenu
 * the parent controller is at this level, the SelectMenu doesn't keep track of an internal state
 * @param {function} Component React component to enhance
 * @param {string} propName prop name to keep the internal state of
 * @param {function} modifyNewValue point to modify the new state value when an onChange event occurs
 */
export default function withOnChangeState(Component, propName, modifyNewValue) {
  return ({ [propName]: propValue, ...props }) => {
    const [value, setValue] = useState(propValue);
    props[propName] = value; // use state value for the component
    const onChange = useCallback((e) => {
      let newValue = e;
      if (typeof modifyNewValue === "function") {
        // access point to modify the value being stored, (i.e. (e) => { return e.target.value; })
        newValue = modifyNewValue(e);
      }
      setValue(newValue);
    }, [modifyNewValue]);
    return <Component {...props} onChange={onChange} />;
  };
}
