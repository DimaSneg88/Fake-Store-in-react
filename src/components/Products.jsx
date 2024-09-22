import React from "react";
import Product from "./Product";
import { Skeleton } from "@mui/material";

export default function Products({ products, loading }) {
  const skeletons = [...new Array(5)].map((elem, index) => (
    <Skeleton key={index} variant="rectangular" width={242} height={192} />
  ));

  const renderProducts = products.map((elem) => {
    return <Product key={elem.id} elem={elem} />;
  });

  return <div className="products">{loading ? skeletons : renderProducts}</div>;
}
