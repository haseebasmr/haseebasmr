import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedText = ({
  children,
  className = "",
  animationType = "fadeUp",
  delay = 0,
  duration = 0.6,
  staggerChildren = false,
  staggerDelay = 0.08,
  once = true,
  amount = 0.3,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Animation variants
  const variants = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration,
          ease: "easeOut",
          delay,
        },
      },
    },
    fadeLeft: {
      hidden: {
        opacity: 0,
        x: -30,
        filter: "blur(5px)",
      },
      visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
          duration,
          ease: "easeOut",
          delay,
        },
      },
    },
    fadeRight: {
      hidden: {
        opacity: 0,
        x: 30,
        filter: "blur(5px)",
      },
      visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
          duration,
          ease: "easeOut",
          delay,
        },
      },
    },
    scale: {
      hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -10,
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay,
        },
      },
    },
    wordByWord: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Word-by-word animation
  if (staggerChildren && typeof children === "string") {
    const words = children.split(" ");

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={variants.wordByWord}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Regular animation
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[animationType]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
