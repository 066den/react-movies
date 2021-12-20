import style from "../../style.module.scss";
import MealItem from "./../MealItem";
const MealsList = ({ meals }) => {
  return (
    <div className={style.cards}>
      {meals.map((item) => (
        <MealItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
};

export default MealsList;
