"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

interface ScrollFadeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollFadeWrapper = ({
  children,
  className = "",
}: ScrollFadeWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollFadeWrapper;
