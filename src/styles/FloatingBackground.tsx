import React from "react";

// Pastel snowdrop colors
const pastelColors = [
  "bg-[#f9c5d1]/90", // Blush Pink
  "bg-[#f999b7]/90", // Peach
  "bg-[#c5dff9]/90", // Baby Blue
  "bg-[#f7f7f7]/90", // Ivory
  "bg-[#d3bccc]/90", // Mauve
];

const FloatingBackground: React.FC = () => {
  const snowflakes = Array.from({ length: 40 }, (_, i) => {
    const size = Math.floor(Math.random() * 8) + 4; // 4px to 12px
    const delay = Math.floor(Math.random() * 20); // 0s to 20s
    const duration = Math.floor(Math.random() * 20) + 15; // 15s to 35s
    const left = Math.floor(Math.random() * 100); // % from left
    const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    return (
      <div
        key={i}
        className={`absolute rounded-full ${color} animate-snowdrift pointer-events-none`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `-${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return <>{snowflakes}</>;
};

export default FloatingBackground;
