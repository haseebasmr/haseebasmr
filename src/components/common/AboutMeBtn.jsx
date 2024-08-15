import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { useNavigate } from "react-router-dom";

export default function AboutMeBtn() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [700, 1700], [0, -200]); // Adjust the range as needed
  const navigate = useNavigate();
  return (
    <div className="flex justify-end mx-20">
      <motion.button
        className="bg-black text-white font-montserrat text-xl font-medium h-48 w-48 rounded-full"
        style={{ y: yPos }}
        onClick={() => {
          navigate("/about");
        }}
      >
        <Magnetic>
          <div className="px-6 py-14 rounded-full">About Me</div>
        </Magnetic>
      </motion.button>
    </div>
  );
}
