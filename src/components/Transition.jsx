import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Transition({ children, text }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { width, height } = dimensions;

  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0 `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0 `;

  return (
    <div>
      <motion.svg
        initial={{
          top: "-300px",
        }}
        animate={{
          top: "calc(-100vh)",
        }}
        transition={{
          duration: 0.75,
          delay: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
        exit={{
          top: "-300px",
        }}
        style={{
          width: "100vw",
          height: "calc(100vh + 600px)",
          top: "-300px",
          left: "0",
          position: "fixed",
          pointerEvents: "none",
          zIndex: "40",
        }}
        fill="#27374D"
      >
        <motion.path
          d={initialPath}
          animate={{ d: targetPath }}
          transition={{
            duration: 0.75,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          exit={{ d: initialPath }}
        ></motion.path>
      </motion.svg>
      {children}
    </div>
  );
}
