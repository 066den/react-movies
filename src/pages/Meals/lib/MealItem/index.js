import { NavLink } from "react-router-dom";

const MealItem = (props) => {
  const { idMeal: id, strMeal: title, strMealThumb: thumb } = props;
  return (
    <div className="card">
      <div className="card-image">
        <NavLink to={`/meal/${id}`}>
          <img src={thumb} alt={title} />
        </NavLink>
      </div>
      <div className="card-content">
        <span className="card-title">
          <NavLink to={`/meal/${id}`}> {title}</NavLink>
        </span>
      </div>
    </div>
  );
};

export default MealItem;
