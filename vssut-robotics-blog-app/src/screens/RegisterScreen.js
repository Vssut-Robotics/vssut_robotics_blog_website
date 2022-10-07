import React from "react";
import "../css/RegisterScreen.css"

function RegisterScreen() {
  return (
    <div className="RegisterScreen">
      <div className="registerScreen_body">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" name="" />
            <button>
                Get Started
            </button>
            <h4>Already SignedUp <span>LogIn</span></h4>
          </form>
      </div>
    </div>
  );
}

export default RegisterScreen;
