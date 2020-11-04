import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// copied from ss-storemanager

// helper component to render children in a portal
// id {string} portal id for created portal div
// rootId {string} targeted div to append portal div to
const Portal = ({ id, rootId = "", children }) => {
  const [portalDiv, setPortalDiv] = useState(null);
  useEffect(() => {
    // create portal div & add to root/targeted div
    let el = portalDiv;
    if (!el) {
      el = document.createElement("div");
      // on mount, set id
      // handled here since portalDiv isn't updated when other useEffect execs the first time
      if (id) el.id = id;
      setPortalDiv(el);
    }
    const rootDiv = document.getElementById(rootId) || document.body;
    rootDiv.insertBefore(el, rootDiv.firstChild);
    return () => {
      // clean up, remove the portal div we added
      rootDiv.removeChild(el);
    };
  }, [rootId]);

  useEffect(() => {
    // on id change, set id
    if (portalDiv) {
      portalDiv.id = id;
    }
  }, [id]);

  return portalDiv ? ReactDOM.createPortal(children, portalDiv) : null;
};

export default Portal;
