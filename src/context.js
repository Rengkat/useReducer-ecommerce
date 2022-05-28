import { createContext, useState, useReducer } from "react";
import { data } from "./Components/data";
import reducer from "./Components/Reducer";
export const ContextApp = createContext();
const initialState = {
  loading: false,
  cart: [],
  products: data,
  wishlist: [],
  amoun: 0,
  totalAmount: 0,
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [products] = useState(data);
  // const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_ALL" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    // const newCart = cart.filter((item) => item.id !== id);
    // setCart(newCart);
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };
  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };
  const amount = () => {
    dispatch({ type: "AMOUNT" });
  };
  return (
    <ContextApp.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        increase,
        decrease,
        clearCart,
        addToWishlist,
        clearWishlist,
      }}>
      {children}
    </ContextApp.Provider>
  );
}

export default AppProvider;
