import React from "react";

const WaveDivider: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px] z-[1] pointer-events-none">
      <svg
        viewBox="0 0 1440 150"
        className="w-full h-[100px] md:h-[120px] lg:h-[140px]"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3e8ff"
          d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,96C672,107,768,117,864,106.7C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
