import React from "react";
import "../index.css";

const themeColors = [
  "#FFC0D3", // pinklight
  "#F999B7", // pinkmedium
  "#f06292", // pinkdark
  "#b4d9f3", // blue
  "#7030a0", // lightpurple
  "#693f4e", // mauve
  "#8d4c62", // lightmauve
  "#f8e8d3", // cream
];

const WaveFooter: React.FC = () => {
  return (
    <footer className="star-footer">
      {Array.from({ length: 40 }).map((_, index) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 5;
        const color =
          themeColors[Math.floor(Math.random() * themeColors.length)];

        return (
          <div
            key={index}
            className="animated-star"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 6px ${color}`,
            }}
          />
        );
      })}
    </footer>
  );
};

export default WaveFooter;
