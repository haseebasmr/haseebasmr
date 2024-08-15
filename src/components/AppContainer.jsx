import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from ".";
import { Outlet } from "react-router-dom";

export default function AppContainer() {
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
          <div className="overflow-hidden">
            <Header />
            <Outlet />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
