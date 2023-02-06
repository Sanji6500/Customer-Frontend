import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */

export const useDetectOutsideMove = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onMouseUp = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside

    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
