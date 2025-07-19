import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useScrollDirection } from "./useScrollDirection";

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  delay = 0.1,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();

  // ✅ Lowered threshold and only trigger once
  const inView = useInView(ref, { amount: 0.1, once: true });

  const scrollDirection = useScrollDirection();
  const yOffset = scrollDirection === "down" ? 50 : -50;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, delay]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={controls}
        className="min-h-[1px]" // ensures there's always some space
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollRevealSection;
