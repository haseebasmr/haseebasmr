import { motion, useScroll, useTransform } from "framer-motion";

export default function Haseeb({ className }) {
  const { scrollY } = useScroll();
  const xPos = useTransform(scrollY, [0, 1000], [0, -700]); // Adjust the range as needed

  return (
    <motion.div
      className={`absolute bottom-36 left-20 ${className}`}
      style={{ x: xPos }}
    >
      <div className="text-white text-8xl -mx-2">M Haseeb</div>
      <div className="text-white text-3xl">Photographer & Video creator</div>
    </motion.div>
  );
}
