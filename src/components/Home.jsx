import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="start"
            initial={{ y: 0 }}
            exit={{
              y: -1000,
            }}
            transition={{ duration: 0.5 }}
          >
            <StartScreen />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-home-bg bg-tempbg bg-cover bg-no-repeat bg-center h-screen w-screen">
              <Header />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
