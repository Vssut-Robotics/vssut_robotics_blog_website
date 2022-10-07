import React from "react";
import "../css/LoginScreen.css";

function LoginScreen() {
  return (
    <div className="LoginScreen">
      {/* <div className="bg_img">
        <img
          src="https://wallpaperaccess.com/full/519171.jpg"
        />
      </div> */}
      <div className="loginScreen_body">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" name="" />
            <button>
                Get Started
            </button>
            <h4>New to Blog Page <span>SignUP</span></h4>
          </form>
      </div>
    </div>
  );
}

export default LoginScreen;
