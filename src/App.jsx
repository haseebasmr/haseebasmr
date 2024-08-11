import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
