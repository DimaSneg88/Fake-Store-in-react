import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Sorting from "../components/Sorting";
import Users from "../components/Users";
import Menu from "../components/Menu";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("electronics");
  const [sort, setSort] = useState("asc");
  const [error, setError] = useState("");
  const [productsLoading, setProductsLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  useEffect(() => {
    setProductsLoading(true);
    fetch(
      `https://fakestoreapi.com/products/category/${activeCategory}?sort=${sort}`
    )
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => setError("произошла ошибка на сервере"))
      .finally(() => setProductsLoading(false));
  }, [activeCategory, sort]);

  useEffect(() => {
    setCategoriesLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => setError("произошла ошибка на сервере"))
      .finally(() => setCategoriesLoading(false));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Menu />
      <Filter
        loading={categoriesLoading}
        activeCategory={activeCategory}
        setCategory={setActiveCategory}
        categories={categories}
      />

      <Sorting setSort={setSort} />
      <Products loading={productsLoading} products={products} />
    </>
  );
}
