import { motion, useScroll, useTransform } from "framer-motion";

export default function Haseeb({ className }) {
  const { scrollY } = useScroll();
  const xPos = useTransform(scrollY, [0, 1000], [0, -700]); // Adjust the range as needed
  const xPosSecond = useTransform(scrollY, [0, 1000], [0, 1000]); // Adjust the range as needed

  return (
    <div
      className={`absolute bottom-48 left-20 ${className}`}
      style={{ x: xPos }}
    >
      <motion.div className="text-white text-8xl -mx-2" style={{ x: xPos }}>
        M Haseeb
      </motion.div>
      <motion.div className="text-white text-3xl" style={{ x: xPosSecond }}>
        Photographer & Video creator
      </motion.div>
    </div>
  );
}
