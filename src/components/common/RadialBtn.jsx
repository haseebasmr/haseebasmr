import { motion } from "framer-motion";
import { useState } from "react";
import { FaGripLines, FaTimes } from "react-icons/fa";

export default function RadialBtn() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const radius = 100; // Radius of the arc
  const items = [
    { label: "Photos", angle: 150 },
    { label: "Videos", angle: 20 },
    { label: "Contact", angle: 40 },
  ];

  return (
    <div className="md:hidden fixed right-2 top-2 z-40">
      {isClicked ? (
        <FaTimes
          size={25}
          color="white"
          className="absolute right-7 top-7 z-50"
        />
      ) : (
        <FaGripLines
          size={25}
          color="white"
          className="absolute right-7 top-7 z-50"
        />
      )}
      <motion.button
        className="h-20 w-20 bg-pallet1 flex items-center justify-center rounded-full"
        onClick={handleClick}
        initial={{ scale: 0 }}
        animate={{ scale: isClicked ? 1.5 : 1 }}
        transition={{ duration: 0.5 }}
      ></motion.button>
      {isClicked && (
        <div className="relative">
          {items.map((item, index) => {
            const x = radius * Math.cos((item.angle * Math.PI) / 180);
            const y = radius * Math.sin((item.angle * Math.PI) / 180);
            return (
              <motion.div
                key={index}
                className="absolute h-12 w-12 bg-pallet1 flex items-center justify-center rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: x, y: -y }}
                transition={{ duration: 0.5 }}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="text-white text-sm">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
