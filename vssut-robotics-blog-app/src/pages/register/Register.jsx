import React from 'react';
import './register.css';

const Register = () => {
  return (
     <div className="register">
        <pan className="registerTitle">Register</pan>
        <form className="registerForm">
             <label htmlFor="text">Username</label>
            <input type="text" className="registerInput" placeholder="Enter your Username" />
            <label htmlFor="text">Email</label>
            <input type="text" className="registerInput" placeholder="Enter your Email...." />
            <label htmlFor="password">Password</label>
            <input type="password"className="registerInput" placeholder="Enter your Password" />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}

export default Register