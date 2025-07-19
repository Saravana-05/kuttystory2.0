import { useEffect, useState } from "react";

export const useScrollDirection = (): "up" | "down" => {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) > 10) {
        setScrollDir(currentY > lastScrollY ? "down" : "up");
        lastScrollY = currentY;
      }
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
};
