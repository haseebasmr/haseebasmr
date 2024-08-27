import { useContext } from "react";
import StartScreen from "./StartScreen";
import { AnimatePresence, motion } from "framer-motion";
import { Header, Footer } from "./";
import { Outlet } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContextProvider";

export default function AppContainer() {
  const { loading } = useContext(LoadingContext);
  return (
    <div>
      {loading ? (
        <AnimatePresence>
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
        </AnimatePresence>
      ) : (
        <div className="overflow-hidden">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}
