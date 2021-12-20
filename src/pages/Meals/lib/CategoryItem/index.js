import { NavLink } from "react-router-dom";

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <NavLink to={`/meals/${strCategory}`}>
          <img src={strCategoryThumb} alt={strCategory} />
        </NavLink>
      </div>
      <div className="card-content">
        <span className="card-title">
          <NavLink to={`/meals/${strCategory}`}>{strCategory}</NavLink>
        </span>

        <p> {strCategoryDescription.slice(0, 130)}... </p>
      </div>
    </div>
  );
};

export default CategoryItem;
