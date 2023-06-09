import React, { useState } from "react";
import { fetchUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { myData } from "../api/api";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const user = { username, password };

    const results = await fetchUser(user);

    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token: ", results.data.token);
      navigate("/");
    }
  }

  return (
    <>
      <h2 className="titles">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="username">
          <p>Username:</p>
          <input
            type="text"
            placeholder="Type Username Here..."
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="password">
          <p>Password:</p>
          <input
            type="password"
            placeholder="Type Password Here..."
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Register;
