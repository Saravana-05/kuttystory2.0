import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          // Retry if element isn't available yet
          setTimeout(scrollToElement, 100);
        }
      };

      // Allow time for page transition or DOM to settle
      setTimeout(scrollToElement, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
