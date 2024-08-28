import { ParallaxProvider } from "react-scroll-parallax";
import LoadingContextProvider from "./context/LoadingContextProvider";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AboutMe,
  AppContainer,
  Home,
  Contact,
  FoodPhoto,
  ProductPhoto,
  FoodVideo,
} from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <LoadingContextProvider>
      <ParallaxProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AppContainer />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutMe />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/foodphoto" element={<FoodPhoto />} />
            <Route path="/productphoto" element={<ProductPhoto />} />
            <Route path="/foodvideo" element={<FoodVideo />} />
          </Routes>
        </AnimatePresence>
      </ParallaxProvider>
    </LoadingContextProvider>
  );
}

export default App;
