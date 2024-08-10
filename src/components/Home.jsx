import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: loading ? 0 : [0, -250, -300, -1000],
        }}
        transition={{ duration: 0.5 }}
      >
        <StartScreen />
      </motion.div>
      <div className="bg-pallet2 h-screen w-screen flex items-center justify-center">
        <p className="text-white text-4xl">Home</p>
      </div>
    </>
  );
}
