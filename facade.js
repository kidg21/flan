import React from "react";

export const storiesOf = function storiesOf() {
  const api = {};
  const stories = {};
  const decorators = [];
  api.addParameters = (/* jsonParams */) => {
    return api;
  };
  api.addDecorator = (func) => {
    decorators.push(func);
    return api;
  };
  api.add = (name, func) => {
    let story = func();
    const getStory = () => { return story; };
    for (let i = 0; i < decorators.length; i++) {
      story = decorators[i](getStory);
    }
    if (!stories[name]) stories[name] = [];
    stories[name].push(story);
    return api;
  };
  api.addWithInfo = api.add;

  return api;
};

export const withInfo = function withInfo() {
  return (func) => { return func; };
};

function decorator(getStory) {
  return getStory();
}
export const withKnobs = decorator;
export const checkA11y = decorator;

function inputSelector(name, value) {
  return value;
}
export const text = inputSelector;
export const boolean = inputSelector;
export const object = inputSelector;

function optionSelector(name, options, value) {
  return value;
}
export const select = optionSelector;
export const options = optionSelector;

export const specs = (spec) => {
  spec();
};

export const Mapbox = function Mapbox() {
  return <div style={{ width: "100%", height: "100%" }} />;
}
