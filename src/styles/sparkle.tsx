import React, { useMemo } from "react";
import { colors } from "../styles/Theme"; // adjust the path if needed

const pastelColors = [
  colors.pinkmedium,
  colors.pinkdull,
  colors.blue,
  colors.pinklight,
  colors.lightpurple,
  colors.cream,
];

const Sparkles: React.FC = () => {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => {
        const color =
          pastelColors[Math.floor(Math.random() * pastelColors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 8 + 5;
        const size = Math.random() * 8 + 6;

        return (
          <div
            key={i}
            className="absolute rounded-full animate-sparkless"
            style={{
              left: `${left}%`,
              top: "-20px",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              opacity: 0.9,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              filter: "blur(0.6px) drop-shadow(0 0 3px rgba(255,255,255,0.4))",
              zIndex: 5,
            }}
          />
        );
      }),
    []
  );

  return <>{sparkles}</>;
};

export default Sparkles;
