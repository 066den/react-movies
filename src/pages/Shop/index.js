import { useEffect, useContext } from "react";
import Alert from "../../lib/Alert";
import Loading from "../../lib/Loading";
import Category from "../Shop/lib/Category";
import { API_URL_FORTNITE, API_KEY_FORTNITE } from "./../../config";
import Cart from "./lib/Cart";
import { ShopContext } from "../../context/ShopContext";

//const API_KEY_FORTNITE = process.env.REACT_APP_API_KEY_FORTNITE;
const Shop = () => {
  const { setProducts, loading } = useContext(ShopContext);

  useEffect(function (getProducts) {
    fetch(API_URL_FORTNITE, {
      headers: { Authorization: API_KEY_FORTNITE },
    })
      .then((respons) => respons.json())
      .then((data) => {
        setProducts(data.shop);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Cart />
      <Alert />
      {loading ? <Loading /> : <Category />}
    </div>
  );
};

export default Shop;
