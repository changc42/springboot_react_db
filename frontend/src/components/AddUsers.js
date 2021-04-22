import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../config";

export default function AddUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function submit() {
    axios
      .post(`${BACKEND_URL}/api/users`, {
        name,
        email,
        imageUrl,
      })
      .then(window.location.reload());
  }

  return (
    <div>
      <h2>Add Users</h2>
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
        <button onClick={() => submit()}>Submit</button>
      </div>
    </div>
  );
}
