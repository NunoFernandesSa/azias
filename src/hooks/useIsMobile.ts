"use client";

import { useEffect, useState } from "react";

/**
 * Hook that detects whether the current viewport width is at or below a given breakpoint.
 *
 * @param breakpoint - The pixel width at which to consider the viewport "mobile". Defaults to 1024.
 * @returns `true` if the viewport width is less than or equal to the breakpoint; otherwise `false`.
 *
 * @example
 * const isMobile = useIsMobile(768);
 * if (isMobile) {
 *   // Render mobile-specific UI
 * }
 */
export const useIsMobile = (breakpoint = 1024): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // ---------- Initial check ----------
    checkIsMobile();

    // ---------- Event listener ----------
    window.addEventListener("resize", checkIsMobile);

    // ---------- Cleanup ----------
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
