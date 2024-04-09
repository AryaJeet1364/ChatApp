import React from 'react'
import "../styles/Login.css";
import Lottie from "react-lottie";
import animationData from "../assets/Login_Animation.json";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="main-login">
      <div className="content-login">
        <div className="login-form">
          <div id="login-left">
            <h1>Login</h1>
            <div id="error-login"></div>
            <form action="/loginUser" method="POST" name="loginForm">
              <input
                className="inputs"
                type="text"
                placeholder="Phone no."
                name="phone"
                required
              />
              <input
                className="inputs"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <button className="login-submit" type="submit">
                Submit
              </button>
            </form>
            <a className="login-to-signup" href="/signup">
              Don't have an account? Register
            </a>
          </div>
          <div id="login-right">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login

