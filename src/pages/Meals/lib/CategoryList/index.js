import CategoryItem from "../CategoryItem";
import style from "../../style.module.scss";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className={style.cardsCategory}>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export default CategoryList;
