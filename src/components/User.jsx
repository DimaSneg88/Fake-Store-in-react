import React from "react";

export default function User({ elem }) {
  return (
    <div>
      <h3>
        {elem.name.firstname} {elem.name.lastname}
      </h3>
      <h4>{elem.username}</h4>
    </div>
  );
}
