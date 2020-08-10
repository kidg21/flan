import { useCallback, useEffect } from "react";

// helper function to check if ref doesn't contain target
function isOutsideRef(ref, target) {
  return ref && ref.current && !ref.current.contains(target);
}

const useOnClickOutside = (handler, enabled, ref, portalRef) => {
  const _enabled = enabled && handler;
  const listener = useCallback((evt) => {
    // notify handler when event is outside of ref & outside of portal ref (if there is one)
    if (isOutsideRef(ref, evt.target) && (!portalRef || isOutsideRef(portalRef, evt.target))) {
      handler(evt);
    }
  }, [ref, handler, portalRef]);

  useEffect(() => {
    if (_enabled) {
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }
    return () => {};
  }, [listener, _enabled]);
};

export default useOnClickOutside;
