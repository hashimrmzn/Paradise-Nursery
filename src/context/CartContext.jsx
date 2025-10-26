import { createContext, useContext, useReducer } from "react";

// 🛍 Initial State
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// 🧮 Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;
      if (itemExists) {
        // If item already exists → increase quantity
        updatedCart = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const totalAmount = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, totalAmount, totalQuantity };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const totalAmount = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, totalAmount, totalQuantity };
    }

    case "INCREASE_QUANTITY": {
      const updatedCart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const totalAmount = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, totalAmount, totalQuantity };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cartItems
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove if quantity = 0

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const totalAmount = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, totalAmount, totalQuantity };
    }

    case "CLEAR_CART":
      return { cartItems: [], totalAmount: 0, totalQuantity: 0 };

    default:
      return state;
  }
};

// ⚙️ Create Context
const CartContext = createContext();

// 🧩 Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 🎯 Cart Actions
  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const increaseQuantity = (id) =>
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  const decreaseQuantity = (id) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalAmount: state.totalAmount,
        totalQuantity: state.totalQuantity,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🪴 Custom Hook
export const useCart = () => useContext(CartContext);
