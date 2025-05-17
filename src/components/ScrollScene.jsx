import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useScroll, useAnimation, motion } from "framer-motion";

/**
 * ScrollScene: reusable scroll‐triggered scene with handshake, title, and description animations.
 * Props:
 * - id: unique identifier (for progress callbacks)
 * - imageSrc: URL or import for the main image
 * - title: heading text
 * - description: paragraph text
 * - height: vh height of the trigger region (default 300)
 * - offset: [startOffset, endOffset] for useScroll (default ["start 50%","end 50%"])
 * - onProgress: optional callback(id, progress)
 */
export default function ScrollScene({
  id,
  customComponent,
  imageSrc,
  title,
  description,
  height = 300,
  offset = ["start 50%", "end 50%"],
  onProgress,
  imageStyle = {},
  titleStyle = {},
  descStyle = {},
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const controlsImg = useAnimation();
  const controlsTitle = useAnimation();
  const controlsDesc = useAnimation();
  const controlsCustom = useAnimation();

  // Prevent retriggers
  const imgStateRef = useRef("initial");
  const titleStateRef = useRef("initial");
  const descStateRef = useRef("initial");
  const customStateRef = useRef("initial");

  const { scrollYProgress } = useScroll({ target: ref, offset });

  // report progress
  useEffect(() => {
    if (onProgress && id) {
      const unsub = scrollYProgress.onChange((p) => onProgress(id, p));
      return unsub;
    }
  }, [scrollYProgress, onProgress, id]);

  // animate on threshold
  useEffect(() => {
    const unsub = scrollYProgress.onChange((p) => {
      setProgress(p);
      // image: enter@0.2, exit@0.8
      const imgState = p >= 0.8 ? "exit" : p >= 0.1 ? "enter" : "initial";
      if (imgState !== imgStateRef.current) {
        imgStateRef.current = imgState;
        if (imgState === "enter")
          controlsImg.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        else if (imgState === "exit")
          controlsImg.start({
            opacity: 0,
            y: -200,
            transition: { duration: 1 },
          });
        else
          controlsImg.start({ opacity: 0, y: 0, transition: { duration: 1 } });
      }
      // title: enter@0.3, exit@0.8
      const titleState = p >= 0.8 ? "exit" : p >= 0.3 ? "enter" : "initial";
      if (titleState !== titleStateRef.current) {
        titleStateRef.current = titleState;
        if (titleState === "enter")
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
        else if (titleState === "exit")
          controlsTitle.start({
            opacity: 0,
            y: -200,
            transition: { duration: 1 },
          });
        else
          controlsTitle.start({
            opacity: 0,
            x: -250,
            y: 0,
            transition: { duration: 1 },
          });
      }
      // description: enter@0.5, exit@0.8
      const descState = p >= 0.8 ? "exit" : p >= 0.5 ? "enter" : "initial";
      if (descState !== descStateRef.current) {
        descStateRef.current = descState;
        if (descState === "enter")
          controlsDesc.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        else if (descState === "exit")
          controlsDesc.start({
            opacity: 0,
            y: -200,
            transition: { duration: 1 },
          });
        else
          controlsDesc.start({ opacity: 0, y: 0, transition: { duration: 1 } });
      }
      // new customComponent state contoller
      const newCustomState = p >= 0.8 ? "exit" : p >= 0.1 ? "enter" : "initial";
      if (newCustomState !== customStateRef.current) {
        customStateRef.current = newCustomState;
        if (newCustomState === "enter") {
          controlsCustom.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          });
        } else if (newCustomState === "exit") {
          controlsCustom.start({
            opacity: 0,
            y: -200,
            transition: { duration: 1 },
          });
        } else {
          controlsCustom.start({
            opacity: 0,
            y: 0,
            transition: { duration: 1 },
          });
        }
      }

      //end of Custom
    });
    return () => unsub();
  }, [scrollYProgress, controlsImg, controlsTitle, controlsDesc]);

  return (
    <>
      <section
        ref={ref}
        style={{ height: `${height}vh`, position: "relative" }}
      />
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
        {customComponent && (
          <motion.div initial={{ opacity: 0, y: 0 }} animate={controlsCustom}>
            {customComponent}
          </motion.div>
        )}
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt={title}
            initial={{ opacity: 0, y: 0 }}
            animate={controlsImg}
            style={{
              width: 200,
              height: "auto",
              ...imageStyle,
            }}
          />
        )}
        {title && (
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
              ...titleStyle,
            }}
          >
            {title}
          </motion.h1>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            animate={controlsDesc}
            style={{
              marginTop: 16,
              fontSize: "1rem",
              textAlign: "center",
              maxWidth: "40vw",
              margin: "24px auto 0",
              ...descStyle,
            }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </>
  );
}

ScrollScene.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.number,
  offset: PropTypes.array,
  onProgress: PropTypes.func,
};
