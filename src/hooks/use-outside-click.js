import { useEffect } from "react";

/**
 * Hook that triggers a callback when a click occurs outside the referenced element.
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks for.
 * @param {Function} handler - The callback to run on outside click.
 */
export function useOutsideClick(ref, handler) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, handler]);
}
