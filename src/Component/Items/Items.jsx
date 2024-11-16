import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="item-section ">
      <div className="card">
        <div className="p-photo">
          <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.imgSrc} alt="" /></Link>
        </div>
        <div className="card-body">
          <a className="d-block" href="#" onClick={window.scrollTo(0,0)}>
            <Link to={`/product/${props.id}`} >{props.name}</Link>
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
