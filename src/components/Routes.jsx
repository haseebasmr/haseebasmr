import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import { Home } from "./";

function Routes() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
