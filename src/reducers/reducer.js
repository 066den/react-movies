export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, goods: payload || [], loading: false };

    case "TOGGLE_CART_SHOW":
      return { ...state, isCartShow: !state.isCartShow };
    case "INC_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };

    case "DEC_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };

    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = { ...payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return { ...orderItem, quantity: orderItem.quantity + 1 };
          } else {
            return orderItem;
          }
        });
      }
      let alert = `Товар "${payload.name}" добавлен в корзину`;
      return { ...state, order: newOrder, alerts: [...state.alerts, alert] };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload),
      };
    case "CLEAR_ALERTS":
      return { ...state, alerts: [] };

    default:
      return state;
  }
}
