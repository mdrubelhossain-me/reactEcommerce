import React, { useContext } from "react";
import "./ProductDisplay.css";
import Product from "./../../Pages/Product";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="container pb-5">
      <div className="product-display">
        <div className="row g-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex gap-3">
              <div className="sm-img-section">
                <div className="sm-img">
                  <img src={product.imgSrc} className="img-fluid" alt="" />
                </div>
                <div className="sm-img">
                  <img src={product.imgSrc} className="img-fluid" alt="" />
                </div>
                <div className="sm-img">
                  <img src={product.imgSrc} className="img-fluid" alt="" />
                </div>
                <div className="sm-img">
                  <img src={product.imgSrc} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="full-img">
                <img src={product.imgSrc} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h5>{product.name}</h5>
            </div>
            <div className="d-flex gap-2 review-section">
              <div className="rating">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
              </div>
              <div>
                <span>(100)</span>
              </div>
            </div>
            <div className="price d-flex gap-3">
              <h6 className="opacity-75">
                <del>${product.oldPrice}</del>
              </h6>
              <h6 className="new">${product.newPrice}</h6>
            </div>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              nobis veniam sequi numquam officia quis.
            </p>
            <div className="weight">
              <h6>Weight (in Kg)</h6>
              <span>1</span>
              <span>1.5</span>
              <span>2</span>
              <span>2.5</span>
              <span>5</span>
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="myBtn m-0"
              >
                Add to Cart
              </button>
            </div>
            <div className="category mt-4">
              <h6>Category: </h6>
              <span>{product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
