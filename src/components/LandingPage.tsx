"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Heart, HeartCrack, Sparkles } from "lucide-react";
import FloatingDecorations from "./FloatingDecorations";
import MouseHearts from "./MouseHearts";

export default function LandingPage() {
  const router = useRouter();
  const areaRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const area = areaRef.current;
    if (!area) return;

    const maxX = area.clientWidth / 2 + 120;
    const maxY = 180;

    const angle = Math.random() * Math.PI * 2;

    const distance = 150 + Math.random() * 200;

    setPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
  };

  return (
    <main className="landing-page">
      <FloatingDecorations />
      <MouseHearts />

      <motion.section
        className="landing-card"
        initial={{ opacity: 0, y: 42, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <motion.div
          className="landing-icon"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>

        <div className="landing-label">
          <Sparkles size={16} />
          A LITTLE QUESTION
          <Sparkles size={16} />
        </div>

        <h1 className="landing-title">Do You Love Me?</h1>
        <p className="landing-description">
          I have a little surprise for you...
        </p>

        <div className="choices-area" ref={areaRef}>
          <motion.button
            type="button"
            className="choice-button choice-love"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => router.push("/birthday")}
          >
            <Heart size={18} fill="currentColor" />
            Love
          </motion.button>

          <motion.button
            type="button"
            className="choice-button choice-not-love"
            animate={{ x: position.x, y: position.y }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            onMouseEnter={moveButton}
            onFocus={moveButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveButton();
            }}
            onClick={moveButton}
          >
            <HeartCrack size={18} />
            Not Love
          </motion.button>
        </div>

        <div className="landing-footer">Made with love 💗</div>
      </motion.section>
    </main>
  );
}
