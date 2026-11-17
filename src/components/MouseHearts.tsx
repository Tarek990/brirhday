"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type HeartParticle = {
  id: number;
  x: number;
  y: number;
  symbol: string;
};

const heartSymbols = ["💗", "💕", "💖", "✨"];

export default function MouseHearts() {
  const [particles, setParticles] = useState<HeartParticle[]>([]);
  const lastSpawn = useRef(0);
  const nextId = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      // Keep the effect for mouse/pen and avoid clutter on touch screens.
      if (event.pointerType === "touch") return;

      const now = performance.now();
      if (now - lastSpawn.current < 110) return;
      lastSpawn.current = now;

      const particle: HeartParticle = {
        id: ++nextId.current,
        x: event.clientX,
        y: event.clientY,
        symbol: heartSymbols[nextId.current % heartSymbols.length],
      };

      setParticles((current) => [...current.slice(-13), particle]);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const removeHeart = (id: number) => {
    setParticles((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="mouse-hearts-layer" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="cursor-heart"
          style={{ left: particle.x, top: particle.y }}
          initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.25, 0.8], y: -48 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          onAnimationComplete={() => removeHeart(particle.id)}
        >
          {particle.symbol}
        </motion.span>
      ))}
    </div>
  );
}
