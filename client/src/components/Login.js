import React, { useState } from "react";
import Axios from "axios";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/login", creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => console.log(err));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          value={creds.username}
          onChange={handleChange}
        />
        <input
          name='password'
          type='password'
          value={creds.password}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Login;
