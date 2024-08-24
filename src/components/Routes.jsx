import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import { AboutMe, AppContainer, Home, Contact } from "./";
import Food from "./photoCategories/Food";

function Routes() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/photofood" element={<Food />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
