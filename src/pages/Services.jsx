import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import handshake from "../assets/scenes/handshake.png";

export default function Services() {
  // Reference for scene 1
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Debug state to display scroll progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((val) => setProgress(val));
    return unsubscribe;
  }, [scrollYProgress]);

  // Handshake image transforms: fade 0→1 at 0–0.2, hold until 0.8, fade out 0.8–1; exit y 0.8–1
  const handOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const handY = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

  // Title transforms: slide & overshoot 0.2–0.4, hold until 0.8, fade out 0.8–1; exit y 0.8–1
  const titleX = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-250, 40, 0]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.199, 0.2, 0.8, 1],
    [0, 0, 1, 1, 0]
  );
  const titleY = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

  // Description transforms: fade in 0.3–0.6, hold until 0.8, fade & exit 0.8–1
  const descOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8, 1],
    [0, 0, 1, 1, 0]
  );
  const descY = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

  return (
    <div>
      {/* Top spacer so scene starts after initial scroll */}
      <div style={{ height: "100vh" }} />

      {/* Scene 1 section (300vh) */}
      <section ref={ref} style={{ position: "relative", height: "300vh" }} />

      {/* Fixed content pinned to viewport center */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Handshake image */}
        <motion.img
          src={handshake}
          alt='Handshake'
          style={{
            opacity: handOpacity,
            y: handY,
            width: 200,
            height: "auto",
            margin: "0 auto",
          }}
        />

        {/* Title below handshake */}
        <motion.h1
          style={{
            fontWeight: 700,

            marginTop: 24,
            fontSize: "2.4rem",
            color: "#2563eb",
            x: titleX,
            opacity: titleOpacity,
            y: titleY,
            textAlign: "center",
            maxWidth: "80vw",
            margin: "24px auto 0",
          }}
        >
          It all starts with a conversation
        </motion.h1>

        {/* Description under title */}
        <motion.p
          style={{
            marginTop: 16,
            fontSize: "1rem",
            color: "#fff",
            opacity: descOpacity,
            y: descY,
            textAlign: "center",
            maxWidth: "20rem",
            margin: "16px auto 0",
          }}
        >
          We begin by understanding your vision, your goals, and your audience.
        </motion.p>
      </motion.div>

      {/* Bottom spacer to allow full exit animations */}
      <div style={{ height: "200vh" }} />

      {/* Debug overlay showing real-time scroll progress */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: "4px",
          pointerEvents: "none",
          fontFamily: "sans-serif",
          fontSize: "0.875rem",
        }}
      >
        Progress: {progress.toFixed(2)}
      </div>
    </div>
  );
}
