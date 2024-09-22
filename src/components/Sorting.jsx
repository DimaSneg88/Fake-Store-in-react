import React from "react";

export default function Sorting({ setSort }) {
  return (
    <div className="sort-text">
      Сортировка:
      <button className="ask" onClick={() => setSort("asc")}>
        По возрастанию
      </button>
      <button className="desc" onClick={() => setSort("desc")}>
        По убыванию
      </button>
    </div>
  );
}
