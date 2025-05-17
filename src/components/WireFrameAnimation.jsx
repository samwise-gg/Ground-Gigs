import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

/**
 * WireframeAnimation: simple SVG wireframe drawing animation.
 * Props:
 * - width: SVG width (string or number)
 * - height: SVG height (string or number)
 * - viewBox: SVG viewBox attribute
 * - strokeColor: color of wireframe strokes
 * - strokeWidth: width of wireframe strokes
 * - duration: total duration (s) for each element to draw
 * - stagger: delay (s) between elements drawing
 */
export default function WireframeAnimation({
  width = "100%",
  height = "100%",
  viewBox = "0 0 800 500",
  strokeColor = "#fff",
  strokeWidth = 2,
  duration = 2,
  stagger = 0.4,
  style = {},
}) {
  const controls = useAnimation();

  // Kick off drawing animation on mount
  useEffect(() => {
    controls.start((i) => ({
      strokeDashoffset: 0,
      transition: { duration, delay: i * stagger, ease: "easeInOut" },
    }));
  }, [controls, duration, stagger]);

  return (
    <motion.svg width={width} height={height} viewBox={viewBox} style={style}>
      {/* Header bar */}
      <motion.rect
        custom={0}
        x={20}
        y={20}
        width={760}
        height={60}
        fill='none'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={800}
        strokeDashoffset={800}
        animate={controls}
      />
      {/* Nav items */}
      {[50, 170, 290].map((x, i) => (
        <motion.rect
          key={i}
          custom={i + 1}
          x={x}
          y={100}
          width={100}
          height={20}
          fill='none'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={220}
          strokeDashoffset={220}
          animate={controls}
        />
      ))}
      {/* Hero section */}
      <motion.rect
        custom={4}
        x={20}
        y={150}
        width={760}
        height={200}
        fill='none'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={1200}
        strokeDashoffset={1200}
        animate={controls}
      />
    </motion.svg>
  );
}

WireframeAnimation.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewBox: PropTypes.string,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  duration: PropTypes.number,
  stagger: PropTypes.number,
  style: PropTypes.object,
};
