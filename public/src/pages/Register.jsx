import React from 'react'
import "../styles/Register.css"
import Lottie from "react-lottie";
import animationData from "../assets/Register_Animation.json";

const Register = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    
  return (
    <div id="main-signup">
      <div className="content-signup">
        <div className="signup-form">
          <div id="signup-left">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div id="signup-right">
            <h1>Signup</h1>
            <div id="error-signup"></div>
            <form action="/signupUser" method="POST" name="signupForm">
              <div className="signup-inputs">
                <label className="input-labels">First Name</label>
                <input
                  className="signup-fields"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
              </div>
              <div className="signup-inputs">
                <label className="input-labels">Last Name</label>
                <input
                  className="signup-fields"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
              <div className="date-of-birth">
                <label className="dob">Date of Birth</label>
                <input type="date" className="dob-input" name="dob" required />
              </div>
              <div className="signup-inputs">
                <label className="input-labels">Phone no.</label>
                <input
                  className="signup-fields"
                  type="text"
                  placeholder="Phone no."
                  name="phone"
                  required
                />
              </div>
              <div className="signup-inputs">
                <label className="input-labels">Email</label>
                <input
                  className="signup-fields"
                  type="email"
                  placeholder="Email id"
                  name="email"
                  required
                />
              </div>
              <div className="signup-inputs">
                <label className="input-labels">Password</label>
                <input
                  className="signup-fields"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="signup-inputs">
                <label className="input-labels">Confirm Password</label>
                <input
                  className="signup-fields"
                  type="password"
                  placeholder="Password"
                  name="confirmPassword"
                  required
                />
              </div>
              <button className="signup-submit" type="submit">
                Submit
              </button>
            </form>
            <a className="signup-to-login" href="/login">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register