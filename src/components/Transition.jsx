/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Transition({ children }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const location = useLocation();
  const [text, setText] = useState(location.pathname);

  useEffect(() => {
    setText(location.pathname);
  }, [location]);

  const textMap = {
    "/": "Home",
    "/contact": "Contact",
    "/about": "About Me",
    "/foodphoto": "Food Photography",
    "/productphoto": "Product Photography",
    "/portraitphoto": "Portrait Photography",
    "/aestheticsphoto": "Aesthetics Photography",
    "/foodvideo": "Food Videography",
    "/productvideo": "Product Videography",
    "/reviewvideo": "Review Videography",
    "/naturevideo": "Nature Videography",
  };

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
    L${width} ${height + 300}
    Q${width / 2} ${height + 300} 0 ${height + 300}
    L0 0 `;

  return (
    <div>
      <motion.p
        className="md:text-6xl text-3xl text-center"
        style={{
          position: "fixed",
          top: "45%",
          left: "50%",
          transform: "translate(-50%)",
          color: "white",
          zIndex: "50",
        }}
        initial={{ opacity: 0, top: "60%" }}
        animate={{
          opacity: [0, 1, 1, 1],
          top: ["60%", "45%", "45%", "-20%"],
        }}
        transition={{
          duration: 1,
          times: [0, 0.2, 0.7, 1],
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {textMap[text]}
      </motion.p>
      <motion.svg
        initial={{
          top: "-300px",
        }}
        animate={{
          top: "calc(-150vh)",
          transition: {
            delay: 0.6,
            duration: 0.5,
          },
          transitionEnd: {
            top: "100vh",
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        exit={{
          top: "-300px",
          duration: 0.5,
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
            duration: 0.5,
            delay: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          exit={{ d: initialPath }}
        ></motion.path>
      </motion.svg>
      {children}
    </div>
  );
}
