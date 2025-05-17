import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * ScrollScene: a reusable scrollytelling scene component.
 * Props:
 * - id: unique identifier for this scene (required)
 * - imageSrc: URL or import of an image asset
 * - title: heading text
 * - description: paragraph text
 * - height: content height in vh (default 400)
 * - offset: scroll offset array for when progress 0 and 1 occur (default ["start 50%","end 50%"])
 * - onProgress: callback(id, progress) for debug or overlay
 * - imageStyle, titleStyle, descStyle: optional style overrides
 */
export default function ScrollScene({
  id,
  imageSrc,
  title,
  description,
  height = 400,
  offset = ["start 50%", "end 50%"],
  onProgress,
  imageStyle = {},
  titleStyle = {},
  descStyle = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Report scroll progress back to parent
  useEffect(() => {
    if (onProgress && id != null) {
      const unsubscribe = scrollYProgress.onChange((p) => onProgress(id, p));
      return unsubscribe;
    }
  }, [scrollYProgress, onProgress, id]);

  // Section height in vh
  const totalHeight = height;

  // Image animation: fade in/out & exit up
  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const imgY = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

  // Title animation: slide/overshoot, hold, exit up
  const titleX = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-250, 40, 0]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.199, 0.2, 0.8, 1],
    [0, 0, 1, 1, 0]
  );
  const titleY = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

  // Description animation: fade in, hold, exit up
  const descOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.8, 1],
    [0, 0, 1, 1, 0]
  );
  const descY = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

  return (
    <>
      {/* Scroll trigger container */}
      <section
        ref={ref}
        style={{ position: "relative", height: `${totalHeight}vh` }}
      />

      {/* Fixed content container */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 999,
        }}
      >
        {/* Image */}
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt={title}
            style={{
              opacity: imgOpacity,
              y: imgY,
              margin: "0 auto",
              ...imageStyle,
            }}
          />
        )}

        {/* Title */}
        {title && (
          <motion.h1
            style={{
              marginTop: 24,
              x: titleX,
              opacity: titleOpacity,
              y: titleY,
              ...titleStyle,
            }}
          >
            {title}
          </motion.h1>
        )}

        {/* Description */}
        {description && (
          <motion.p
            style={{
              margin: "16px auto 0",
              textAlign: "center",
              opacity: descOpacity,
              y: descY,
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
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  descStyle: PropTypes.object,
};
