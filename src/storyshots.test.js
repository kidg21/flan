import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";
import { screen } from "Variables";
import * as hooks from "hooks";
import * as getGuid from "utils/getGuid";
import ReactDOM from "react-dom";
// import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

if (!window) global.window = global;
if (!window.matchMedia) {
  window.matchMedia = (qString) => {
    return { matches: qString === screen.large };
  };
}

// Override hooks to only use passed state
hooks.useState = (initValue) => {
  return [initValue, () => {}];
};
hooks.useRef = (initValue) => {
  return { current: initValue };
};
hooks.useMemo = (cb) => {
  return cb();
};
hooks.useCallback = (cb) => {
  return cb;
};

let count = 1;
// override getGuid
getGuid.default = () => {
  return `storyshots_${count++}`;
};

// resolves - TypeError: parentInstance.children.indexOf is not a function
ReactDOM.createPortal = ((element) => {
  return element;
});

initStoryshots({
  suite: "Storyshots",
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions({}),
});

test("Compare Snapshots", () => {
  expect(true).toBe(true);
});

/* initStoryshots({
  suite: "Image Storyshots",
  test: imageSnapshot({ storybookUrl: "http://localhost:9009" }),
}); */
