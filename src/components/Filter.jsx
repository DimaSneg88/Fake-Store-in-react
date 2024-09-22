import { Skeleton } from "@mui/material";
import React from "react";

export default function Filter({
  categories,
  setCategory,
  activeCategory,
  loading,
}) {
  const skeletons = [...new Array(5)].map((elem, index) => (
    <Skeleton key={index} variant="rounded" width={79} height={21} />
  ));

  const renderCategories = categories.map((elem, index) => {
    return (
      <button
        key={index}
        onClick={() => setCategory(elem)}
        className={elem == activeCategory ? "category-active" : ""}
      >
        {elem}
      </button>
    );
  });
  return (
    <div className="categories">{loading ? skeletons : renderCategories}</div>
  );
}
