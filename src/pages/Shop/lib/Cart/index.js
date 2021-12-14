import CartList from "./lib/CartList";
import { useState } from "react";
const Cart = (props) => {
  const {
    order,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  const quantity = order.length;
  const [isCartShow, setCartShow] = useState(false);

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  return (
    <>
      <div className="cart grey darken-3" onClick={handleCartShow}>
        <i className="material-icons">shopping_basket</i>
        {quantity ? <small className="quantity">{quantity}</small> : null}
      </div>
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
    </>
  );
};

export default Cart;
