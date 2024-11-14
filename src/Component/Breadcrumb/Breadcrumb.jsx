import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="container pt-5">
      <div className="breadcrumb">
       <p>
          Home <i className="bi bi-chevron-right"></i> Shop{" "}
          <i className="bi bi-chevron-right"></i> {product.category}{" "}
          <i className="bi bi-chevron-right"></i> {product.name}{" "}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
