import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../../../../api/api";
import Loading from "../../../../lib/Loading";
import MealsList from "../MealsList";

const CategoryMeals = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <div className="container">
      <button className="btn" onClick={() => goBack(-1)}>
        Go back
      </button>
      {!meals.length ? <Loading /> : <MealsList meals={meals} />}
    </div>
  );
};

export default CategoryMeals;
