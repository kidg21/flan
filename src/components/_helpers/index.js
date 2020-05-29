/* eslint-disable linebreak-style */
export * from "./Display.jsx";
export { MockList, MockMap } from "./Mocks.jsx";
export * from "./Placeholders.jsx";
export * from "./Skeleton.jsx";
export * from "./SkeletonStatic.jsx";

let _guidCount = 1;
export function getGuid() {
  const tday = new Date();
  const rand = Math.floor(Math.random() * 2000000000);
  return `${tday.getTime()}${rand}${_guidCount++}`;
} // getGuid
