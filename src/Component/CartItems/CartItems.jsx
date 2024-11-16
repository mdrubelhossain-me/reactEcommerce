import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { productsData, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container pt-5 pb-5">
     <div className="product-cart">
     <table className="table table-striped">
        <thead>
          <tr>
            <th>Products</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => {
            if (cartItem[product.id] > 0) {
              return (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      className="cart-img img-fluid"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.newPrice.toFixed(2)}</td>
                  <td>{cartItem[product.id]}</td>
                  <td>
                    ${(product.newPrice * cartItem[product.id]).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(product.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default CartItems;
