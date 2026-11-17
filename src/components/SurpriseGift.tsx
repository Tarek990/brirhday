"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Gift, Heart, Sparkles } from "lucide-react";

export default function SurpriseGift() {
  const [isOpen, setIsOpen] = useState(false);

  const handleGiftClick = async () => {
    const opening = !isOpen;
    setIsOpen(opening);

    if (!opening) return;

    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 125,
        spread: 95,
        startVelocity: 43,
        origin: { y: 0.65 },
        colors: ["#ff77aa", "#ffb6ce", "#ffd166", "#cdb4ff", "#ffffff"],
      });
    } catch (error) {
      console.error("Confetti could not load:", error);
    }
  };

  return (
    <section className="surprise-section" id="surprise">
      <motion.div
        className="surprise-content"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <span className="surprise-eyebrow">A LITTLE SOMETHING FOR YOU</span>

        <motion.div
          className="gift-illustration"
          animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Gift size={76} strokeWidth={1.4} />
          <span>🎀</span>
        </motion.div>

        <h2>One Last Surprise!</h2>
        <p>There is something special waiting for you...</p>

        <motion.button
          type="button"
          className="surprise-button"
          onClick={handleGiftClick}
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Gift size={19} />
          {isOpen ? "Close Your Gift" : "Open Your Gift"}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="surprise-message"
              initial={{ opacity: 0, height: 0, scale: 0.85, y: 18 }}
              animate={{ opacity: 1, height: "auto", scale: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, scale: 0.85, y: 18 }}
              transition={{ duration: 0.45 }}
            >
              <Sparkles size={25} />
              <Heart size={40} fill="currentColor" />
              <h3>You Are So Special, Esraa! 💗</h3>
              <p>
                ربنا يخليكى ليا يا احلى حاجه فى الدنيا كلها
                <br />
                وبيختى ان انا معايا القمر دى
                <br />
                <strong>Happy Birthday! 🎂</strong>
              </p>
              <span>Made with lots of love ❤️</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
