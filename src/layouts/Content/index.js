import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "../../context/ShopContext";
import Loading from "../../lib/Loading";

const Movies = lazy(() => import("../../pages/Movies"));
const Shop = lazy(() => import("../../pages/Shop"));
const Meals = lazy(() => import("../../pages/Meals"));
const CategoryMeals = lazy(() => import("../../pages/Meals/lib/CategoryMeals"));
const Meal = lazy(() => import("../../pages/Meals/lib/Meal"));

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="/meals/:name" element={<CategoryMeals />} />
          <Route path="/meal/:id" element={<Meal />} />
          <Route
            path="/shop"
            element={
              <ContextProvider>
                <Shop />
              </ContextProvider>
            }
          />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
