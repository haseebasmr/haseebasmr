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
      x: [0, xRange, -xRange, 0],
      y: [0, -yRange, yRange, -yRange / 2, 0],
      rotate: [0, rotateRange, -rotateRange, 0],
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
