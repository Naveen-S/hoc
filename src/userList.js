import React, { useState, useEffect } from "react";
import withLoader from "./withLoader";

 function UserList(props) {
  const [user, setUser] = useState("");
  console.log(props);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      });
  }, []);

  return (
    <div>
      UserList
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default withLoader(UserList);