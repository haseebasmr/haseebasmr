import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

export default function AboutMeBtn() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [700, 1700], [0, -150]); // Adjust the range as needed
  return (
    <div className="flex justify-end mx-20">
      <motion.button
        className="bg-black text-white font-montserrat text-xl font-medium h-48 w-48 rounded-full"
        style={{ y: yPos }}
      >
        <Magnetic>
          <button className="px-6 py-14 rounded-full">About Me</button>
        </Magnetic>
      </motion.button>
    </div>
  );
}
