import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import { Description, Haseeb, Header } from "./";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="start"
            initial={{ y: 0, opacity: 1 }}
            exit={{
              y: -1500,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-screen h-screen z-50"
          >
            <StartScreen />
          </motion.div>
        ) : (
          <div>
            <Header />
            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-screen h-screen">
                <Parallax speed={-20}>
                  <img
                    src="/assets/images/backgroundPic.jpg"
                    alt="bacground image"
                    className="object-cover h-screen w-screen"
                  ></img>
                </Parallax>
              </div>
            </motion.div>
            <Haseeb />
            <Description className="z-10" />
            <div className="h-screen w-screen"></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
