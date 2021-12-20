import { createContext, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  alerts: [],
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.incQuantity = (id) => {
    dispatch({ type: "INC_QUANTITY", payload: id });
  };

  value.decQuantity = (id) => {
    dispatch({ type: "DEC_QUANTITY", payload: id });
  };

  value.handleCartShow = () => {
    dispatch({ type: "TOGGLE_CART_SHOW" });
  };

  value.setProducts = (data) => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  };

  value.clearAlerts = () => {
    dispatch({ type: "CLEAR_ALERTS" });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
