import React from "react";
import "./RelatedProducts.css";
import newCollection_Data from "./../Data/NewCollectionData";
import Items from "./../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="container pb-5">
      <div className="related-products">
        <h4>Related Products</h4>
        <div className="lines"></div>
        <div className="related-product-item">
          {newCollection_Data.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              imgSrc={item.imgSrc}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
