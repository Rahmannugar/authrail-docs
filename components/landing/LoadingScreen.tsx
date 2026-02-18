"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to finish before unmounting
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* 3D Rotating Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 0.5 : 1,
            rotateY: [0, 180, 360],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            rotateY: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            },
          }}
          className="relative w-32 h-32 md:w-48 md:h-48 mb-8 perspective-1000"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/authrail.png"
            alt="AuthRail Logo"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]"
            priority
          />
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-linear-to-r from-orange-500 to-amber-500"
            initial={{ width: "0%" }}
            animate={{ width: isExiting ? "100%" : "90%" }}
            transition={{ duration: 2.2, ease: "circOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
