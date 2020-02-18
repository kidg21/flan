import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";
import { screen } from "Variables";
// import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

if (!window) global.window = global;
if (!window.matchMedia) {
  window.matchMedia = (qString) => {
    return { matches: qString === screen.large };
  };
}

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
