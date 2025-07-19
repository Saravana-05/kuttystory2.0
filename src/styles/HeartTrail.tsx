import { useEffect, useCallback } from "react";
import { colors } from "./Theme";

export const useHeartTrail = () => {
  useEffect(() => {
    // Inject heart trail CSS only once
    if (!document.getElementById("heart-trail-style")) {
      const style = document.createElement("style");
      style.id = "heart-trail-style";
      style.textContent = `
        .heart-trail {
          position: fixed;
          width: 12px;
          height: 12px;
          background: ${colors.pinkdark};
          top: 0;
          left: 0;
          transform: rotate(45deg);
          animation: floatHeart 1s ease-out forwards;
          pointer-events: none;
          z-index: 9999;
          border-radius: 50% 50% 0 0;
        }

        .heart-trail::before,
        .heart-trail::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background: ${colors.pinkdark};
          border-radius: 50%;
        }

        .heart-trail::before {
          top: -6px;
          left: 0;
        }

        .heart-trail::after {
          top: 0;
          left: -6px;
        }

        @keyframes floatHeart {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Return event handler
  const handleHeartTrail = useCallback((e: React.MouseEvent) => {
    const heart = document.createElement("span");
    heart.className = "heart-trail";
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }, []);

  return handleHeartTrail;
};
