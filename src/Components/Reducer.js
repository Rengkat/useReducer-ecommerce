const reducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    return { ...state, cart: [] };
  }
  if (action.type === "ADD_TO_CART") {
    return { ...state, cart: [...state.cart, action.payload] };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INCREASE_QUANTITY") {
    let targetProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return { ...state, cart: targetProduct };
  }
  if (action.type === "DECREASE_QUANTITY") {
    let targetProduct = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return { ...state, cart: targetProduct };
  }
  if (action.type === "ADD_TO_WISHLIST") {
    return { ...state, wishlist: [...state.wishlist, action.payload] };
  }
  if (action.type === "CLEAR_WISHLIST") {
    return { ...state, wishlist: [] };
  }
  return state;
};

export default reducer;
