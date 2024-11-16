import React, { createContext, useState } from "react";
import "../Pages/CSS/ShopCategory.css";
import productsData from "./../Component/Data/ProductData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  productsData.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log("Add to Cart - Updated Cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId, removeCompletely = false) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (removeCompletely) {
        delete updatedCart[itemId]; // Remove the item entirely
      } else if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1; // Decrease quantity by 1
      }
      return updatedCart;
    });
  };

  const getTotalCartQuantity = () => {
    return Object.values(cartItem).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const calculateSubtotal = () => {
    return productsData.reduce((subtotal, product) => {
      const quantity = cartItem[product.id] || 0;
      return subtotal + product.newPrice * quantity;
    }, 0);
  };

  const calculateTotal = (shippingFee = 0) => {
    return calculateSubtotal() + shippingFee;
  };

  const contextValue = {
    productsData,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartQuantity,
    calculateSubtotal,
    calculateTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
