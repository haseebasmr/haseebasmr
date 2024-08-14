import { Routes } from "./components";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Routes />
    </ParallaxProvider>
  );
}

export default App;
