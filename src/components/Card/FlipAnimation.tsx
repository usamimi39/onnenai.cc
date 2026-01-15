"use client";

import { useState } from "react";
import { CardFront } from "@/components/Card/CardFront";
import { CardBack } from "@/components/Card/CardBack";
import { motion } from "framer-motion";

export default function FlipAnimation() {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setRotation((prev) => prev + 180);
      setIsAnimating(true);
    }
  };
  return (
    <div className="group w-full max-w-md min-w-none aspect-[1.62/1] [perspective:1000px] mx-auto">
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d] [will-change:transform]"
        initial={false}
        animate={{ rotateY: rotation }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1], // カスタムイージング（cubic-bezier）
        }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{
          // GPU アクセラレーションを強制
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:translate3d(0,0,0)]">
          <div className="w-full h-full max-w-none shadow-none">
            <CardFront onFlip={handleFlip} />
          </div>
        </div>

        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)_translate3d(0,0,0)]">
          <div className="w-full h-full max-w-none shadow-none">
            <CardBack onFlip={handleFlip} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
