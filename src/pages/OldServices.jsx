import React, { useRef, useEffect, useState } from "react";
import { useScroll, useAnimation, motion } from "framer-motion";
import handshake from "../assets/scenes/handshake.png";

export default function Services() {
  // Local state for debug overlay
  const [progressVal, setProgressVal] = useState(0);

  // Ref for scene scroll trigger
  const ref1 = useRef(null);

  // Scroll progress for scene
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start 50%", "end 50%"],
  });

  // Animation controls for handshake and title
  const controls = useAnimation();
  const controlsTitle = useAnimation();
  const controlsDescription = useAnimation();

  // Animation state refs to prevent retriggers
  const animState = useRef("initial");
  const animStateTitle = useRef("initial");
  const animStateDescription = useRef("initial");

  // Subscribe to scroll progress changes and trigger animations once per state change
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((p) => {
      setProgressVal(p);
      // Handshake state machine
      const newState = p >= 0.8 ? "exit" : p >= 0.2 ? "enter" : "initial";
      if (newState !== animState.current) {
        animState.current = newState;
        if (newState === "enter")
          controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        else if (newState === "exit")
          controls.start({ opacity: 0, y: -200, transition: { duration: 1 } });
        else controls.start({ opacity: 0, y: 0, transition: { duration: 1 } });
      }
      // Title state machine
      const newTitleState = p >= 0.8 ? "exit" : p >= 0.3 ? "enter" : "initial";
      if (newTitleState !== animStateTitle.current) {
        animStateTitle.current = newTitleState;
        if (newTitleState === "enter") {
          controlsTitle.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 9,
              bounce: 1,
              duration: 1.5,
            },
          });
        } else if (newTitleState === "exit") {
          controlsTitle.start({
            opacity: 0,
            y: -200,
            transition: { duration: 1 },
          });
        } else {
          controlsTitle.start({
            opacity: 0,
            x: -450,
            y: 0,
            transition: { duration: 1 },
          });
        }
      }
      const newDescriptionState =
        p >= 0.8 ? "exit" : p >= 0.5 ? "enter" : "initial";
      if (newDescriptionState !== animStateDescription.current) {
        animStateDescription.current = newDescriptionState;
        if (newDescriptionState === "enter")
          controlsDescription.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          });
        else if (newDescriptionState === "exit")
          controlsDescription.start({
            opacity: 0,
            y: -200,
            transition: { duration: 1 },
          });
        else
          controlsDescription.start({
            opacity: 0,
            y: 0,
            transition: { duration: 1 },
          });
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, controls, controlsTitle, controlsDescription]);

  return (
    <div>
      {/* Top spacer: initial viewport-height */}
      <div style={{ height: "100vh" }} />

      {/* Scroll trigger region: 300vh */}
      <section ref={ref1} style={{ position: "relative", height: "300vh" }} />

      {/* Fixed handshake and title centered with timed animations */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.img
          src={handshake}
          alt='Handshake'
          initial={{ opacity: 0, y: 0 }}
          animate={controls}
          style={{ width: "200px", height: "auto" }}
        />
        <motion.h1
          initial={{ opacity: 0, x: -250, y: 0 }}
          animate={controlsTitle}
          style={{
            marginTop: 24,
            fontSize: "2rem",
            color: "#0959a1",
            textAlign: "center",
            maxWidth: "80vw",
            margin: "24px auto 0",
          }}
        >
          It all starts with a conversation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={controlsDescription}
          style={{
            marginTop: 2,
            fontSize: "1rem",
            textAlign: "center",
            maxWidth: "40vw",
            margin: "24px auto 0",
          }}
        >
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsum
        </motion.p>
      </motion.div>

      {/* Bottom spacer: extra scroll length */}
      <div style={{ height: "200vh" }} />

      {/* Debug overlay */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: 4,
          pointerEvents: "none",
          fontFamily: "sans-serif",
          fontSize: "0.875rem",
        }}
      >
        Progress: {progressVal.toFixed(2)}
      </div>
    </div>
  );
}
