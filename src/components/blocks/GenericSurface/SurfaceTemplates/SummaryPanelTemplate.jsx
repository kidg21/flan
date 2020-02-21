import React from "react";

export default (props) => {
  return (props.content.map((field) => {
    return (<div>key: {field.label} -- value: {field.value}</div>);
  }));
};
