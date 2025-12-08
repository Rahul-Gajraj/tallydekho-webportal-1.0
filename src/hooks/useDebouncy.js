import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debounceVal, setDebounceVal] = useState(value.trim());

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value.trim());
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value.trim()]);

  return debounceVal;
};

export default useDebounce;
