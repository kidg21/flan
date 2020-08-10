import { useCallback, useEffect } from "react";

// helper function to check if ref doesn't contain target
function isOutsideRef(ref, target) {
  return ref && ref.current && !ref.current.contains(target);
}

/**
 * Custom hook to notify when user clicks outside of a component
 * @param {function} callback handler
 * @param {boolean} enabled to enable event listener
 * @param {object} ref primary React ref
 * @param {object} portalRef (optional) secondary React ref since portal elements need a separate ref
 */
const useOnClickOutside = (callback, enabled, ref, portalRef) => {
  const _enabled = enabled && callback;
  const listener = useCallback((evt) => {
    // notify callback when event is outside of ref & outside of portal ref (if there is one)
    if (isOutsideRef(ref, evt.target) && (!portalRef || isOutsideRef(portalRef, evt.target))) {
      callback(evt);
    }
  }, [ref, callback, portalRef]);

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
