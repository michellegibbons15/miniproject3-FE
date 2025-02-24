import React, {useState} from 'react'
import "../../Styles/Login/AuthForm.css"
import {NavLink} from 'react-router-dom'

export default function AuthForms() {
  const [activeForm, setActiveForm] = useState("login");
  const toggleForms = (formType) => setActiveForm(formType);

  return (
    <div className="LoginContainer">
  {/* Log in Form */}
        <div id="loginForm" className={`form-container ${activeForm === "login" ? "active" : "hidden"}`}>
          <h2>Log In</h2>
          <form>
            <label htmlFor="first">Username:</label>
            <input type="text" id="first" name="first" placeholder="Enter your Username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" required />
            <button type="button">
              <NavLink to="/dashboard">Log In</NavLink>
            </button>
            <label className="rememberMe">
              <input type="checkbox" className="checkbox" />Remember Me
            </label>
            <p><a href="#" onClick={() => toggleForms("forgotPassword")}>Forgot Password?</a></p>
            <p>Don't have an account? <a href="#" onClick={() => toggleForms("signup")}>Sign up</a></p>
          </form>
        </div>
  {/* Sign  up Form */}
        <div id="signupForm" className={`form-container ${activeForm === "signup" ? "active" : "hidden"}`}>
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="newUser">Username:</label>
            <input type="text" id="newUser" name="newUser" placeholder="Enter your Username" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email" required />
            <label htmlFor="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" placeholder="Enter your Password" required />
            <button type="submit">Sign Up</button>
            <p>Already have an account? <a href="#" onClick={() => toggleForms("login")}>Log in</a></p>
          </form>
        </div>
  {/* Forgot Password Form */}
        <div id="forgotPasswordForm" className={`form-container ${activeForm === "forgotPassword" ? "active" : "hidden"}`}>
          <h2>Forgot Password?</h2>
          <form>
            <label htmlFor="emailReset">Enter your Email:</label>
            <input type="email" id="emailReset" name="emailReset" placeholder="Enter your Email" required />
            <button type="submit">Reset Password</button>
            <p>Remember your password? <a href="#" onClick={() => toggleForms("login")}>Log in</a></p>
          </form>
        </div>
     
    </div>
  );
}