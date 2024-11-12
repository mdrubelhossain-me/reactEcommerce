import React from "react";
import "./Popular.css";
import popularProducts from "../Data/PopularProduct";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="popular-section pt-5 pb-5">
      <div className="container">
        <h2 className="text-center">Popular Fresh Fruits</h2>
        <div className="line"></div>
        <div className="card-container">
          {popularProducts.map((item, i) => (
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

export default Popular;
