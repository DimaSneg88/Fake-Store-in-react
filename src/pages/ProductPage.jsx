import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => setError("произошла ошибка на сервере"))
      .finally(() => setLoading(false));
  }, []);
  console.log(product);

  if (error) {
    navigate("/error");
  }

  return (
    <div>
      <Menu />
      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  );
}
