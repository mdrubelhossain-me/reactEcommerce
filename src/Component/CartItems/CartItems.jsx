import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {
    productsData,
    cartItem,
    addToCart,
    removeFromCart,
    calculateSubtotal,
    calculateTotal,
  } = useContext(ShopContext);

  const subtotal = calculateSubtotal();
  const shippingFee = 0; // Set your shipping fee here
  const total = calculateTotal(shippingFee);

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
                <th className="text-center">Quantity</th>
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
                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center ">
                          <button
                            className="btn btn-dark btn-sm"
                            onClick={() => removeFromCart(product.id)}
                          >
                            -
                          </button>
                          <span className="qty-show px-3 border">
                            {cartItem[product.id]}
                          </span>
                          <button
                            className="btn btn-dark btn-sm"
                            onClick={() => addToCart(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        $ {(product.newPrice * cartItem[product.id]).toFixed(2)}
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => removeFromCart(product.id, true)} // Fully remove item
                          title="Delete"
                          className="btn btn-outline-danger btn-sm"
                        >
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
        <div className="row g-5 mt-3 pb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form role="search">
              <label className="form-label">Have you any promo code?</label>
              <div className="d-flex">
                <input
                  className="form-control rounded-0"
                  placeholder="Enter Code"
                />
                <button className="myBtn m-0 rounded-0" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4 className="mb-3">Cart Total</h4>
            <div className="d-flex justify-content-between border-bottom mb-2">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom mb-2">
              <p>Shipping Fee</p>
              <p>${shippingFee.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom mb-4">
              <h6>Total</h6>
              <h6>${total.toFixed(2)}</h6>
            </div>
            <div>
              <button className="myBtn m-0">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
