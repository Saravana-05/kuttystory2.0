import React, { useEffect, useState } from "react";
import footSvg from "../assets/icons/footprint.svg";

const BabyFootprintTrail: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [leftAngle, setLeftAngle] = useState(-20);
  const [rightAngle, setRightAngle] = useState(20);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Slightly randomize angles
      setLeftAngle(Math.floor(Math.random() * 10) - 25); // -25 to -15
      setRightAngle(Math.floor(Math.random() * 10) + 15); // 15 to 25
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const offset = 12;

  return (
    <>
      {/* Left Foot */}
      <img
        src={footSvg}
        alt="Left Foot"
        className="fixed w-6 h-6 z-50 pointer-events-none"
        style={{
          left: `${position.x - offset}px`,
          top: `${position.y + offset}px`,
          transform: `translate(-50%, -50%) rotate(${leftAngle}deg)`,
        }}
      />
      {/* Right Foot */}
      <img
        src={footSvg}
        alt="Right Foot"
        className="fixed w-6 h-6 z-50 pointer-events-none"
        style={{
          left: `${position.x + offset}px`,
          top: `${position.y + offset}px`,
          transform: `translate(-50%, -50%) rotate(${rightAngle}deg) scaleX(-1)`,
        }}
      />
    </>
  );
};

export default BabyFootprintTrail;
