import { useEffect, useRef } from "react";

/**
 * Custom hook to poll
 * When enabled, executes callback at every delay interval and cleans up
 * @param {func} callback handler
 * @param {boolean} enabled to enable the setInterval & notify the callback
 * @param {number|string} delay time in ms
 */
const useInterval = (callback, enabled, delay) => {
  const savedCallback = useRef();
  let _delay = parseInt(delay, 10);
  if (isNaN(_delay)) _delay = 500;
  const _enabled = callback && enabled;

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (_enabled) {
      const id = setInterval(() => {
        savedCallback.current();
      }, _delay);
      return () => {
        clearInterval(id);
      };
    }
    return () => {};
  }, [delay, _enabled]);
};

export default useInterval;
