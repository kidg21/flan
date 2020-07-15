export * from "./Display.jsx";
export * from "./Mocks.jsx";
export * from "./Placeholders.jsx";
export * from "./Skeleton.jsx";
export * from "./SkeletonStatic.jsx";
export { default as Portal } from "./Portal.jsx";

let _guidCount = 1;
export function getGuid() {
  const tday = new Date();
  const rand = Math.floor(Math.random() * 2000000000);
  return `${tday.getTime()}${rand}${_guidCount++}`;
} // getGuid
