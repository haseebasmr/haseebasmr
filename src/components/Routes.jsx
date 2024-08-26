import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import { AboutMe, AppContainer, Home, Contact } from "./";
import FoodPhoto from "./photoCategories/FoodPhoto";
import FoodVideo from "./videoCategories/FoodVideo";

function Routes() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/foodphoto" element={<FoodPhoto />} />
        <Route path="/foodvideo" element={<FoodVideo />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
