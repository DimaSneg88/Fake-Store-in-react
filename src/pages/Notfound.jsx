import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <h1>This page not existed</h1>
      <Link to={"/"}>Go to home page</Link>
    </div>
  );
}
