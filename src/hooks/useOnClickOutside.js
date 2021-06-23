import { useEffect } from "react";

function useOnClickOutside(ref, display, callback) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref element or descendent elements
      if (!ref.current || ref.current.contains(event.target) || !display)
        return;

      callback(event);
    };

    // For mice
    document.addEventListener("mousedown", (event) => listener(event));
    // For touch screens
    document.addEventListener("touchstart", (event) => listener(event));

    return () => {
      // Cleanup listeners
      document.removeEventListener("mousedown", (event) => listener(event));
      document.removeEventListener("touchstart", (event) => listener(event));
    };
  }, [ref, callback]);
}

export default useOnClickOutside;
