import React, {useState, useEffect} from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const user = { username, password };

    const results = await login(user);

    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token: ", results.data.token);
      navigate("/")
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
