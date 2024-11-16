import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { productsData, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container pt-5 pb-5">
      <div className="product-cart">
        <div className="table-responsive">
        <table className="table table-bordered align-middle table-hover">
          <thead>
            <tr>
              <th className="text-center">Products</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => {
              if (cartItem[product.id] > 0) {
                return (
                  <tr key={product.id}>
                    <td className="text-center">
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
                    <td className="text-center">
                      <button onClick={() => removeFromCart(product.id)} title="Delete">
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
    </div>
  );
};

export default CartItems;
