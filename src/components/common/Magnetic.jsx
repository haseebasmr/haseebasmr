/* eslint-disable react/prop-types */
import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import throttle from "lodash.throttle";

const Magnetic = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouse = useCallback(
    throttle((e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
      setIsMouseInside(true);
    }, 60),
    []
  ); // Throttle to roughly 60fps

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const checkMousePosition = (e) => {
      if (ref.current) {
        const { clientX, clientY } = e;
        const { left, top, right, bottom } =
          ref.current.getBoundingClientRect();
        const isInside =
          clientX >= left &&
          clientX <= right &&
          clientY >= top &&
          clientY <= bottom;
        if (!isInside && isMouseInside) {
          reset();
          setIsMouseInside(false);
        }
      }
    };

    document.addEventListener("mousemove", checkMousePosition);
    return () => {
      document.removeEventListener("mousemove", checkMousePosition);
    };
  }, [isMouseInside, reset]);

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative", willChange: "transform" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
