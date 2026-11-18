"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Heart, Sparkles } from "lucide-react";

import FloatingDecorations from "./FloatingDecorations";
import MouseHearts from "./MouseHearts";
import PhotoGallery from "./PhotoGallery";
import MusicPlayer from "./MusicPlayer";
import SurpriseGift from "./SurpriseGift";

export default function BirthdayPage() {
  useEffect(() => {
    let active = true;
    let secondBurst: number | undefined;

    const celebrate = async () => {
      try {
        const confetti = (await import("canvas-confetti")).default;
        if (!active) return;

        confetti({
          particleCount: 115,
          spread: 105,
          startVelocity: 43,
          origin: { y: 0.65 },
          colors: ["#ff77aa", "#ffb6ce", "#ffd166", "#cdb4ff", "#ffffff"],
        });

        secondBurst = window.setTimeout(() => {
          if (!active) return;

          confetti({
            particleCount: 55,
            angle: 60,
            spread: 65,
            origin: { x: 0 },
            colors: ["#ff77aa", "#ffd166", "#cdb4ff"],
          });

          confetti({
            particleCount: 55,
            angle: 120,
            spread: 65,
            origin: { x: 1 },
            colors: ["#ff77aa", "#ffd166", "#cdb4ff"],
          });
        }, 450);
      } catch (error) {
        console.error("Confetti could not load:", error);
      }
    };

    void celebrate();

    return () => {
      active = false;
      if (secondBurst !== undefined) window.clearTimeout(secondBurst);
    };
  }, []);

  return (
    <main className="birthday-page">
      <FloatingDecorations />
      <MouseHearts />

      <section className="birthday-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="birthday-label">
            <Sparkles size={16} />
            HAPPY BIRTHDAY
            <Sparkles size={16} />
          </div>

          <motion.div
            className="birthday-cake"
            animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            🎂
          </motion.div>

          <h1>
            كل سنة وإنتي طيبة
            <br />
            <span>يا احلى سوسو فى الدنيا كلها</span>
            <span className="title-heart"> 💗</span>
          </h1>

          <p className="hero-description">
            النهارده عيد ميلاد احلى واحده فى الدنيا كلها سوستى
            <br />
          </p>

          <a href="#birthday-wishes" className="scroll-button">
            اكتشفي المفاجأة
            <ArrowDown size={18} />
          </a>

          {/* <MusicPlayer /> */}
        </motion.div>
      </section>

      <section className="wishes-section" id="birthday-wishes">
        <motion.div
          className="wish-card"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="wish-icon">💌</div>
          <span className="wish-label">A MESSAGE FOR YOU</span>
          <h2>To The Birthday Girl</h2>
          <p>
            كل سنه وانتى طيبه يا احلى واجمل حاجه فى الدنيا كلها
            <br />
            سوستى روح قلبى وحياتى كلها
            <br />
            اللى مطلعه عينى بشخصياتها كلها والله
            <br />
            بس بردو ما زالتى اغلى حاجه فى حياتى كلها يسوستى
            <br />
            انتى قلبى وحياتى يسوسو  ويبختى بالقمر دا
            <br/>
            تستاهلي كل حاجة جميلة في الدنيا. 💗
          </p>
          <div className="wish-signature">With Lots Of Love ❤️</div>
        </motion.div>
      </section>

      <PhotoGallery />
      <SurpriseGift />

      <footer className="birthday-footer">
        <div className="footer-love">
          Made with <Heart size={16} fill="currentColor" /> for Esraa
        </div>
        <p>A Little Birthday Surprise</p>
        <span>© Made with love 💗</span>
      </footer>
    </main>
  );
}
