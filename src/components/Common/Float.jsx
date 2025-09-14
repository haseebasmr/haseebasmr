import { motion } from "framer-motion";

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
    static: {
      x: 0,
      y: 0,
      rotate: 0,
    },
  };

  if (disabled) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={floatVariants}
      animate="floating"
      initial="static"
    >
      {children}
    </motion.div>
  );
};

export default Float;
