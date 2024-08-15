/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";

export default function Haseeb({ className }) {
  const { scrollY } = useScroll();
  const xPos = useTransform(scrollY, [0, 1000], [0, -700]); // Adjust the range as needed
  const xPosSecond = useTransform(scrollY, [0, 1000], [0, 200]); // Adjust the range as needed
  const opacity = useTransform(scrollY, [500, 600], [1, 0]); // Adjust the range as needed

  return (
    <motion.div
      className={`absolute md:bottom-48 md:left-20 bottom-10 left-8 ${className}`}
      style={{ x: xPos, opacity: opacity }}
    >
      <motion.div
        className="text-white md:text-8xl text-5xl md:-mx-2 -mx-1"
        style={{ x: xPos }}
      >
        M Haseeb
      </motion.div>
      <motion.div
        className="text-white md:text-3xl text-xl"
        style={{ x: xPosSecond }}
      >
        Photographer & Video creator
      </motion.div>
    </motion.div>
  );
}
