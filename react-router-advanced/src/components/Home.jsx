import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const login = () => {
    localStorage.setItem("authenticated", "true");
    alert("Logged in!");
  };

  const logout = () => {
    localStorage.removeItem("authenticated");
    alert("Logged out!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post</Link>
      </nav>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Home;
