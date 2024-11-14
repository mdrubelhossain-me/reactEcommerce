import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import Items from "../Component/Items/Items";

const ShopCategory = (props) => {
  const { productsData } = useContext(ShopContext);

  return (
    <div className="container pt-5 pb-5">
      <div className="banner-section">
        <div className="over-lay"></div>
        <img src={props.banner} alt="" />
        <div className="content">
          <div className="container px-5">
            <h6>Only On Best Seller Product</h6>
            <h1>Fresh {props.category}</h1>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center showing-products mt-4">
        <div>
          <p>
            <b>Showing-8</b> out of 8 products
          </p>
        </div>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Sort by</option>
            <option value="">Price</option>
            <option value="">Name</option>
            <option value="">Latest</option>
          </select>
        </div>
      </div>

      <div className="shop-cateroy-section">
        <div className="card-container">
          {productsData.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  imgSrc={item.imgSrc}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
