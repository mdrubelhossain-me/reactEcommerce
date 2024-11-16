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
      console.log("Adding to cart:", itemId);
      console.log("Previous cart state:", prev);
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartQuantity = () => {
    return Object.values(cartItem).reduce((total, quantity) => total + quantity, 0);
};



  const contextValue = { productsData, cartItem, addToCart, removeFromCart,getTotalCartQuantity };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// Same Work
// export const ShopContext = createContext();

// const ShopProvider = ({ children }) => {
//     return (
//         <ShopContext.Provider value={{ productsData }}>
//             {children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopProvider;
