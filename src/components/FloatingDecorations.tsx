"use client";

import { motion } from "motion/react";

const decorations = [
  { icon: "💗", left: "5%", top: "12%", size: 28 },
  { icon: "💕", left: "18%", top: "72%", size: 25 },
  { icon: "💖", left: "30%", top: "20%", size: 26 },
  { icon: "✨", left: "43%", top: "84%", size: 25 },
  { icon: "🎈", left: "62%", top: "14%", size: 32 },
  { icon: "💝", left: "79%", top: "38%", size: 30 },
  { icon: "🎀", left: "90%", top: "12%", size: 28 },
  { icon: "✨", left: "72%", top: "84%", size: 23 },
  { icon: "💕", left: "12%", top: "45%", size: 25 },
  { icon: "🎈", left: "88%", top: "68%", size: 30 },
];

export default function FloatingDecorations() {
  return (
    <div className="floating-layer" aria-hidden="true">
      {decorations.map((item, index) => (
        <motion.span
          key={`${item.icon}-${index}`}
          className="floating-decoration"
          style={{
            left: item.left,
            top: item.top,
            fontSize: item.size,
          }}
          animate={{
            y: [0, -24, 0],
            rotate: [-10, 10, -10],
            opacity: [0.4, 0.95, 0.4],
          }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            delay: index * 0.18,
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}
