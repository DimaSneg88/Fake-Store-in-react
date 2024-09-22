import React from "react";
import { Link } from "react-router-dom";

export default function Product({ elem }) {
  return (
    <div className="product">
      <Link to={`/product/${elem.id}`}>
        <img className="product-img" src={elem.image} alt="" />
      </Link>
      <h5 className="product-title">{elem.title}</h5>
    </div>
  );
}
