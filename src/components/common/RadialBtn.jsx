import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGripLines, FaTimes } from "react-icons/fa";

export default function RadialBtn() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const radius = 100; // Radius of the arc
  const items = [
    { label: "Photos", angle: 180 },
    { label: "Videos", angle: 218 },
    { label: "Contact", angle: 270 },
  ];

  return (
    <div className="md:hidden fixed right-2 top-2 z-40">
      {isClicked ? (
        <FaTimes
          size={25}
          color="white"
          className="absolute right-7 top-7 z-50 pointer-events-none"
        />
      ) : (
        <FaGripLines
          size={25}
          color="white"
          className="absolute right-7 top-7 z-50 pointer-events-none"
        />
      )}
      <AnimatePresence>
        {isClicked && (
          <div className="h-10 w-10 fixed top-7 right-7 z-40 pointer-events-none">
            {items.map((item, index) => {
              const x = radius * Math.cos((item.angle * Math.PI) / 180);
              const y = radius * Math.sin((item.angle * Math.PI) / 180);
              return (
                <motion.div
                  key={index}
                  className="absolute h-12 w-12 bg-pallet1 flex items-center justify-center rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: x, y: -y }}
                  exit={{ x: 0, y: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-sm">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
      <motion.button
        className="bg-pallet1 flex items-center justify-center rounded-full"
        onClick={handleClick}
        initial={{ height: 0, width: 0 }}
        animate={{
          height: isClicked ? "20rem" : "5rem",
          width: isClicked ? "20rem" : "5rem",
          x: isClicked ? "7.5rem" : 0,
          y: isClicked ? "-7.5rem" : 0,
        }}
        transition={{
          duration: 0.2,
          delay: isClicked ? 0 : 0,
          ease: "easeOut",
        }}
        style={{ originX: 0, originY: 0 }}
      ></motion.button>
    </div>
  );
}
