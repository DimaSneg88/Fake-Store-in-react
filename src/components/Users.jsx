import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setUsersLoading(true);
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((error) => setError("произошла ошибка на сервере"))
      .finally(() => setUsersLoading(false));
  }, []);

  console.log(users);

  const skeletons = [...new Array(10)].map((elem, index) => (
    <Skeleton key={index} variant="rounded" width={100} height={100} />
  ));

  const renderUsers = users.map((elem) => {
    return <User key={elem.id} elem={elem} />;
  });

  if (error) {
    return <div>{error}</div>;
  }

  return <div className="users">{usersLoading ? skeletons : renderUsers}</div>;
}
