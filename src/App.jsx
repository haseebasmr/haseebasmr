import { ParallaxProvider } from "react-scroll-parallax";
import LoadingContextProvider from "./context/LoadingContextProvider";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactLenis from "lenis/react";
import { AboutMe, AppContainer, Home, Contact } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <LoadingContextProvider>
      <ParallaxProvider>
        <ReactLenis root>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AppContainer />}>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutMe />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </ReactLenis>
      </ParallaxProvider>
    </LoadingContextProvider>
  );
}

export default App;
