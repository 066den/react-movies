import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getMealById } from "../../../../api/api";
import Loading from "../../../../lib/Loading";

const Meal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, [id]);

  return (
    <div className="container">
      {!meal.idMeal ? (
        <Loading />
      ) : (
        <div className="meal row">
          <div className="col s6">
            <img
              src={meal.strMealThumb}
              className="responsive-img"
              alt={meal.strMeal}
            />
          </div>
          <div className="col s6">
            <h1>{meal.strMeal}</h1>
            <h4>
              Category:{" "}
              <NavLink to={`/meals/${meal.strCategory}`}>
                {meal.strCategory}
              </NavLink>
            </h4>
            {meal.strArea ? <h4>Area: {meal.strArea}</h4> : null}
            {meal.strTags ? <h5>Tags: {meal.strTags}</h5> : null}
          </div>
          <div className="col s12">
            <p>{meal.strInstructions}</p>
          </div>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(meal).map((key) => {
                if (key.includes("Ingredient") && meal[key]) {
                  return (
                    <tr key={key}>
                      <td>{meal[key]}</td>
                      <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <div className="col s6">
            <h5>Video recipe</h5>
            <div className="video-container">
              <iframe
                src={`//www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
                className="responsive-img"
                title={id}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      <NavLink to={`/meals/${meal.strCategory}`} className="btn">
        Return to category
      </NavLink>
    </div>
  );
};

export default Meal;
