import { useContext } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import { LoadingContext } from "../../context/LoadingContextProvider";
import { Header, Footer, StartScreen } from "../";

export default function AppContainer() {
  const { loading } = useContext(LoadingContext);
  return (
    <div>
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
          <Footer />
        </div>
      )}
    </div>
  );
}
