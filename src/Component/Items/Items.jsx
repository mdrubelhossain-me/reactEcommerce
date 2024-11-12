import React from "react";
import "./Items.css";

const Items = (props) => {
  return (
    <div className="item-section ">
      <div className="card">
        <div className="p-photo">
          <img src={props.imgSrc} alt="" />
        </div>
        <div className="card-body">
          <a className="d-block" href="#">
            {props.name}
          </a>
          <div className="d-flex gap-3 align-items-center">
            <p>${props.newPrice}</p>
            <p>
              <del>${props.oldPrice}</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
