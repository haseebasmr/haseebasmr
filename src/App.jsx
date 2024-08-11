import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
