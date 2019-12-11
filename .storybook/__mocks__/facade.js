

export const storiesOf = function storiesOf() {
  const api = {};
  const story;
  api.addParameters = (jsonParams) => {
    return api;
  };
  api.addDecorator = (func) => {
    story = func(() => { return story; });
    return api;
  };
  api.add = (name, func) => {
    story = func();
    return api;
  };
  api.addWithInfo = api.add;

  return api;
};

export const withInfo = function withInfo() {
  return (func) => { return func(); };
}

export const specs = (spec) => {
  spec();
};

// Export functions from Cypress?
// export const describe = jasmine.currentEnv_.describe;
// export const it = jasmine.currentEnv_.it;