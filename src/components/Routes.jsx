import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import { AboutMe, AppContainer, Home, Contact } from "./";

function Routes() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
