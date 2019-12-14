import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";
import * as facade from "./facade";

/**
*Mocking browser-like DOM
*/
global.document = (new JSDOM("<!doctype html><html><body></body></html>", {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7)" +
      " AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.71 Safari/534.24",
  },
})).window.document;
global.window = document.defaultView;
global.navigator = global.window.navigator;

// Pick up all Storybook methods and make them global
Object.assign(global, facade);

// Configure Enzyme
configure({ adapter: new Adapter() });
