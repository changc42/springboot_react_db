import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../../config";

export default function UserCard(props) {
  const { user } = props;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);

  let [isEditing, setIsEditing] = useState(false);

  function updateCard() {
    axios
      .put(`${BACKEND_URL}/api/users/${user.id}`, {
        name,
        email,
        imageUrl,
      })
      .then(() => {
        window.location.reload();
      });
  }

  function deleteUser() {
    axios.delete(`${BACKEND_URL}/api/users/${user.id}`).then(() => {
      window.location.reload();
    });
  }

  return isEditing ? (
    <div
      style={{
        border: "1px solid",
        width: "20rem",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />

        <label for="imageUrl">Image Url:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>
        <br />
      </div>
      <button onClick={() => window.location.reload()}>Cancel</button>
      <button onClick={() => updateCard()}>Save</button>
    </div>
  ) : (
    <div
      style={{
        border: "1px solid",
        width: "20rem",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <img src={imageUrl} alt={imageUrl} style={{ maxWidth: "20rem" }} />
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteUser()}>Delete</button>
    </div>
  );
}
