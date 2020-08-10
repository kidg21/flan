/* eslint-disable security/detect-object-injection */
import { useState, useLayoutEffect } from "react";

// support multiple zIndex arrays
const indexHash = {};

/**
 * Custom hook to manage zIndexes
 * @param {string} id of zIndex collection/array
 * @param {number|string} staticZIndex static zIndex to return doesn't manage zIndex
 * @param {number} initZIndex starting zIndex value
 * @param {boolean} enabled assign zIndex, if disabled it will clear previous value
 */
const useZIndex = (id, staticZIndex, initZIndex = 0, enabled) => {
  const [currZIndex, setCurrZIndex] = useState("");
  const _staticZIndex = parseInt(staticZIndex, 10);
  // didn't pass in static zIndex, assign zIndex
  const useZIndexManagement = isNaN(_staticZIndex) && _staticZIndex !== "";
  // create indexArr of new id in index hash
  if (useZIndexManagement && !indexHash[id]) {
    indexHash[id] = [];
  }

  useLayoutEffect(() => {
    if (useZIndexManagement && enabled) {
      // assigns next zIndex
      const indexArr = indexHash[id];
      let addedZIndex = initZIndex;
      if (indexArr.length !== 0) {
        const lastElement = indexArr[indexArr.length - 1];
        addedZIndex = lastElement + 1;
      }
      indexArr.push(addedZIndex);
      setCurrZIndex(addedZIndex);
      return () => {
        // clears out zIndex
        setCurrZIndex("");
        // get the latest indexArr, filter & set
        indexHash[id] = indexHash[id].filter((val) => { return val !== addedZIndex; });
      };
    }
    return () => {};
  }, [id, initZIndex, useZIndexManagement, enabled]);

  // returns the zIndex for the component
  if (useZIndexManagement) {
    return currZIndex;
  }
  return _staticZIndex;
};

export default useZIndex;
