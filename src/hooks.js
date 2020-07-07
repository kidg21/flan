import * as hooks from "react";

export function useState(...params) {
  return hooks.useState(...params);
}

export function useRef(...params) {
  return hooks.useRef(...params);
}

export function useMemo(...params) {
  return hooks.useMemo(...params);
}

export function useCallback(...params) {
  return hooks.useCallback(...params);
}
