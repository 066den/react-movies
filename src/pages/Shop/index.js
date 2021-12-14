import { useEffect, useState } from "react";
import Alert from "../../lib/Alert";
import Loading from "../../lib/Loading";
import Category from "../Shop/lib/Category";
import { API_URL_FORTNITE, API_KEY_FORTNITE } from "./../../config";
import Cart from "./lib/Cart";

//const API_KEY_FORTNITE = process.env.REACT_APP_API_KEY_FORTNITE;
const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alert, setAlert] = useState("");

  const addToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const changeItem = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(changeItem);
    }
    setAlert(`Товар "${item.name}" добавлен в корзину`);
  };

  const removeFromCart = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };

  const incQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  useEffect(function (getGoods) {
    fetch(API_URL_FORTNITE, {
      headers: { Authorization: API_KEY_FORTNITE },
    })
      .then((respons) => respons.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Cart
        order={order}
        handleCartShow={handleCartShow}
        removeFromCart={removeFromCart}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
      />
      {alert && <Alert alert={alert} />}
      {loading ? <Loading /> : <Category goods={goods} addToCart={addToCart} />}
    </div>
  );
};

export default Shop;
