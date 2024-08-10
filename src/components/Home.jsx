import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="start"
            initial={{ y: 0 }}
            exit={{
              y: [0, -250, -1000],
            }}
            transition={{ duration: 0.8, times: [0, 0.8, 1] }}
          >
            <StartScreen />
          </motion.div>
        ) : (
          <div className="bg-pallet2 h-screen w-screen flex items-center justify-center">
            <p className="text-white text-4xl">Home</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
