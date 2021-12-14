import style from "../../style.module.scss";
import Product from "../Product";
const Category = (props) => {
  const { goods = [], addToCart = Function.prototype } = props;
  return (
    <div className={style.cards}>
      {goods.length ? (
        goods.map((item) => (
          <Product key={item.mainId} {...item} addToCart={addToCart} />
        ))
      ) : (
        <h4>Nothing </h4>
      )}
    </div>
  );
};

export default Category;
