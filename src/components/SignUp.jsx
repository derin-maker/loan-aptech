import React from "react";
import "./SignUp.css";  
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div class="card">
      <h1>Sign Up</h1>

      <div class="field">
        <input type="text" placeholder="Name" />
      </div>

      <div class="field">
        <input type="email" placeholder="user@email.com" />
      </div>

      <div class="field">
        <input type="password" placeholder="Password" />
      </div>

      <div class="field">
        <input type="password" placeholder="Confirm Password" />
      </div>

      <button class="btn-signup">
        <Link to="/" className="signup-btn">Sign Up</Link>
        </button>

      <p class="login-link">
        Already have an account? 
        <Link to="/login" class="login-link-text">Log In</Link>
      </p>
    </div>
  );
}
