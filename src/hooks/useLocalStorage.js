import { useEffect, useState } from "react";
import { loadState, saveState } from "../utils/storage";
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => loadState(key, initial));
  useEffect(() => {
    saveState(key, value);
  }, [key, value]);
  return [value, setValue];
}
