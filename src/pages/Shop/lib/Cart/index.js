import CartList from "./lib/CartList";
import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";

const Cart = () => {
  const { order, isCartShow, handleCartShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <>
      <div className="cart grey darken-3" onClick={handleCartShow}>
        <i className="material-icons">shopping_basket</i>
        {quantity ? <small className="quantity">{quantity}</small> : null}
      </div>
      {isCartShow && <CartList />}
    </>
  );
};

export default Cart;
