import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGripLines, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Float } from "../";

export default function RadialBtn() {
  const [isClicked, setIsClicked] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setShowButton(window.scrollY > 50);
      } else {
        setShowButton(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const radius = 130; // Radius of the arc
  const items = [
    { label: "Photos", angle: 180, Link: "#photos" },
    { label: "Videos", angle: 218, Link: "#videos" },
    { label: "Contact", angle: 270, Link: "/contact" },
  ];

  const navigate = useNavigate();

  const handleRadialClick = (link) => {
    if (link.startsWith("#")) {
      const id = link.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        handleClick();
      } else {
        navigate("/", { state: { targetId: id } });
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClick();
          }
        }, [2500]);
      }
    } else {
      navigate(link);
      handleClick();
    }
  };

  return (
    showButton && (
      <div className="fixed right-5 top-5">
        <Float
          xRange={2}
          yRange={12}
          speed={4}
          rotateRange={1}
          disabled={isClicked}
        >
          <div>
            {isClicked ? (
              <button
                className="absolute right-7 top-7 z-50"
                onClick={handleClick}
              >
                <FaTimes size={25} color="white" />
              </button>
            ) : (
              <button
                className="absolute right-7 top-7 z-50 bg-transparent border-none p-0"
                onClick={handleClick}
              >
                <FaGripLines size={25} color="white" />
              </button>
            )}
            <AnimatePresence>
              {isClicked && (
                <motion.div
                  className="h-10 w-10 fixed top-7 right-7 z-40"
                  initial={{ rotate: -150 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 150 }}
                  transition={{ duration: 0.2 }}
                >
                  {items.map((item, index) => {
                    const x = radius * Math.cos((item.angle * Math.PI) / 180);
                    const y = radius * Math.sin((item.angle * Math.PI) / 180);
                    return (
                      <div
                        key={index}
                        className="absolute h-12 w-12 flex items-center justify-center rounded-full"
                        style={{ transform: `translate(${x}px, ${-y}px)` }}
                      >
                        <button
                          onClick={() => handleRadialClick(item.Link)}
                          className="text-white text-sm active:text-xl hover:text-lg"
                        >
                          {item.label}
                        </button>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              className="bg-pallet1 flex items-center justify-center rounded-full"
              onClick={handleClick}
              initial={{ height: 0, width: 0 }}
              animate={{
                height: isClicked ? "20rem" : "5rem",
                width: isClicked ? "20rem" : "5rem",
                x: isClicked ? "6.5rem" : 0,
                y: isClicked ? "-6.5rem" : 0,
              }}
              transition={{
                duration: 0.2,
                delay: isClicked ? 0 : 0.2,
                ease: "easeOut",
              }}
              style={{ originX: 0, originY: 0 }}
            ></motion.button>
          </div>
        </Float>
      </div>
    )
  );
}
