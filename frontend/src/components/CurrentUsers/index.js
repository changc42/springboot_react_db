import React from "react";
import UserCard from "./UserCard";

export default function CurrentUsers(props) {
  const { users } = props;

  return (
    <div>
      <h2>Current Users</h2>
      <div style={{ display: "flex", width: "50rem" }}>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}
