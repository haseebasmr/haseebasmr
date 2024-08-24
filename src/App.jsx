import { Routes } from "./components";
import { ParallaxProvider } from "react-scroll-parallax";
import LoadingContextProvider from "./context/LoadingContextProvider";

function App() {
  return (
    <LoadingContextProvider>
      <ParallaxProvider>
        <Routes />
      </ParallaxProvider>
    </LoadingContextProvider>
  );
}

export default App;
