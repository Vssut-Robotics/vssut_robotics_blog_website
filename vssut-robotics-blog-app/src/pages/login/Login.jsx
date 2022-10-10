import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login">
        <pan className="loginTitle">Login</pan>
        <form className="loginForm">
            <label htmlFor="text">Email</label>
            <input type="text" className="loginInput" placeholder="Enter your Email...." />
            <label htmlFor="password">Password</label>
            <input type="password"className="loginInput" placeholder="Enter your Password" />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login;