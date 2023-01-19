import React from "react";
import "./registration.scss";

export default function Registration() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <h3>MARKET</h3>
          <div className="welcome">
            <h1>Welcome!</h1>
            <p>Login with your info</p>
            <button type="submit">SIGN IN</button>
          </div>
        </div>
        <div className="right">
          <h1>Create Account</h1>
          <p>Use your email id for registration</p>
          <form className="form">
            <div>
              <input type="name" name="name" placeholder="Name" />
            </div>
            <div>
              <input type="Email" name="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <input
                type="Confirmpassword"
                name="Confirmpassword"
                placeholder="Confirm password"
              />
            </div>
          </form>
          <div className="btn">
            <button type="submit">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}
