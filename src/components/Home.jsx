import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import { Haseeb, Header } from "./";
import { Parallax } from "react-parallax";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [parallaxLoaded, setParallaxLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setParallaxLoaded(true);
      }, 1000); // D
    }, 3000);
  }, []);
  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="start"
            initial={{ y: 0 }}
            exit={{
              y: -1500,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <StartScreen />
          </motion.div>
        ) : (
          <div>
            <motion.div
              key="home"
              initial={{ y: 1000 }}
              animate={{ y: [1000, 50, 0] }}
              transition={{ duration: 1, times: [0, 0.3, 1] }}
              className="relative"
            >
              <Header />
              <div className="relative">
                <Parallax
                  strength={parallaxLoaded ? 0 : 0}
                  bgImage="/assets/images/backgroundPic.jpg"
                  bgImageStyle={{
                    objectFit: "cover",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <div className="h-screen w-screen"></div>
                </Parallax>
                <Haseeb />
              </div>
            </motion.div>
            <div className="h-screen w-screen"></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
