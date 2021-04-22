import "normalize.css";
import "../app.css";
import axios from "axios";
import CurrentUsers from "./CurrentUsers";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import AddUsers from "./AddUsers";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const usersResponse = await axios.get(`${BACKEND_URL}/api/users`);
      console.log(usersResponse.data);
      setUsers(usersResponse.data._embedded.users);
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  return isLoading ? (
    <p>loading</p>
  ) : (
    <div>
      <h1>Welcome to spring java shopping!</h1>
      <hr />
      <CurrentUsers users={users} />
      <hr />
      <AddUsers />
    </div>
  );
}

export default App;
