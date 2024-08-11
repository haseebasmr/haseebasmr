import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import { Haseeb } from "./haseeb";
import { Parallax } from "react-parallax";
import SmoothScroll from "./SmoothScroll";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <SmoothScroll>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="start"
            initial={{ y: 0 }}
            exit={{
              y: -1500,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <StartScreen />
          </motion.div>
        ) : (
          <div>
            <motion.div
              key="home"
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Parallax
                bgImage="/assets/images/backgroundPic.jpg"
                strength={200}
                className="h-screen w-screen"
              >
                <Header />
              </Parallax>
              <Haseeb />
            </motion.div>
            <div className="h-screen w-screen"></div>
          </div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}
