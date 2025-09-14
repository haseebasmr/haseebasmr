import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Float = ({
  children,
  xRange = 10,
  yRange = 8,
  speed = 3,
  rotateRange = 2,
  className = "",
  style = {},
  disabled = false,
}) => {
  const motionRef = useRef(null);
  const frozenPosition = useRef({ x: 0, y: 0, rotate: 0 });

  // Capture current position when disabled
  useEffect(() => {
    if (disabled && motionRef.current) {
      const element = motionRef.current;
      const transform = window.getComputedStyle(element).transform;

      if (transform && transform !== "none") {
        const matrix = new DOMMatrix(transform);
        frozenPosition.current = {
          x: matrix.m41,
          y: matrix.m42,
          rotate: Math.atan2(matrix.m12, matrix.m11) * (180 / Math.PI),
        };
      }
    } else if (!disabled) {
      // Reset frozen position when re-enabling floating
      frozenPosition.current = { x: 0, y: 0, rotate: 0 };
    }
  }, [disabled]);

  const floatVariants = {
    floating: {
      // Smooth, natural floating pattern
      y: [0, -yRange, -yRange * 0.3, -yRange * 0.8, 0],
      x: [0, xRange * 0.3, 0, -xRange * 0.2, 0],
      rotate: [0, rotateRange * 0.5, 0, -rotateRange * 0.3, 0],
      transition: {
        duration: speed,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    frozen: {
      x: frozenPosition.current.x,
      y: frozenPosition.current.y,
      rotate: frozenPosition.current.rotate,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
    static: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={motionRef}
      className={className}
      style={style}
      variants={floatVariants}
      animate={disabled ? "frozen" : "floating"}
      initial="static"
    >
      {children}
    </motion.div>
  );
};

export default Float;
