import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";

const Product = (props) => {
  const {
    mainId: id,
    displayName: name,
    price: { finalPrice: price },
    displayAssets: [{ url: img }],
    displayDescription: description,
  } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn grey darken-2"
          onClick={() => addToCart({ id, name, price })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.5rem" }}>
          {price} <small>грн.</small>
        </span>
      </div>
    </div>
  );
};

export default Product;
