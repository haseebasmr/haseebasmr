import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import { AboutMe, AppContainer, Home } from "./";

function Routes() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
