import CartItem from "../CartItem";

const CartList = (props) => {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <>
      <div className="cart-popup modal show">
        <div className="modal-content">
          <span className="close" onClick={handleCartShow}>
            <i className="material-icons">close</i>
          </span>
          <h4>Корзина</h4>
          {order.length ? (
            <ul className="collection">
              {order.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  removeFromCart={removeFromCart}
                  incQuantity={incQuantity}
                  decQuantity={decQuantity}
                />
              ))}
              <li className="collection-item active grey darken-2 flow-text">
                <span className="td-title">
                  <strong>Общая сумма:</strong>
                </span>
                <span className="td-sum">{totalPrice} грн.</span>
              </li>
            </ul>
          ) : (
            <p className="text-center">Корзина пуста</p>
          )}
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
};

export default CartList;
