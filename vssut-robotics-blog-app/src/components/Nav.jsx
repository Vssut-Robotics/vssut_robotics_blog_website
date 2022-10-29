import React from "react";
import "../css/Nav.css";

function Nav() {
  return (
    <div className="NavBar">
      <img
        src="https://www.vssutrobotics.com/static/media/footer.ac1694b6.webp"
        alt=""
      />
      <div className="nav_links">
        <h4>Home</h4>

        <h4>Profile</h4>
        <h4>Contact Us</h4>
      </div>
    </div>
  );
}

export default Nav;
