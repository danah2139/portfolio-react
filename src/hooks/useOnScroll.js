import { useEffect } from "react";

function useOnScroll(callback) {
  useEffect(() => {
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  });
}

export default useOnScroll;
