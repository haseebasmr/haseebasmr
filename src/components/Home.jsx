import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import { Haseeb } from "./haseeb";

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
              <motion.div
                className="bg-home-bg bg-cover bg-no-repeat bg-center h-screen w-screen relative"
                initial={{ y: 250 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Header />
                <Haseeb />
              </motion.div>
            </motion.div>
            <div className="h-screen w-screen"></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
