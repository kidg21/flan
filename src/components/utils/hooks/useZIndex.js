import { useState, useRef, useEffect, useLayoutEffect } from "react";

// const initZIndex = 500;
// const indexArr = [];
// let zIndexOffset = 0;

// export const addZIndex = () => {
//   indexArr.push(zIndexOffset++);
//   return initZIndex + zIndexOffset;
// };

// export const removeZIndex = (zIndex) => {
//   // find zIndex location
//   const index = zIndex - initZIndex;
//   // replace with null
//   indexArr.splice(index, 1, null);
//   // loop through to find the new zIndex
//   for (let i = indexArr.length - 1; i >= 0; i--) {
//     if (typeof indexArr[i] === "number") {
//       zIndexOffset = i;
//       break;
//     }
//   }
// };

const indexHash = {};

const useZIndex = (id, staticZIndex, initZIndex, enabled) => {
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
      const indexArr = indexHash[id];
      let addedZIndex = initZIndex;
      if (indexArr.length !== 0) {
        const lastElement = indexArr[indexArr.length - 1];
        addedZIndex = lastElement + 1;
      }
      indexArr.push(addedZIndex);
      setCurrZIndex(addedZIndex);
      // currZIndex.current = addedZIndex;
      return () => {
        // currZIndex.current = "";
        setCurrZIndex("");
        // get the latest indexArr, filter & set
        indexHash[id] = indexHash[id].filter((val) => { return val !== addedZIndex; });
      };
    }
    return () => {};
  }, [id, initZIndex, useZIndexManagement, enabled]);

  if (useZIndexManagement) {
    return currZIndex;
    // return currZIndex.current;
  }
  return _staticZIndex;
};

export default useZIndex;
