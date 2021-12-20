import { useContext } from "react";
import { ShopContext } from "../../../../../../context/ShopContext";

const CartItem = (props) => {
  const { id, name, price, quantity } = props;
  const { decQuantity, incQuantity, removeFromCart } = useContext(ShopContext);
  return (
    <li className="collection-item">
      <span className="td-title">{name}</span>
      <div className="td-quantity">
        <span
          className="qty-btn minus material-icons"
          onClick={() => decQuantity(id)}
        >
          remove
        </span>
        <span className="qty-item">{quantity}</span>
        <span
          className="qty-btn material-icons"
          onClick={() => incQuantity(id)}
        >
          add
        </span>{" "}
        шт.
      </div>
      <span className="td-sum">{price * quantity} грн.</span>
      <span className="td-del" onClick={() => removeFromCart(id)}>
        <i className="material-icons">delete</i>
      </span>
    </li>
  );
};

export default CartItem;
