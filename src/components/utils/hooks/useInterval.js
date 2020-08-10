import { useEffect, useRef } from "react";

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
  }, [callback, delay]);
};

export default useInterval;
