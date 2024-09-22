import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Произошла ошибка на сервере</h1>
      <p>
        Вернуться на <Link to={"/"}>главную</Link>
      </p>
    </div>
  );
}
