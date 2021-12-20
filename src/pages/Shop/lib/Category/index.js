import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import style from "../../style.module.scss";
import Product from "../Product";

const Category = (props) => {
  const { goods } = useContext(ShopContext);
  return (
    <div className={style.cards}>
      {goods.length ? (
        goods.map((item) => <Product key={item.mainId} {...item} />)
      ) : (
        <h4>Nothing </h4>
      )}
    </div>
  );
};

export default Category;
