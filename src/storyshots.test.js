import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

initStoryshots({
  suite: "Storyshots",
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions({})
});

initStoryshots({
  suite: "Image Storyshots",
  test: imageSnapshot({ storybookUrl: "http://localhost:9009" })
});
