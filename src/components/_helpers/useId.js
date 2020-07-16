import { useMemo } from "react";

let _guidCount = 1;
export function getGuid() {
  const tday = new Date();
  const rand = Math.floor(Math.random() * 2000000000);
  return `${tday.getTime()}${rand}${_guidCount++}`;
} // getGuid

export const useId = (id) => {
  const uId = useMemo(() => { return id || getGuid(); }, [id]);
  return uId;
};
