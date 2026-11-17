"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music2, Pause, Play } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setError("");
    } catch {
      setIsPlaying(false);
      setError("مش لاقي ملف الأغنية. ضيف esraa-song.mp3 داخل public/audio.");
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/audio/esraa-song.mp3" loop preload="none" />

      <motion.div
        className={`music-disc ${isPlaying ? "playing" : ""}`}
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 5, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
      >
        <Music2 size={22} />
      </motion.div>

      <div className="music-info">
        <span>OUR LITTLE SONG</span>
        <strong>Made For You 💗</strong>
      </div>

      <button
        type="button"
        className="music-control"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
      </button>

      {error && <p className="music-error" role="status">{error}</p>}
    </div>
  );
}
