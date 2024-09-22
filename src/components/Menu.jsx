import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/users"}
      >
        Users
      </NavLink>
    </div>
  );
}
