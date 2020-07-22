import { useMemo } from "react";
import getGuid from "./getGuid";

const useId = (id) => {
  const uId = useMemo(() => { return id || getGuid(); }, [id]);
  return uId;
};

export default useId;
